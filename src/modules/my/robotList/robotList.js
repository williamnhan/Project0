import {LightningElement, api} from 'lwc';
import {data} from '../app/robots';

export default class RobotList extends LightningElement {
  hiddenList = false;
  robot;
  robotsFiltered;
  get searchResult() {
    return this.robotsFiltered;
  }
  @api
  set searchResult(value) {
    this.robotsFiltered = value;
  }
  
  handleClick(event){
    this.handleBack();
    this.robot = data.filter(el => el.id === Number(event.currentTarget.id))[0];
  }
  handleBack() {
    this.hiddenList = !this.hiddenList;
  }
}