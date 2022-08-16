import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { HttpClient,HttpResponse } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })

  export class BurgerService{
    // burger:Burger[]=[];
// private readonly burger_url = 'http://127.0.0.1:8000/api/burgers';
        burger:Burger[]=[
            {
                id: "1",
                nom!: "Burger",
                description!:"Burger viande de mouton",
                lima!: "https://img.freepik.com/photos-gratuite/vue-face-burger-viande-frites-fond-sombre_140725-89537.jpg?w=2000",
                prix!: 3500,
                quantity:6
            },
            {
                id: "2",
                nom!: "Burger Senegalais",
                description!:"Burger viande de Lapin",
                lima!: "https://img.freepik.com/photos-premium/delicieux-hamburgers-grilles_62847-16.jpg?w=2000",
                prix!: 6500,
                quantity:6
            },
            {
                id: "3",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://i0.wp.com/burger-delight.com/wp-content/uploads/2021/05/Avocado-burger.jpg?resize=640%2C427",
                prix!: 7500,
                quantity:6
            },
            {
                id: "4",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1I3pWgqDCVHEzwaz3wv1SNHC2HjvJncJUg&usqp=CAU",
                prix!: 4000,
                quantity:6
            },
            {
                id: "5",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgzXy7Zrby7dlMZooh95nr2r3AWJiAKMiJw&usqp=CAU",
                prix!: 76000,
                quantity:6
            },
            {
                id: "6",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35XdBgnrQRH0BFDppepNI5dM0Elpgxf2C7w&usqp=CAU",
                prix!: 14000,
                quantity:6
            },
            {
                id: "7",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://pokaa.fr/wp-content/uploads/2019/05/stuck-burger-tanneursimage00031.jpeg",
                prix!: 4300,
                quantity:6
            },
            {
                id: "8",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://static.actu.fr/uploads/2020/07/burger-paris-moins-cher-meilleur-trois-euros-ferme-11eme-arrondissement.jpg",
                prix!: 7600,
                quantity:6
            },
            {
                id: "9",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://image.shutterstock.com/image-photo/delicious-grilled-burgers-260nw-1146199442.jpg",
                prix!: 3580,
                quantity:6
            },  {
                id: "10",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://www.peugeot-saveurs.com/wp/wp-content/uploads/2021/02/IMG_0063-1024x0.jpg",
                prix!: 3500,
                quantity:6
            },  {
                id: "11",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/04/burger-king-devoile-son-nouveau-burger-pas-si-vegetarien-flexiwhooper-1200-min.jpg",
                prix!: 5000,
                quantity:6
            },  {
                id: "12",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://i.ytimg.com/vi/e85ZrWRP0OU/maxresdefault.jpg",
                prix!: 3000,
                quantity:6
            },  {
                id: "13",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/_u0a1160-ajustada_5ff5e99341d2f_0.jpg?itok=evRemrB2",
                prix!: 8900,
                quantity:6
            },  {
                id: "14",
                nom!: "Burger viand de porc",
                description!:"Burger viande de Lapin",
                lima!: "https://cdn.shopify.com/s/files/1/1389/8583/files/the_green_burger_factory.jpg?v=1614032986",
                prix!: 5600,
                quantity:6
            },  {
                id: "15",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSI1w-R5Zbp2VulidgRd6A7uqGnk2SLAz_A&usqp=CAU",
                prix!: 9000,
                quantity:6
            },  {
                id: "16",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://img.plusdebonsplans.com/2022/04/president-burger-king.jpg",
                prix!: 3100,
                quantity:6
            },  {
                id: "17",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpOXJssgFOotZVFLZig1XS5f8OJUtmSICNw&usqp=CAU",
                prix!: 3000,
                quantity:6

            },  {
                id: "18",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmN-sPAssMYdNvVta37VqXc2p8qz3qkrI5w&usqp=CAU",
                prix!: 5000,
                quantity:6
            },  {
                id: "19",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Lapin",
                lima!: "https://www.hervecuisine.com/wp-content/uploads/burgers1-1024x682.jpg",
                prix!: 4000,
                quantity:6
            },  {
                id: "20",
                nom!: "Burger viande boeuf",
                description!:"Burger viande de Mouton",
                lima!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD8JF0pldgzhXuYiqtjKZFEgMdHATSDuBJQ&usqp=CAU",
                prix!: 3500,
                quantity:6
            }
          
        ]

        

        constructor(private http:HttpClient){}

        // getcatalogueBurger():Observable<any>{
        //     return this.http.get<any>("https://mbrazil-burgerd.herokuapp.com/api/burgers");
        // }

        getBurger():Observable<Burger>
        {
          return from (this.burger);
        }

        getOnBurgers(id : string) : any
        {
            return this.burger.find(params => params.id === id);
        }
       

        // mosubject = new BehaviorSubject(123);
        private subject = new BehaviorSubject<Burger[]>([]);
        
        // addproduit(burger:Burger[]){
        //   this.subject.next(burger);
        // }

        // receveproduits():Observable<Burger[]>{
        //     return this.subject.asObservable();
        // }


  }