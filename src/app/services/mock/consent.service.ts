import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { data } from './mock_data';
@Injectable()
export class MockConsentService {

    constructor() {
    }
    
    dataCollectionConsent: Observable<any> = Observable.of(data).map((res:any)=>{
        //this block gets executed each time a subscriber connects
        return res;
    });
    
    
    getDataCollectionConsent() {
        return this.dataCollectionConsent;
    }
}
