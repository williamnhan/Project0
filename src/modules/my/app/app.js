import { LightningElement } from 'lwc';
import {data} from './robots';

export default class App extends LightningElement {
  robotsFiltered;
  numberItems;
  robots;
  robot;
  constructor() {
    super();
    this.robots = data.map(robot => {
      robot.img = `https://robohash.org/${robot.id}?200X200`;
      return robot;
    });
    this.robotsFiltered = this.robots;
    this.numberItems = this.robotsFiltered.length;
  }
  handleSearchChange(event) {
    this.robotsFiltered = this.robots.filter(robot => {
      return robot.name.toLowerCase().includes(event.detail.value.toLowerCase());
    })
    this.numberItems = this.robotsFiltered.length;
  }
}
