import { Injectable } from '@angular/core';
import {Hero} from './heroes/heroes.component';
import {HEROES} from './heroes/mock-heroes';
import {Observable, of} from 'rxjs';
import {MessagesService} from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
