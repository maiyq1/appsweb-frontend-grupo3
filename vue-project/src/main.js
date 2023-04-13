import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//PrimeVue
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";//theme
//import "primevue/resources/themes/arya-orange/theme.css"
//import "primevue/resources/themes/vela-green/theme.css"
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button"

import InputMask from "primevue/inputmask"
import Panel from 'primevue/panel';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import ConfirmPopup from 'primevue/confirmpopup';
import RadioButton from 'primevue/radiobutton';
import { createI18n } from 'vue-i18n'

import i18n from'../src/locales/i18n'


const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);

app.component('InputMask', InputMask);
app.component('Panel', Panel);
app.component('AutoComplete', AutoComplete);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('TrisStateCheckbox', TriStateCheckbox);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Button', Button);
app.component('RadioButton', RadioButton);


app.mount('#app')