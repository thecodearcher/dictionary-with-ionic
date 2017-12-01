import { NgModule } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { SearchProvider } from "../providers/search/search";
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ResultComponent],
	imports: [IonicModule],
	exports: [ResultComponent],
})
export class ComponentsModule {}
