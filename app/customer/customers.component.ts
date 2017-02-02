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
    // customers: Promise<any[]>;
    customers: any[];
        
    custName: string;
    
    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            // it worked
            (customers: any) => this.customers = customers,
            // error
            (err:any) => {
                console.log("There was an error getting the json: " + err._body);
                return Observable.of([]);
            });

        // Promise to array
        // // This change is for when we want to manipulate the array we get
        // // it does not require the use of async in the html template
        // this._customerService.getCustomers()
        // .then((customers: any) => this.customers = customers)
        // .catch((err:any) => {
        //     console.log("There was an error getting the json: " + err._body);
        //     return Observable.of([]);
        // })

//         Promise<any[]>
//         this.customers = this._customerService.getCustomers()
//         .catch((err:any) => {
//             console.log("There was an error getting the json: " + err._body);
//         })

        //Rx Observable
        // Observable<any[]>
        // this.customers = this._customerService.getCustomers()
        // .catch((err:any) => {
        //     console.log("There was an error getting the json: " + err._body);
        //     return Observable.of([]);
        // })
    }
}
