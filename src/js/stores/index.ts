import TodoStore from './TodoStore'
import ViewStore from './ViewStore'

const viewStore = new ViewStore();
const todoStore = new TodoStore();

const stores = {
  viewStore,
  todoStore,
};


export default stores;