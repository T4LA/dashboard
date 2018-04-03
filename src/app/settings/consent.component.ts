import { Component } from '@angular/core';
import { MockConsentService } from './../services/mock/consent.service';

@Component({
  selector: 'default',
  template: require('./consent.component.html')

})
export class ConsentComponent {

  dataCollection : any;

  constructor(private consentService: MockConsentService) {
    this.dataCollection = consentService.getDataCollectionConsent();
  }


}
