import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './views/gestionVente/produits/produit/produit.component';
import { ClientComponent } from './views/gestionVente/clients/client/client.component';
import { FournisseurComponent } from './views/gestionVente/fournisseurs/fournisseur/fournisseur.component';


const routes: Routes = [
  { path :"",component:ProduitComponent},
  { path :"clients",component:ClientComponent},
  { path :"produits",component:ProduitComponent},
  { path :"fournisseurs",component:FournisseurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
