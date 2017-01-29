import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
    @Input() customer : {id: number, name: string} // stablishes the type the customer has to follow
    constructor() { }

    ngOnInit() { }
}
