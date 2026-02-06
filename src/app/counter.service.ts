import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  
  private count = signal(0); //writable signal for count, kinda like a variable

  doubleCount = computed(() => this.count() * 2) //computed signal for doubleCount

  //increment method
  increment(): void {
    this.count.update(value => value +1); //using update() to increment our signal by 1
  }

  //decrement method
  decrement(): void {
    this.count.update(value => Math.max(0, value -1)); //using update() to decrement value by -1, using Math.max to not let it go below 0

  }

  //getter method to retrive count signal
  getCount(){
    return this.count;
  }
}
