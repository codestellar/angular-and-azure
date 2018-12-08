import { Component, OnInit } from '@angular/core';
import { MathOperationsService } from '../math-operations.service';

@Component({
  selector: 'app-math-operations',
  templateUrl: './math-operations.component.html',
  styleUrls: ['./math-operations.component.scss']
})
export class MathOperationsComponent implements OnInit {

  numberA: number;
  numberB: number;

  result:number;

  constructor(private mathService: MathOperationsService) { }

  ngOnInit() {

  }

  add(){
    this.result = this.mathService.getAddition(this.numberA, this.numberB);
  }

  subtract(){
    this.result = this.mathService.getSubtraction(this.numberA, this.numberB);
  }  

}
