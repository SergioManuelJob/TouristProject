import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-card',
  templateUrl: './help-card.component.html',
  styleUrls: ['./help-card.component.scss']
})
export class HelpCardComponent {

  @Input()
  url: String;
  @Input()
  text: String;

  constructor(){
    this.url = ""
    this.text = ""
  }

}
