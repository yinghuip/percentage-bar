import {Component} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {

projectedMileage:number = 70;
actualMileage:number = 70;


getLeftBarWidth():string{
  if(this.projectedMileage === null)return '100%';
  if(this.projectedMileage === undefined)return '100%';
  if(this.projectedMileage < this.actualMileage)return '100%';
  return `${((this.actualMileage/this.projectedMileage)*100)}%`;
}

getRightBarWidth(){
    if(this.projectedMileage === null)return '0%';
  if(this.projectedMileage === null)return '0%';
  if(this.projectedMileage < this.actualMileage)return '0%';
  return `${(((this.projectedMileage - this.actualMileage)/this.projectedMileage)*100)}%`;
}

checkNegativeValue(){
  if(this.projectedMileage < this.actualMileage)return 'none';
  if((this.projectedMileage - this.actualMileage) === 0)return 'none';
  return 'block'
}

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */