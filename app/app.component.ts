import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [CustomerService]
})
export class AppComponent  {
  // [] means property binding - Component to DOM
  // () means event binding - Dom to Component
  name = "Horacio";
  title = "Customer App";
  wardsColor = 'blue';
  

  changeColors(){
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }
}
