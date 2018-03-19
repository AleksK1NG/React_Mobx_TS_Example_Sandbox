import './scss/app.scss';

import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './js/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './js/stores/index';


const rootEl = document.getElementById('root');
const render = App =>
  ReactDOM.render(
  <AppContainer>
    <Provider {...stores}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  rootEl
  );

render(App);
if (module.hot) module.hot.accept('./js/App', () => render(App));