import { Directive, HostBinding, OnInit, ElementRef} from '@angular/core';
import {StandardComsService} from '../../services/ui/standard-coms.service';

@Directive({
  selector: '[appHamburgerOnClick]'
})
export class HamburgerOnClickDirective implements OnInit {


	@HostBinding('class.collapse') isCollapsed = true;
	currentElement;

  	constructor(private coms:StandardComsService, private elemRef:ElementRef) { }

  	ngOnInit(){

  		this.currentElement = this.elemRef

  		this.coms.uiDataEmitter.subscribe((data)=>{

  			if(data == this.elemRef.nativeElement.id){
  				this.isCollapsed = !(this.isCollapsed);

  			}



  		})
  	}


}

