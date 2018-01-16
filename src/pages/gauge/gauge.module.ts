import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GaugePage } from './gauge';

@NgModule({
  declarations: [
    GaugePage,
  ],
  imports: [
    IonicPageModule.forChild(GaugePage),
  ],
})
export class GaugePageModule {}
