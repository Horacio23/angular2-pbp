import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
    @Input() customer : { name: string} // stablishes the type the customer has to follow
    constructor() { }

    ngOnInit() { }
}
