import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { IHeroe } from 'src/app/servicios/heroes.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: IHeroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.termino = params.termino;
        this.heroes = this.heroesService.buscarHeroes(params.termino);
      }
    );
  }

  ngOnInit() {
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
  }

}
