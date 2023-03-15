<header class="global-header">
  <div class="global-header__container">
    <slot />
  </div>
</header>
<style>
.global-header {
  width: 100%;
  position: relative;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  will-change: background;
  background-color: #fff;
  border-bottom: 1px solid #d1d1d6;
  z-index: 9;
}

.global-header__container {
  display: grid;
  grid-template-areas: "menu logo search group";
  grid-template-columns: 32px 72px 1fr minmax(auto, max-content);
  gap: 8px;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1256px;
  padding: 0px 8px; 
}

@media (max-width: 560px) {
  .global-header__container {
    padding: 8px;
    grid-template-areas: "menu logo search group";
    grid-template-columns: 36px 40px 1fr 64px;
  }
}
</style>