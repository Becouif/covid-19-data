<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #360032;
  background-color: #003111;
  color: #eee;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #eee;
  border-color: black;
  color: black;
}
</style>
