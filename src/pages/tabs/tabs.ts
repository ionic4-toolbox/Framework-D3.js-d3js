import { Component } from '@angular/core';

import { BarChartPage } from '../bar-chart/bar-chart';
import { PieChartPage } from '../pie-chart/pie-chart';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BarChartPage;
  tab2Root = PieChartPage;

  constructor() {

  }
}
