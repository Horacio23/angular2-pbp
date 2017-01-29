import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  // [] means property binding - Component to DOM
  // () means event binding - Dom to Component
  name = "Horacio";
  title = "Customer App";
  wardsColor = 'blue';
  customers = [
    {id: 1, name:'Horacio'},
    {id: 2, name:'Daniela'},
    {id: 3, name:'Ward'},
    {id: 4, name:'Link'},
    {id: 5, name:'Tommas'}
  ];


  changeColors(){
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }
}
