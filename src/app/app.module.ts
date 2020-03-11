import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './views/gestionVente/produits/produit/produit.component';
import { FournisseurComponent } from './views/gestionVente/fournisseurs/fournisseur/fournisseur.component';
import { ClientComponent } from './views/gestionVente/clients/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProduitDetailComponent } from './views/gestionVente/produits/produit/produit-detail/produit-detail.component';
import { ClientDetailComponent } from './views/gestionVente/clients/client/client-detail/client-detail.component';
import { FournisseurDetailComponent } from './views/gestionVente/fournisseurs/fournisseur/fournisseur-detail/fournisseur-detail.component';
import { LoginComponent } from './views/gestionVente/login/login.component';
import { ContentComponent } from './views/gestionVente/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    FournisseurComponent,
    ClientComponent,
    ProduitDetailComponent,
    ClientDetailComponent,
    FournisseurDetailComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
