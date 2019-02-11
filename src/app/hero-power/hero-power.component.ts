import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-power',
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.scss']
})
export class HeroPowerComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
