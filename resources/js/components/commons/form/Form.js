import Vue from 'vue';
import Button from './Button';
import Form from './index';
import Input from './Input';
import Checkbox from './Checkbox';

export default function (){
  Vue.component('t-form', Form);
  Vue.component('t-input', Input);
  Vue.component('t-checkbox', Checkbox);
  Vue.component('t-button', Button);
}
