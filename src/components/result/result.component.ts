import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SearchProvider } from "../../providers/search/search";
import { RESULT } from '../../model/result/result.interface';

@Component({
  selector: 'app-result',
  templateUrl: 'result.component.html'
})
export class ResultComponent {

  @Input() results:any;
  constructor(private s:SearchProvider,private navParam:NavParams) {
    console.log('Hello ResultComponent Component');
  }

}
