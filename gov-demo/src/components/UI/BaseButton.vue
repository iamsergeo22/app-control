<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>

button {
  font: inherit;
  border: 1px solid #c172ff;
  background-color: #c172ff;
  color: white;
  padding: 1rem 1rem;
  cursor: pointer;
  border-radius: 35px;
  
  
}

button:hover,
button:active {
  background-color: #570530;
  border-color: #570530;
}
</style>