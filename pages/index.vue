<template>
  <main>
    <!-- Titolo e descrizione del task board -->
    <h1>Task Board</h1>
    <p>Crea una lista di compiti</p>

    <!-- Sezione per aggiungere nuovi compiti -->
    <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Aggiungi un nuovo compito" 
        @keypress.enter="addTask" />
      <button class="aggiungi" @click="addTask">Aggiungi</button>
      <button class="rimuovi" @click="removeAllTasks">Rimuovi tutto</button>
    </div>

    <!-- Sezione per completare e resettare tutti i compiti -->
    <div class="buttons">
      <button @click="completeAllTasks">Completa tutte</button>
      <button @click="resetAllTasks">Resetta tutte</button>
    </div>

    <!-- Elenco dei compiti -->
    <div class="tasks">
      <Task
        v-for="(task, i) in sortedTasks"
        :key="i"
        :task="task" />
    </div>

  </main>
</template>

<script>
export default {
  data (){
    return {
      newTask: '' // Variabile per memorizzare il nuovo compito inserito dall'utente
    }
  },
  methods: {
    // Metodo per aggiungere un nuovo compito
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = ''; // Resetta il campo di input dopo l'aggiunta del compito
      }
    },
    // Metodo per rimuovere tutti i compiti
    removeAllTasks() {
      this.$store.commit('REMOVE_ALL_TASKS');
    },
    // Metodo per completare tutti i compiti
    completeAllTasks() {
      this.$store.commit('COMPLETE_ALL_TASKS');
    },
    // Metodo per resettare tutti i compiti
    resetAllTasks() {
      this.$store.commit('RESET_ALL_TASKS');
    }
  },
  computed: {
    // Utilizza il getter sortedTasks per ottenere i compiti ordinati
    sortedTasks() {
      return this.$store.getters.sortedTasks;
    }
  },
  // Metodo head per impostare il titolo della pagina
  head() {
    return {
      title: "ToDo list from Bossetti"
    };
  }
}
</script>
