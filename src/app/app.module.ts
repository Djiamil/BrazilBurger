import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { SnapFaceComponent } from './snap-face/snap-face.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { CatalogueProduitComponent } from './catalogue-produit/catalogue-produit.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierCommandeComponent } from './panier-commande/panier-commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { BoissonComponent } from './boisson/boisson.component';


@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    BurgerComponent,
    BurgerListComponent,
    DetailBurgerComponent,
    CatalogueProduitComponent,
    MenuComponent,
    PanierCommandeComponent,
    MenuDetailComponent,
    BoissonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
