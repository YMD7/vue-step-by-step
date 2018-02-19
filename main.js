Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.task }}</task>
    </ul>
  `,
  data () {
    return {
      tasks: [
        { id: 0, task: 'Go to the store', complete: true },
        { id: 3, task: 'Go to the email', complete: false },
        { id: 1, task: 'Go to the farm', complete: true },
        { id: 2, task: 'Go to work', complete: false }
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
