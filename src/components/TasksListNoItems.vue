<template>
  <div class="list-no-items">
    <font-awesome-icon icon="check" class="no-items-icon" />
    <div class="label">No hay tareas pendientes</div>
  </div>
</template>

<script>
export default {
  name: "TasksListNoItems"
};
</script>

<style lang="scss" scoped>
.list-no-items {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  row-gap: 10px;
  width: 100%;
  color: $gray;

  .no-items-icon {
    font-size: 2rem;
  }
}
</style>
