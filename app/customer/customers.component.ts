import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: Obserbable<any[]>;
        
    custName: string;
    
    addCustName() {
        this.customers.push({name: this.custName})
        this.custName='';
    }
    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log("There was an error getting the json: " + err._body);
            return Observable.of([]);
        })
    }
}
