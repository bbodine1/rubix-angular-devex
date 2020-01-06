import { Component } from '@angular/core';

@Component({
  selector: 'app-live-views',
  templateUrl: './live-views.component.html',
  styleUrls: ['./live-views.component.scss']
})
export class LiveViewsComponent {

  // Basic alert function for use with the DxButton
  helloWorld() {
      alert('Hello world!');
  }

}