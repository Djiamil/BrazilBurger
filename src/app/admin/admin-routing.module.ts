import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from '../commande/commande.component';
import { DetailleCommandeComponent } from '../detaille-commande/detaille-commande.component';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ZoneCommandesComponent } from './zone-commandes/zone-commandes.component';

const routes: Routes = [
  { path: "", component: CommandesComponent},
  { path: "comdes",children: [
    { path: "", component: CommandesComponent},
    { path: ':id', component: DetailleCommandeComponent },
    { path: 'zone/:id', component: LivraisonsComponent },    
  ],
  },
   { path: "livraisons",children: [
    { path: "", component: LivraisonsComponent },
    { path: ':id', component: LivraisonsComponent},
    { path: ':zone/id', component: LivraisonsComponent},
    ],
    },

     { path: "produits",children: [
      { 
        path: "", component: ProduitsComponent},
      { path: ':new', component: ProduitsComponent },
      { path: ':listerproduits', component: ProduitsComponent },
    
      ],
      },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  
  exports: [RouterModule]
})
export class AdminRoutingModule { }
