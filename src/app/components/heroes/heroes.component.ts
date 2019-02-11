import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { IHeroe } from '../../servicios/heroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeores();
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
  }

}
