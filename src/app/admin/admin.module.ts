import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';
import { LivreursComponent } from './livreurs/livreurs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ZoneCommandesComponent } from './zone-commandes/zone-commandes.component';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    LivreursComponent,
    ZoneCommandesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdminModule { }
