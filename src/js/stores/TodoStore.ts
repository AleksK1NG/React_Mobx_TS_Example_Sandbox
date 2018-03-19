import {observable, computed, action} from 'mobx'
import axios from 'axios';


class TodoStore {

  @observable myTitle: string = 'React Mobx TS';
  @observable todoItem: any = '';
  @observable todoList: Array<any> = [];
  @observable fetchData: Array<any> = [];

  @action  consoleLog = () => {
    console.log('todoStore', this.myTitle);
  };

  @action setTodoItem = (payload: any) => {
    this.todoItem = payload;
  };

  @action addTodo = () => {
    this.todoList.push(this.todoItem);
    this.todoItem = '';
  };

  @action deleteTodo = (payload: any) => {
    this.todoList.splice(payload, 1);
  };
  @action asyncAction = (payload: any) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log(response.data);
        this.fetchData = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  };
  @action asyncAwait = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log(response.data);

    return this.fetchData;
  };

  @action asyncTryCatch = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          this.fetchData = response.data;
          console.log(this.fetchData);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.fetchData);
      return this.fetchData;
    } catch(error) {
      console.log(error);
      return error;
    }
  }
}


export default TodoStore;