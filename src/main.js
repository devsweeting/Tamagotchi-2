import { Pet } from './../src/pet';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  const snuggs = new Pet("Snuggs");
  snuggs.setSchedule();
  // console.log(snuggs.hunger);
  // console.log(snuggs.water);
  // console.log(snuggs.waste);
  // console.log(snuggs.love);
  // console.log(snuggs.sass);
});
