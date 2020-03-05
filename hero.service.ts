import {Injectable} from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './list-heroes';
import {MessagesService} from './messages.service';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // private heroesUrl = 'api/heroes';

  constructor(private messagesService: MessagesService,
  ) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroesService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
