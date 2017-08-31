import { Directive, HostBinding, ElementRef } from '@angular/core';
import {StandardComsService} from '../../services/ui/standard-coms.service';

//specifically for comment dropdowns

@Directive({
  selector: '[appDropdownOnClick]'
})
export class DropdownOnClickDirective {

@HostBinding('class.show') isShown = false;
currentElement;

  	constructor(private coms:StandardComsService, private elemRef:ElementRef) { }

  	ngOnInit(){
  		this.currentElement = this.elemRef

  		this.coms.uiDataEmitter.subscribe((data)=>{

  			if(data == this.elemRef.nativeElement.id){

  				this.isShown = !(this.isShown);

  			}
  			console.log(data);
  			console.log(this.elemRef.nativeElement.id);
  		})
  	}

}
