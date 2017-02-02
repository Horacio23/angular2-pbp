import { Injectable } from '@angular/core'; 
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER =  'app/customers.json';

@Injectable()
export class CustomerService {
    //const URL_CUSTOMERS
    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err: any){
        console.log(err); // this is a log for the devs to know what happened
        return Observable.throw(err); // opportunity to created a costumized message for the client
    }
}
