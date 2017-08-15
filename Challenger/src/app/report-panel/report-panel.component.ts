import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';

@Component({
  selector: 'app-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.css']
})
export class ReportPanelComponent implements OnInit {

	challengetoReport:challenge;

  constructor(private router:Router, private actRoute:ActivatedRoute, private chlnglist:challengeListing) { }

  ngOnInit() {


  	this.challengetoReport = this.chlnglist.getFromListByID(this.actRoute.snapshot.params['id'])[0];
  	

  }



}
