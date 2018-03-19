import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import ViewStore from './stores/ViewStore';
import DevTools from 'mobx-react-devtools';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Todo from './containers/Todo/Todo';
import TodoStore from './stores/TodoStore';



interface AppProps {
  viewStore?: ViewStore,
  todoStore?: TodoStore,
};

interface AppState {

};


@inject('todoStore')
@inject('viewStore')
@observer
class App extends React.Component<any, any> {

  render(){

    return (
      <div>
        <h1>React Mobx TypeScript</h1>
        <Switch>
          <Route exact path="/" component={ Todo }/>
        </Switch>
      </div>
      )
    }
}

export default withRouter(App);