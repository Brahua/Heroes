import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
// import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

// Services
import { HeroesService } from './servicios/heroes.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeCardComponent } from './components/heroeCard/heroeCard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    // APP_ROUTING,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
