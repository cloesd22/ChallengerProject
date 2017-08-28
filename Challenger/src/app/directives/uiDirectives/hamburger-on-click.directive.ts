import { Directive, HostBinding, OnInit} from '@angular/core';
import {StandardComsService} from '../../services/ui/standard-coms.service';

@Directive({
  selector: '[appHamburgerOnClick]'
})
export class HamburgerOnClickDirective implements OnInit {


	@HostBinding('class.collapse') isCollapsed = true;

  	constructor(private coms:StandardComsService) { }

  	ngOnInit(){
  		this.coms.uiDataEmitter.subscribe((data)=>{
  			this.isCollapsed = !(this.isCollapsed);
  		})
  	}


}

