import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../models/Fournisseur.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(public client_http : HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomFournisseur: new FormControl('', Validators.required),
    nomCourtFournisseur: new FormControl(''),
    villeFournisseur: new FormControl(''),
    adressFournisseur: new FormControl(''),
    teleFixFournisseur: new FormControl(''),
    teleMobileFournisseur: new FormControl(''),
    faxFournisseur: new FormControl(''),
    maiFournisseur: new FormControl('',Validators.email)



    });

  private url ="http://localhost:3000/fournisseurs";

  getAll() {
    return this.client_http.get<Fournisseur[]>(this.url);
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomFournisseur: '',
      nomCourtFournisseur: '',
      villeFournisseur: '',
      adressFournisseur: '',
      teleFixFournisseur: '',
      teleMobileFournisseur: '',
      faxFournisseur: '',
      maiFournisseur: ''
    });
  }

  setFournisseur(fournisseur)
  {
    this.form.setValue(fournisseur);
  }

  delete(idFournisseur){
    return this.client_http.delete(this.url+'/'+idFournisseur);
  }

  update(fourn){
    console.log("you are in  service update! ");
    return this.client_http.put(`${this.url}/${fourn.id}`,fourn);

  }

  add(etud){
    console.log("you are in  service add ! ");
    return this.client_http.post(this.url,etud);
  }

 

}
