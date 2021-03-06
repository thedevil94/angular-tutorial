import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
import {MessagesService} from '../messages.service';
import {Observable, of} from 'rxjs';
import {HEROES} from '../list-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messagesService: MessagesService
  ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messagesService.add(`HeroService: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // addHero(hero: Hero) {
  //
  // }
}
