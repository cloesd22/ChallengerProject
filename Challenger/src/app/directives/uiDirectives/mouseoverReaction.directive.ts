import {Directive,ElementRef,OnInit, HostListener, Renderer2} from '@angular/core';

@Directive({
	selector:'[mouseoverHighlight]'
})
export class mouseoverHighlight implements OnInit{

	defaultcolor:string;
	defaultHeight:string;
	constructor(private elemref:ElementRef, private renderer:Renderer2){

	}


	ngOnInit(){
		this.defaultcolor = this.elemref.nativeElement.style.backgroundColor;
		this.defaultHeight = this.elemref.nativeElement.style.height;
	}

	@HostListener('mouseenter') mouseenterEvent(evendData:Event){
		console.log("MouseEnter Detected");
		this.renderer.setStyle(this.elemref.nativeElement,'overflow','visible');
		this.renderer.setStyle(this.elemref.nativeElement,'height','auto');
		this.renderer.setStyle(this.elemref.nativeElement,'background-color','#101010');
	
	}

	@HostListener('mouseleave') mouseleaveEvent(evendData:Event){
		console.log("MouseEnter leave");

		setTimeout(()=>{

			this.renderer.setStyle(this.elemref.nativeElement,'overflow','hidden');
			this.renderer.setStyle(this.elemref.nativeElement,'height',this.defaultHeight);
			this.renderer.setStyle(this.elemref.nativeElement,'background-color',this.defaultcolor);

		},400);


	}

}