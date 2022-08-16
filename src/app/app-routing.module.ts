import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AdminModule } from "./admin/admin.module";
import { BurgerListComponent } from "./burger-list/burger-list.component";
import { BurgerComponent } from "./burger/burger.component";
import { CatalogueProduitComponent } from "./catalogue-produit/catalogue-produit.component";
import { ClientComponent } from "./client/client.component";
import { CommandeComponent } from "./commande/commande.component";
// import { CommandesComponent } from "./admin/commandes/commandes.component";
import { DetailBurgerComponent } from "./detail-burger/detail-burger.component";
import { DetailleCommandeComponent } from "./detaille-commande/detaille-commande.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ListecommandeclientComponent } from "./listecommandeclient/listecommandeclient.component";
import { MenuDetailComponent } from "./menu-detail/menu-detail.component";
import { PanierCommandeComponent } from "./panier-commande/panier-commande.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { TailleboissonComponent } from "./tailleboisson/tailleboisson.component";


const routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {path: 'burger/:id', component:DetailBurgerComponent},
      {path: 'menu/:id', component:MenuDetailComponent},
      {path: 'burger', component:BurgerListComponent},
      {path: 'catalogue', component:CatalogueProduitComponent},
      { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
      { path: 'panier/:id', component: DetailBurgerComponent },
      { path: 'panier', component: PanierCommandeComponent },
      { path: 'taille', component: TailleboissonComponent },
      { path: 'cliente', component: ClientComponent },
      { path: 'commandes', component: CommandeComponent },
      { path: 'commandes/:id', component: DetailleCommandeComponent },
      { path: 'cliente/:id', component: ListecommandeclientComponent  },
    //   { path: 'admin', component: AdminComponent   },
      {path: '',component: LandingPageComponent},

    
    
    {path: 'snaps',component: FaceSnapListComponent},
    // {path: '**',component: CatalogueProduitComponent},

];
@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    })
export class AppRoutingModule{
    
}