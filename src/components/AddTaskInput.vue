<template>
  <base-input v-model="taskName" placeholder="Nueva tarea" @enter="onAddTask">
    <base-button
      label="Añadir"
      type="negative"
      :disabled="!taskName"
      @click="onAddTask"
    />
  </base-input>
</template>

<script>
import BaseInput from "./ui/BaseInput";
import BaseButton from "./ui/BaseButton";

export default {
  name: "AddTaskInput",
  components: {
    BaseInput,
    BaseButton
  },

  data() {
    return {
      taskName: undefined
    };
  },

  computed: {
    newTask() {
      return { checked: false, name: this.taskName };
    }
  },

  methods: {
    onAddTask() {
      this.$emit("newTask", this.newTask);
      this.taskName = undefined;
    }
  }
};
</script>

<style lang="scss" scoped></style>
