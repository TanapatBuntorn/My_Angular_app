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
  oldselectedHero:Hero;
  herojson=HEROES;

  onSelect(hero11: Hero) :void{//hero11 คือค่าพารามิเตอร
    this.oldselectedHero= this.selectedHero
    this.selectedHero = hero11
   

  }

  



  constructor() { }

  ngOnInit() {
  }

}