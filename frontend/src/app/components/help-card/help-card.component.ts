import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-card',
  templateUrl: './help-card.component.html',
  styleUrls: ['./help-card.component.scss']
})
export class HelpCardComponent {

  url: String;
  text: String;

  constructor(url: String, text: String){
    this.url = url;
    this.text = text;
  }

}
