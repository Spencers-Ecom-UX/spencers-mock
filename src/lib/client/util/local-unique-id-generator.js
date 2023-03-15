let id = 0;

function nextId() {
  return ++id;
}

function generateId() {
  return nextId();
}

export default generateId;