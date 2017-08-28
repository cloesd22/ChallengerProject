import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class StandardComsService {

  constructor() { }


  uiDataEmitter = new EventEmitter<object>();



  emitPackage(dataToSend){
  	this.uiDataEmitter.emit(dataToSend)
  }

}
