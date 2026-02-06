import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  constructor(public counterService: CounterService){}
  
  get doubleCount(){
    return this.counterService.doubleCount();
  }
}
