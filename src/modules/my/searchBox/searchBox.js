import { LightningElement} from 'lwc';

export default class SearchBox extends LightningElement {
  handleTextChange(event) {
    this.dispatchEvent(new CustomEvent("onchange", {detail: { value: event.target.value}}));
  }
}