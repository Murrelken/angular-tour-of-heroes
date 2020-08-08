import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {MessagesService} from '../../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x);
  }

  selectedHero: Hero = this.hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}


export interface Hero {
  id: number;
  name: string;
}
