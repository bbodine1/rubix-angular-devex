import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor () {
    const removeTabbing = () => {
      delete document.body.dataset.tabbing;
      document.removeEventListener('click', removeTabbing, false);
    }

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 9) {
        document.body.dataset.tabbing = '';
        document.addEventListener('click', removeTabbing, false);
      }
    })
  }
}
