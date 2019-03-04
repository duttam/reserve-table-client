import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstAboutDesc = "This is a description for about component";
  title = 'reserve-table-client';

  onAboutDelete(event){
    console.log(event);
  }
}
