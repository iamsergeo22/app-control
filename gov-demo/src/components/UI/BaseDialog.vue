<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 65%;
  width: 20%;
  height: 50%;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5rem;
  border-color: #0F044C;
}
</style>