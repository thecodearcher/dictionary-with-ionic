import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RESULT } from '../../model/result/result.interface';
import { SearchProvider } from '../../providers/search/search';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  search_word: string;
  results: any;
  result: RESULT;
  constructor(private search: SearchProvider, private navParam: NavParams) {
    console.log('Hello ResultComponent Component');
    
  }

  ionViewDidLoad() {
    this.search_word = this.navParam.get('search_');
    if(this.search_word){
    this.searchResult();
  }
    console.log('ionViewDidLoad ResultPage');
  }

  searchResult(){
    this.search.search(this.search_word)
      .then(data => {
        this.result = data;
        this.result.results.map(data => {
          data.lexicalEntries.map(data => {
            data.entries.map(entries => {
              this.results = entries.senses

            });
          });
          //console.error(s);

        });
        console.log(this.results);
      });
  }
}
