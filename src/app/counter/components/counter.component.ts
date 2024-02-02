import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <div class="container-contador">
        <h1>CONTADOR</h1>
        <h2>{{contador}}</h2>
        <div>
            <button class="btn btn-danger  mx-1 " (click)="decrement()">-1</button>
            <button class="btn btn-warning  mx-1 " (click)="reset()">reset</button>
            <button class="btn btn-primary mx-1 " (click)="increment()">1+</button>
        </div>
    </div>`
})

export class CounterComponent implements OnInit {
    constructor() { }
    public contador: number = 0;

    decrement() {
      this.contador--;
    }
    increment() {
      this.contador++;
    }
  
    reset() {
      this.contador = 0;
    }
    ngOnInit() { }
}