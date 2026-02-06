import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 {
  constructor(public counterService: CounterService){}

  get count(){
    return this.counterService.getCount()();
  }
}
