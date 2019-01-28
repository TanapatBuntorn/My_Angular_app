import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes=HEROES;
  onSelect(heroes: Hero): void {
    this.selectedHero = heroes
    console.log(heroes);
  }
  

  constructor() { }

  ngOnInit() {
  }

}