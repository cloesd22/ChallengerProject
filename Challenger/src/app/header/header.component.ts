import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { StandardComsService } from '../services/ui/standard-coms.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


	@ViewChild('collapsableMenu') hamburgerMenu: ElementRef;

	constructor(private coms: StandardComsService) {
	}

	ngOnInit() {
	}

	onHamburgerClick() {
	this.coms.emitPackage(this.hamburgerMenu.nativeElement.id);
	}


}
