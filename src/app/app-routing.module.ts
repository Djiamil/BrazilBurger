import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BurgerListComponent } from "./burger-list/burger-list.component";
import { BurgerComponent } from "./burger/burger.component";
import { CatalogueProduitComponent } from "./catalogue-produit/catalogue-produit.component";
import { ClientComponent } from "./client/client.component";
import { DetailBurgerComponent } from "./detail-burger/detail-burger.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ListecommandeclientComponent } from "./listecommandeclient/listecommandeclient.component";
import { MenuDetailComponent } from "./menu-detail/menu-detail.component";
import { PanierCommandeComponent } from "./panier-commande/panier-commande.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { TailleboissonComponent } from "./tailleboisson/tailleboisson.component";


const routes = [
    {path: '',component: LandingPageComponent},
    {path: 'burger/:id', component:DetailBurgerComponent},
    {path: 'menu/:id', component:MenuDetailComponent},
    {path: 'burger', component:BurgerListComponent},
    {path: 'catalogue', component:CatalogueProduitComponent},
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'panier/:id', component: DetailBurgerComponent },
    { path: 'panier', component: PanierCommandeComponent },
    { path: 'taille', component: TailleboissonComponent },
    { path: 'cliente', component: ClientComponent },
    { path: 'cliente/:id', component: ListecommandeclientComponent  },

    
    
    

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