import {Directive,ElementRef,OnInit, HostListener, Renderer2} from '@angular/core';

@Directive({
	selector:'[mouseoverHighlight]'
})
export class mouseoverHighlight implements OnInit{

	constructor(private elemref:ElementRef, private renderer:Renderer2){

	}


	ngOnInit(){
		
	}

	@HostListener('mouseenter') mouseenterEvent(evendData:Event){
		console.log("MouseEnter Detected");
		this.renderer.setStyle(this.elemref.nativeElement,'overflow','visible');
		this.renderer.setStyle(this.elemref.nativeElement,'height','auto');
	}

	@HostListener('mouseleave') mouseleaveEvent(evendData:Event){
		console.log("MouseEnter leave");
		this.renderer.setStyle(this.elemref.nativeElement,'overflow','hidden');
		this.renderer.setStyle(this.elemref.nativeElement,'height','120px');
	}

}