import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 12;

  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  changeHeroAge(): void {
    this.age = 100;
  }
  changeHeroName(): void {
    this.name = 'SpiderMan';
  }


  reset(): void{
    this.name = 'ironman';
    this.age = 12;
  }
}
