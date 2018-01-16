import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsGauge } from '../../data/data';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@IonicPage()
@Component({
  selector: 'page-gauge',
  templateUrl: 'gauge.html',
})
export class GaugePage {
  title = 'D3 Gauge with Ionic 3';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaugePage');
  }

}
