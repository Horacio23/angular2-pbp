import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
        { name:'Horacio'},
        { name:'Daniela'},
        { name:'Ward'},
        { name:'Link'},
        { name:'Tommas'}
    ];
    custName: string;
    
    addCustName() {
        this.customers.push({name: this.custName})
        this.custName='';
    }
    constructor() { }

    ngOnInit() { }
}
