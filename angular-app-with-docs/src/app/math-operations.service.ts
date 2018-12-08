import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathOperationsService {

  constructor() { }

  getAddition(a: number, b: number): number{
    return a + b;
  }

  getSubtraction(a: number, b: number): number{
    return a - b;
  }
}
