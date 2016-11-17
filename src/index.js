import angular from 'angular';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {SP} from './app/sp/SP';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/todo/MainSection';
import {TodoTextInput} from './app/components/todo/TodoTextInput';
import {TodoItem} from './app/components/todo/TodoItem';
import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .component('sp', SP);

