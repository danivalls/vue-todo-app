import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },

  getters: {
    getTasks: ({ tasks }) => tasks
  },

  mutations: {
    mutateTasks(state, tasksList) {
      state.tasks = tasksList;
    },

    mutateTaskState(state, task) {
      const taskToMutate = state.tasks.find(({ id }) => id === task.id);

      taskToMutate.checked = task.checked;
    },

    mutateAddTask(state, task) {
      state.tasks.push(task);
    }
  },

  actions: {
    setTasks({ commit }, tasksList) {
      commit("mutateTasks", tasksList);
    },

    addTask({ commit }, task) {
      commit("mutateAddTask", task);
    },

    updateTaskState({ commit }, task) {
      commit("mutateTaskState", task);
    }
  }
});
