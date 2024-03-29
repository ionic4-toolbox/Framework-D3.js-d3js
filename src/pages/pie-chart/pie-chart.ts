import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsPieChart } from '../../data/data';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

@IonicPage()
@Component({
  selector: 'page-pie-chart',
  templateUrl: 'pie-chart.html',
})
export class PieChartPage {

  title: string = 'D3 Pie Chart in Ionic 3';

  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  radius: number;

  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  svg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ionViewDidLoad() {
    this.initSvg();
    this.drawPie();
  }

  initSvg() {
    this.color = d3Scale.scaleOrdinal()
      .range(['#FFA500', '#00FF00', '#FF00000', '#6b486b', '#ff00ff', '#d0743c', '#00FA9A']);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);
    this.labelPer = d3Shape.arc()
      .outerRadius(this.radius - 80)
      .innerRadius(this.radius - 80);

    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.electionP);

    this.svg = d3.select('#pieChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
      .append('g')
      .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
  }

  drawPie() {
    let g = this.svg.selectAll('.arc')
      .data(this.pie(StatsPieChart))
      .enter().append('g')
      .attr('class', 'arc');
    g.append('path')
      .attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.party));
    g.append('text')
      .attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
      .attr('dy', '.35em')
      .text((d: any) => d.data.party);
    g.append('text')
      .attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
      .attr('dy', '.35em')
      .text((d: any) => d.data.electionP + '%');
  }
}
