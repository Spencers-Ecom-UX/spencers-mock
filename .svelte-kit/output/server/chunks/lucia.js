import { randomFillSync } from "crypto";
import prismaAdapter from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { b as private_env } from "./shared-server.js";
const __toString = Object.prototype.toString;
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const parseCookie = (str, options) => {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options ?? {};
  const dec = opt.decode ?? decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
};
const serializeCookie = (name, val, options) => {
  const opt = options ?? {};
  const enc = opt.encode ?? encode;
  if (!fieldContentRegExp.test(name))
    throw new TypeError("argument name is invalid");
  const value = enc(val);
  if (value && !fieldContentRegExp.test(value))
    throw new TypeError("argument val is invalid");
  let str = name + "=" + value;
  if (null != opt.maxAge) {
    const maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge))
      throw new TypeError("option maxAge is invalid");
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain))
      throw new TypeError("option domain is invalid");
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path))
      throw new TypeError("option path is invalid");
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    const expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf()))
      throw new TypeError("option expires is invalid");
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
};
const decode = (str) => {
  return str.includes("%") ? decodeURIComponent(str) : str;
};
const encode = (val) => {
  return encodeURIComponent(val);
};
const isDate = (val) => {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
};
const tryDecode = (str, decodeFunction) => {
  try {
    return decodeFunction(str);
  } catch (e) {
    return str;
  }
};
const SESSION_COOKIE_NAME = "auth_session";
const createSessionCookie = (session, env, options) => {
  return new Cookie(SESSION_COOKIE_NAME, session?.sessionId ?? "", {
    ...options,
    httpOnly: true,
    expires: new Date(session?.idlePeriodExpires ?? 0),
    secure: env === "PROD"
  });
};
class Cookie {
  constructor(name, value, options) {
    this.name = name;
    this.value = value;
    this.attributes = options;
  }
  name;
  value;
  attributes;
  serialize = () => {
    return serializeCookie(this.name, this.value, this.attributes);
  };
}
const logError = (message) => {
  console.log("\x1B[31m%s\x1B[31m", `[LUCIA_ERROR] ${message}`);
};
const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
let fillPool = (bytes2) => {
  if (!pool || pool.length < bytes2) {
    pool = Buffer.allocUnsafe(bytes2 * POOL_SIZE_MULTIPLIER);
    randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes2 > pool.length) {
    randomFillSync(pool);
    poolOffset = 0;
  }
  poolOffset += bytes2;
};
let random = (bytes2) => {
  fillPool(bytes2 -= 0);
  return pool.subarray(poolOffset - bytes2, poolOffset);
};
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
  let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes2 = getRandom(step);
      let i = step;
      while (i--) {
        id += alphabet[bytes2[i] & mask] || "";
        if (id.length === size)
          return id;
      }
    }
  };
};
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
  if (typeof b !== "boolean")
    throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash2.outputLen);
  number(hash2.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert = {
  number,
  bool,
  bytes,
  hash,
  exists,
  output
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift) => word << 32 - shift | word >>> shift;
const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
const nextTick = async () => {
};
async function asyncLoop(iters, tick, cb) {
  let ts = Date.now();
  for (let i = 0; i < iters; i++) {
    cb(i);
    const diff = Date.now() - ts;
    if (diff >= 0 && diff < tick)
      continue;
    await nextTick();
    ts += diff;
  }
}
function utf8ToBytes(str) {
  if (typeof str !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
  if (opts !== void 0 && (typeof opts !== "object" || !isPlainObject(opts)))
    throw new TypeError("Options should be object or undefined");
  const merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
class SHA2 extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    assert.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert.exists(this);
    assert.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const Chi = (a, b, c) => a & b ^ ~a & c;
const Maj = (a, b, c) => a & b ^ a & c ^ b & c;
const SHA256_K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA256_W = new Uint32Array(64);
class SHA256 extends SHA2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
}
class SHA224 extends SHA256 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
}
const sha256 = wrapConstructor(() => new SHA256());
wrapConstructor(() => new SHA224());
class HMAC extends Hash {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    assert.hash(hash2);
    const key = toBytes(_key);
    this.iHash = hash2.create();
    if (typeof this.iHash.update !== "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash2.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    assert.exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    assert.exists(this);
    assert.bytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
}
const hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
hmac.create = (hash2, key) => new HMAC(hash2, key);
function pbkdf2Init(hash2, _password, _salt, _opts) {
  assert.hash(hash2);
  const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
  const { c, dkLen, asyncTick } = opts;
  assert.number(c);
  assert.number(dkLen);
  assert.number(asyncTick);
  if (c < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const password = toBytes(_password);
  const salt = toBytes(_salt);
  const DK = new Uint8Array(dkLen);
  const PRF = hmac.create(hash2, password);
  const PRFSalt = PRF._cloneInto().update(salt);
  return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
  PRF.destroy();
  PRFSalt.destroy();
  if (prfW)
    prfW.destroy();
  u.fill(0);
  return DK;
}
function pbkdf2(hash2, password, salt, opts) {
  const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash2, password, salt, opts);
  let prfW;
  const arr = new Uint8Array(4);
  const view = createView(arr);
  const u = new Uint8Array(PRF.outputLen);
  for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
    const Ti = DK.subarray(pos, pos + PRF.outputLen);
    view.setInt32(0, ti, false);
    (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
    Ti.set(u.subarray(0, Ti.length));
    for (let ui = 1; ui < c; ui++) {
      PRF._cloneInto(prfW).update(u).digestInto(u);
      for (let i = 0; i < Ti.length; i++)
        Ti[i] ^= u[i];
    }
  }
  return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
const rotl = (a, b) => a << b | a >>> 32 - b;
function XorAndSalsa(prev, pi, input, ii, out, oi) {
  let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
  let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
  let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
  let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
  let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
  let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
  let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
  let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
  let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
  for (let i = 0; i < 8; i += 2) {
    x04 ^= rotl(x00 + x12 | 0, 7);
    x08 ^= rotl(x04 + x00 | 0, 9);
    x12 ^= rotl(x08 + x04 | 0, 13);
    x00 ^= rotl(x12 + x08 | 0, 18);
    x09 ^= rotl(x05 + x01 | 0, 7);
    x13 ^= rotl(x09 + x05 | 0, 9);
    x01 ^= rotl(x13 + x09 | 0, 13);
    x05 ^= rotl(x01 + x13 | 0, 18);
    x14 ^= rotl(x10 + x06 | 0, 7);
    x02 ^= rotl(x14 + x10 | 0, 9);
    x06 ^= rotl(x02 + x14 | 0, 13);
    x10 ^= rotl(x06 + x02 | 0, 18);
    x03 ^= rotl(x15 + x11 | 0, 7);
    x07 ^= rotl(x03 + x15 | 0, 9);
    x11 ^= rotl(x07 + x03 | 0, 13);
    x15 ^= rotl(x11 + x07 | 0, 18);
    x01 ^= rotl(x00 + x03 | 0, 7);
    x02 ^= rotl(x01 + x00 | 0, 9);
    x03 ^= rotl(x02 + x01 | 0, 13);
    x00 ^= rotl(x03 + x02 | 0, 18);
    x06 ^= rotl(x05 + x04 | 0, 7);
    x07 ^= rotl(x06 + x05 | 0, 9);
    x04 ^= rotl(x07 + x06 | 0, 13);
    x05 ^= rotl(x04 + x07 | 0, 18);
    x11 ^= rotl(x10 + x09 | 0, 7);
    x08 ^= rotl(x11 + x10 | 0, 9);
    x09 ^= rotl(x08 + x11 | 0, 13);
    x10 ^= rotl(x09 + x08 | 0, 18);
    x12 ^= rotl(x15 + x14 | 0, 7);
    x13 ^= rotl(x12 + x15 | 0, 9);
    x14 ^= rotl(x13 + x12 | 0, 13);
    x15 ^= rotl(x14 + x13 | 0, 18);
  }
  out[oi++] = y00 + x00 | 0;
  out[oi++] = y01 + x01 | 0;
  out[oi++] = y02 + x02 | 0;
  out[oi++] = y03 + x03 | 0;
  out[oi++] = y04 + x04 | 0;
  out[oi++] = y05 + x05 | 0;
  out[oi++] = y06 + x06 | 0;
  out[oi++] = y07 + x07 | 0;
  out[oi++] = y08 + x08 | 0;
  out[oi++] = y09 + x09 | 0;
  out[oi++] = y10 + x10 | 0;
  out[oi++] = y11 + x11 | 0;
  out[oi++] = y12 + x12 | 0;
  out[oi++] = y13 + x13 | 0;
  out[oi++] = y14 + x14 | 0;
  out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
  let head = oi + 0;
  let tail = oi + 16 * r;
  for (let i = 0; i < 16; i++)
    out[tail + i] = input[ii + (2 * r - 1) * 16 + i];
  for (let i = 0; i < r; i++, head += 16, ii += 16) {
    XorAndSalsa(out, tail, input, ii, out, head);
    if (i > 0)
      tail += 16;
    XorAndSalsa(out, head, input, ii += 16, out, tail);
  }
}
function scryptInit(password, salt, _opts) {
  const opts = checkOpts({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1024 ** 3 + 1024
  }, _opts);
  const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
  assert.number(N);
  assert.number(r);
  assert.number(p);
  assert.number(dkLen);
  assert.number(asyncTick);
  assert.number(maxmem);
  if (onProgress !== void 0 && typeof onProgress !== "function")
    throw new Error("progressCb should be function");
  const blockSize = 128 * r;
  const blockSize32 = blockSize / 4;
  if (N <= 1 || (N & N - 1) !== 0 || N >= 2 ** (blockSize / 8) || N > 2 ** 32) {
    throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  }
  if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  }
  if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  }
  const memUsed = blockSize * (N + p);
  if (memUsed > maxmem) {
    throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
  }
  const B = pbkdf2(sha256, password, salt, { c: 1, dkLen: blockSize * p });
  const B32 = u32(B);
  const V = u32(new Uint8Array(blockSize * N));
  const tmp = u32(new Uint8Array(blockSize));
  let blockMixCb = () => {
  };
  if (onProgress) {
    const totalBlockMix = 2 * N * p;
    const callbackPer = Math.max(Math.floor(totalBlockMix / 1e4), 1);
    let blockMixCnt = 0;
    blockMixCb = () => {
      blockMixCnt++;
      if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
        onProgress(blockMixCnt / totalBlockMix);
    };
  }
  return { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
}
function scryptOutput(password, dkLen, B, V, tmp) {
  const res = pbkdf2(sha256, password, B, { c: 1, dkLen });
  B.fill(0);
  V.fill(0);
  tmp.fill(0);
  return res;
}
async function scryptAsync(password, salt, opts) {
  const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
  for (let pi = 0; pi < p; pi++) {
    const Pi = blockSize32 * pi;
    for (let i = 0; i < blockSize32; i++)
      V[i] = B32[Pi + i];
    let pos = 0;
    await asyncLoop(N - 1, asyncTick, (i) => {
      BlockMix(V, pos, V, pos += blockSize32, r);
      blockMixCb();
    });
    BlockMix(V, (N - 1) * blockSize32, B32, Pi, r);
    blockMixCb();
    await asyncLoop(N, asyncTick, (i) => {
      const j = B32[Pi + blockSize32 - 16] % N;
      for (let k = 0; k < blockSize32; k++)
        tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k];
      BlockMix(tmp, 0, B32, Pi, r);
      blockMixCb();
    });
  }
  return scryptOutput(password, dkLen, B, V, tmp);
}
const generateRandomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  return customRandom(characters, length, random)();
};
const generateHashWithScrypt = async (s) => {
  const salt = generateRandomString(16);
  const key = await scrypt(s.normalize("NFKC"), salt);
  return `s2:${salt}:${key}`;
};
const scrypt = async (s, salt, blockSize = 16) => {
  const keyUint8Array = await scryptAsync(new TextEncoder().encode(s), new TextEncoder().encode(salt), {
    N: 16384,
    r: blockSize,
    p: 1,
    dkLen: 64
  });
  return convertUint8ArrayToHex(keyUint8Array);
};
const validateScryptHash = async (s, hash2) => {
  const arr = hash2.split(":");
  if (arr.length === 2) {
    const [salt2, key2] = arr;
    const targetKey = await scrypt(s, salt2, 8);
    return constantTimeEqual(targetKey, key2);
  }
  if (arr.length !== 3)
    return false;
  const [version, salt, key] = arr;
  if (version === "s2") {
    const targetKey = await scrypt(s, salt);
    return constantTimeEqual(targetKey, key);
  }
  return false;
};
const constantTimeEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  const aUint8Array = new TextEncoder().encode(a);
  const bUint8Array = new TextEncoder().encode(b);
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    c |= aUint8Array[i] ^ bUint8Array[i];
  }
  return c === 0;
};
const convertUint8ArrayToHex = (arr) => {
  return [...arr].map((x) => x.toString(16).padStart(2, "0")).join("");
};
class LuciaError extends Error {
  constructor(errorMsg, detail) {
    super(errorMsg);
    this.message = errorMsg;
    this.detail = detail ?? "";
  }
  detail;
  message;
}
const transformDatabaseSessionData = (databaseSession) => {
  const currentTime = new Date().getTime();
  if (currentTime > databaseSession.idle_expires)
    return null;
  return {
    sessionId: databaseSession.id,
    userId: databaseSession.user_id,
    activePeriodExpires: new Date(Number(databaseSession.active_expires)),
    idlePeriodExpires: new Date(Number(databaseSession.idle_expires)),
    state: currentTime > databaseSession.active_expires ? "idle" : "active",
    isFresh: false
  };
};
const transformDatabaseKeyData = (databaseKey) => {
  const [providerId, ...providerUserIdSegments] = databaseKey.id.split(":");
  return {
    providerId,
    providerUserId: providerUserIdSegments.join(":"),
    isPrimary: databaseKey.primary,
    isPasswordDefined: !!databaseKey.hashed_password,
    userId: databaseKey.user_id
  };
};
const lucia = (configs) => {
  return new Auth(configs);
};
const validateConfigurations = (configs) => {
  const isAdapterProvided = configs.adapter;
  if (!isAdapterProvided) {
    logError('Adapter is not defined in configuration ("config.adapter")');
    process.exit(1);
  }
};
class Auth {
  adapter;
  generateUserId;
  sessionCookie;
  sessionTimeout;
  ENV;
  hash;
  autoDatabaseCleanup;
  transformUserData;
  csrfProtection;
  constructor(configs) {
    validateConfigurations(configs);
    const defaultSessionCookieOption = {
      sameSite: "lax",
      path: "/"
    };
    if ("user" in configs.adapter) {
      if ("getSessionAndUserBySessionId" in configs.adapter.user) {
        delete configs.adapter.user.getSessionAndUserBySessionId;
      }
      if ("getSessionAndUserBySessionId" in configs.adapter.session) {
        delete configs.adapter.session.getSessionAndUserBySessionId;
      }
    }
    this.adapter = "user" in configs.adapter ? {
      ...configs.adapter.user(LuciaError),
      ...configs.adapter.session(LuciaError)
    } : configs.adapter(LuciaError);
    this.generateUserId = configs.generateCustomUserId ?? (() => generateRandomString(15));
    this.ENV = configs.env;
    this.csrfProtection = configs.csrfProtection ?? true;
    this.sessionTimeout = {
      activePeriod: configs.sessionTimeout?.activePeriod ?? 1e3 * 60 * 60 * 24,
      idlePeriod: configs.sessionTimeout?.idlePeriod ?? 1e3 * 60 * 60 * 24 * 14
    };
    this.autoDatabaseCleanup = configs.autoDatabaseCleanup ?? true;
    this.transformUserData = ({ id, hashed_password, provider_id, ...attributes }) => {
      const transform = configs.transformUserData ?? (({ id: id2 }) => {
        return {
          userId: id2
        };
      });
      return transform({ id, ...attributes });
    };
    this.sessionCookie = configs.sessionCookie ?? [defaultSessionCookieOption];
    this.hash = {
      generate: configs.hash?.generate ?? generateHashWithScrypt,
      validate: configs.hash?.validate ?? validateScryptHash
    };
  }
  getUser = async (userId) => {
    const databaseUser = await this.adapter.getUser(userId);
    if (!databaseUser)
      throw new LuciaError("AUTH_INVALID_USER_ID");
    const user = this.transformUserData(databaseUser);
    return user;
  };
  getSessionUser = async (sessionId) => {
    if (sessionId.length !== 40)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    let userData;
    let sessionData;
    if (this.adapter.getSessionAndUserBySessionId !== void 0) {
      const databaseUserSession = await this.adapter.getSessionAndUserBySessionId(sessionId);
      if (!databaseUserSession)
        throw new LuciaError("AUTH_INVALID_SESSION_ID");
      userData = databaseUserSession.user;
      sessionData = databaseUserSession.session;
    } else {
      sessionData = await this.adapter.getSession(sessionId);
      userData = sessionData ? await this.adapter.getUser(sessionData.user_id) : null;
    }
    if (!sessionData)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    const session = transformDatabaseSessionData(sessionData);
    if (!session) {
      if (this.autoDatabaseCleanup) {
        await this.adapter.deleteSession(sessionId);
      }
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    }
    if (!userData)
      throw new LuciaError("AUTH_INVALID_USER_ID");
    return {
      user: this.transformUserData(userData),
      session
    };
  };
  createUser = async (data) => {
    const userId = await this.generateUserId();
    const userAttributes = data.attributes ?? {};
    if (data.key) {
      const keyId = `${data.key.providerId}:${data.key.providerUserId}`;
      const password = data.key.password;
      const hashedPassword = password ? await this.hash.generate(password) : null;
      const userData2 = await this.adapter.setUser(userId, userAttributes, {
        id: keyId,
        user_id: userId,
        hashed_password: hashedPassword,
        primary: true
      });
      const user2 = this.transformUserData(userData2);
      return user2;
    }
    const userData = await this.adapter.setUser(userId, userAttributes, null);
    const user = this.transformUserData(userData);
    return user;
  };
  updateUserAttributes = async (userId, attributes) => {
    const [userData] = await Promise.all([
      this.adapter.updateUserAttributes(userId, attributes),
      this.autoDatabaseCleanup ? await this.deleteDeadUserSessions(userId) : null
    ]);
    const user = this.transformUserData(userData);
    return user;
  };
  deleteUser = async (userId) => {
    await this.adapter.deleteSessionsByUserId(userId);
    await this.adapter.deleteKeysByUserId(userId);
    await this.adapter.deleteUser(userId);
  };
  validateKeyPassword = async (providerId, providerUserId, password) => {
    const keyId = `${providerId}:${providerUserId}`;
    const databaseKeyData = await this.adapter.getKey(keyId);
    if (!databaseKeyData)
      throw new LuciaError("AUTH_INVALID_KEY_ID");
    const hashedPassword = databaseKeyData.hashed_password;
    if (!hashedPassword)
      throw new LuciaError("AUTH_INVALID_PASSWORD");
    if (hashedPassword.startsWith("$2a"))
      throw new LuciaError("AUTH_OUTDATED_PASSWORD");
    const isValidPassword = await this.hash.validate(password, hashedPassword);
    if (!isValidPassword)
      throw new LuciaError("AUTH_INVALID_PASSWORD");
    return transformDatabaseKeyData(databaseKeyData);
  };
  getSession = async (sessionId) => {
    if (sessionId.length !== 40)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    const databaseSession = await this.adapter.getSession(sessionId);
    if (!databaseSession)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    const session = transformDatabaseSessionData(databaseSession);
    if (!session) {
      if (this.autoDatabaseCleanup) {
        await this.adapter.deleteSession(sessionId);
      }
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    }
    return session;
  };
  getAllUserSessions = async (userId) => {
    await this.getUser(userId);
    const databaseData = await this.adapter.getSessionsByUserId(userId);
    return databaseData.map((val) => transformDatabaseSessionData(val));
  };
  validateSession = async (sessionId) => {
    const session = await this.getSession(sessionId);
    if (session.state === "active")
      return session;
    const renewedSession = await this.renewSession(sessionId);
    return renewedSession;
  };
  validateSessionUser = async (sessionId) => {
    const { session, user } = await this.getSessionUser(sessionId);
    if (session.state === "active")
      return { session, user };
    const renewedSession = await this.renewSession(sessionId);
    return {
      session: renewedSession,
      user
    };
  };
  generateSessionId = () => {
    const sessionId = generateRandomString(40);
    const activePeriodExpires = new Date(new Date().getTime() + this.sessionTimeout.activePeriod);
    const idlePeriodExpires = new Date(activePeriodExpires.getTime() + this.sessionTimeout.idlePeriod);
    return [sessionId, activePeriodExpires, idlePeriodExpires];
  };
  createSession = async (userId) => {
    const [sessionId, activePeriodExpires, idlePeriodExpires] = this.generateSessionId();
    await Promise.all([
      this.adapter.setSession({
        id: sessionId,
        user_id: userId,
        active_expires: activePeriodExpires.getTime(),
        idle_expires: idlePeriodExpires.getTime()
      }),
      this.autoDatabaseCleanup ? await this.deleteDeadUserSessions(userId) : null
    ]);
    return {
      userId,
      activePeriodExpires,
      sessionId,
      idlePeriodExpires,
      state: "active",
      isFresh: true
    };
  };
  renewSession = async (sessionId) => {
    if (sessionId.length !== 40)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    const sessionData = await this.adapter.getSession(sessionId);
    if (!sessionData)
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    const session = transformDatabaseSessionData(sessionData);
    if (!session) {
      if (this.autoDatabaseCleanup) {
        await this.adapter.deleteSession(sessionId);
      }
      throw new LuciaError("AUTH_INVALID_SESSION_ID");
    }
    const [renewedSession] = await Promise.all([
      await this.createSession(session.userId),
      this.autoDatabaseCleanup ? await this.deleteDeadUserSessions(session.userId) : null
    ]);
    return renewedSession;
  };
  invalidateSession = async (sessionId) => {
    await this.adapter.deleteSession(sessionId);
  };
  invalidateAllUserSessions = async (userId) => {
    await this.adapter.deleteSessionsByUserId(userId);
  };
  deleteDeadUserSessions = async (userId) => {
    const sessions = await this.adapter.getSessionsByUserId(userId);
    const currentTime = new Date().getTime();
    const deadSessionIds = sessions.filter((val) => val.idle_expires < currentTime).map((val) => val.id);
    if (deadSessionIds.length === 0)
      return;
    await this.adapter.deleteSession(...deadSessionIds);
  };
  validateRequestHeaders = (request) => {
    const cookies = parseCookie(request.headers.get("cookie") ?? "");
    const sessionId = cookies.auth_session ?? "";
    const checkForCsrf = request.method !== "GET" && request.method !== "HEAD";
    if (checkForCsrf && this.csrfProtection) {
      const origin = request.headers.get("Origin");
      if (!origin)
        throw new LuciaError("AUTH_INVALID_REQUEST");
      const url = new URL(request.url);
      if (url.origin !== origin)
        throw new LuciaError("AUTH_INVALID_REQUEST");
    }
    return sessionId;
  };
  createSessionCookies = (session) => {
    return this.sessionCookie.map((options) => createSessionCookie(session, this.ENV, options));
  };
  createKey = async (userId, keyData) => {
    const keyId = `${keyData.providerId}:${keyData.providerUserId}`;
    const hashedPassword = keyData.password ? await this.hash.generate(keyData.password) : null;
    await this.adapter.setKey({
      id: keyId,
      user_id: userId,
      hashed_password: hashedPassword,
      primary: false
    });
    return {
      providerId: keyData.providerId,
      providerUserId: keyData.providerUserId,
      isPrimary: false,
      isPasswordDefined: !!keyData.password,
      userId
    };
  };
  deleteKey = async (providerId, providerUserId) => {
    const keyId = `${providerId}:${providerUserId}`;
    await this.adapter.deleteNonPrimaryKey(keyId);
  };
  getKey = async (providerId, providerUserId) => {
    const keyId = `${providerId}:${providerUserId}`;
    const keyData = await this.adapter.getKey(keyId);
    if (!keyData)
      throw new LuciaError("AUTH_INVALID_KEY_ID");
    return {
      providerId,
      providerUserId,
      isPrimary: keyData.primary,
      isPasswordDefined: !!keyData.hashed_password,
      userId: keyData.user_id
    };
  };
  getKeyUser = async (providerId, providerUserId) => {
    const key = await this.getKey(providerId, providerUserId);
    const user = await this.getUser(key.userId);
    return {
      key,
      user
    };
  };
  getAllUserKeys = async (userId) => {
    await this.getUser(userId);
    const databaseData = await this.adapter.getKeysByUserId(userId);
    return databaseData.map((val) => transformDatabaseKeyData(val));
  };
  updateKeyPassword = async (providerId, providerUserId, password) => {
    const keyId = `${providerId}:${providerUserId}`;
    const hashedPassword = password ? await this.hash.generate(password) : null;
    await this.adapter.updateKeyPassword(keyId, hashedPassword);
  };
}
const prisma = global.prisma || new PrismaClient();
if (private_env.NODE_ENV === "development") {
  global.prisma = prisma;
}
const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: "PROD",
  transformUserData: (userData) => {
    return {
      userId: userData.id,
      username: userData.username,
      name: userData.name
    };
  }
});
export {
  SESSION_COOKIE_NAME as S,
  auth as a
};
