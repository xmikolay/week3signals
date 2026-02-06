import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1 } from './child1/child1';
import { Child2 } from './child2/child2';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1, Child2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('week3signals');

  constructor(private counterService: CounterService){}

  onIncrement(): void{
    this.counterService.increment();
  }

  onDecrement(): void{
    this.counterService.decrement();
  }
}
