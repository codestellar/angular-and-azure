import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathOperationsService {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Performs addition of two numbers.
   * 
   * @example 
   * getAddition(1, 2)
   * 
   * @param {number} a First Number
   * @param {number} b Second Number
   * @returns The sum of two numbers
   */
  getAddition(a: number, b: number): number{
    return a + b;
  }


  /**
   * Performs subtraction of two numbers.
   * 
   * @example 
   * getSubtraction(1, 2)
   * 
   * @param {number} a First Number
   * @param {number} b Second Number
   * @returns The subtraction of two numbers
   */  
  getSubtraction(a: number, b: number): number{
    return a - b;
  }
}
