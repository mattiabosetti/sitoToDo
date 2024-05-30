// Inizializza lo stato dell'applicazione con un array vuoto di compiti
export const state = () => ({
	tasks: []
  })
  
  // Definisce le mutazioni che possono modificare lo stato
  export const mutations = {
	// Aggiunge un nuovo compito allo stato
	ADD_TASK(state, task) {
	  // Crea un nuovo oggetto compito con il contenuto fornito e lo stato "non completato",
	  // quindi aggiunge questo nuovo compito all'inizio dell'array dei compiti nello stato attuale
	  state.tasks = [{ content: task, done: false }, ...state.tasks];
	},
	// Rimuove un compito dallo stato
	REMOVE_TASK(state, task) {
	  // Trova l'indice del compito da rimuovere nell'array dei compiti nello stato attuale,
	  // quindi rimuove quel compito dall'array
	  state.tasks.splice(state.tasks.indexOf(task), 1); // 1 indica la rimozione di un solo elemento
	},
	// Cambia lo stato di completamento di un compito
	TOGGLE_TASK(state, task) {
	  // Cambia lo stato di completamento del compito specificato:
	  // se era "completato", lo imposta su "non completato", e viceversa
	  task.done = !task.done;
	},
	REMOVE_ALL_TASKS(state) {
		state.tasks = []; // Svuota l'array dei compiti
	  },
	COMPLETE_ALL_TASKS(state) {
		state.tasks.forEach(task => {
			task.done = true;
		});
	},
	RESET_ALL_TASKS(state) {
		state.tasks.forEach(task => {
			task.done = false;
		});
	}
  }


  export const getters = {
	// Aggiungi un getter per ottenere le tasks ordinate
	sortedTasks(state) {
	  // Ordina le tasks in modo che le task completate siano visualizzate dopo quelle non completate
	  return [...state.tasks].sort((a, b) => {
		if (a.done && !b.done) {
		  return 1; // Se a è completato e b non lo è, metti a dopo b
		} else if (!a.done && b.done) {
		  return -1; // Se b è completato e a non lo è, metti a prima di b
		} else {
		  return 0; // Altrimenti, lascia l'ordine invariato
		}
	  });
	}
  }