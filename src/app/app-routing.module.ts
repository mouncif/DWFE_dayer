import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './views/gestionVente/produits/produit/produit.component';
import { ClientComponent } from './views/gestionVente/clients/client/client.component';
import { FournisseurComponent } from './views/gestionVente/fournisseurs/fournisseur/fournisseur.component';
import { ProduitDetailComponent } from './views/gestionVente/produits/produit/produit-detail/produit-detail.component';
import { ClientDetailComponent } from './views/gestionVente/clients/client/client-detail/client-detail.component';
import { FournisseurDetailComponent } from './views/gestionVente/fournisseurs/fournisseur/fournisseur-detail/fournisseur-detail.component';''


const routes: Routes = [
  { path :"",component:ClientComponent},
  { path :"clients",component:ClientComponent},
  { path :"produits",component:ProduitComponent},
  { path :"fournisseurs",component:FournisseurComponent},
  { path :"produit-detail",component:ProduitDetailComponent},
  { path :"client-detail",component:ClientDetailComponent},
  { path :"detail-fournisseur",component:FournisseurDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
