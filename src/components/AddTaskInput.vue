<template>
  <base-input v-model="taskName" placeholder="Nueva tarea" @enter="onAddTask">
    <base-button
      label="Añadir"
      type="negative"
      :disabled="!validTaskName"
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
    validTaskName() {
      return Boolean(this.taskName?.trim());
    }
  },

  methods: {
    onAddTask() {
      if (this.validTaskName) {
        this.$store
          .dispatch("addTask", {
            id: Date.now(),
            checked: false,
            name: this.taskName
          })
          .then(() => {
            this.taskName = undefined;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
