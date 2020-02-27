import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(public client_http : HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomProduit: new FormControl('', Validators.required),
    nomCourtProduit: new FormControl(''),
    prixBase: new FormControl(''),
    prixVente: new FormControl(''),
    seuilMax: new FormControl(''),
    uniteProduit: new FormControl(''),
    imageProduit: new FormControl(''),
    quantiteInitiale: new FormControl(''),
    quantiteActuel: new FormControl(''),
    });

  private url ="http://localhost:3000/products";

  getAll() {
    return this.client_http.get<Produit[]>(this.url);
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomProduit: '',
      nomCourtProduit: '',
      prixBase: '',
      prixVente: '',
      seuilMax: '',
      uniteProduit: '',
      imageProduit: '',
      quantiteInitiale: '',
      quantiteActuel: ''
    });
  }

  setProduit(prod)
  {
    this.form.setValue(prod);
  }

  delete(idProduit){
    return this.client_http.delete(this.url+'/'+idProduit);
  }

  update(prod){
    console.log("you are in  service update! ");
    return this.client_http.put(`${this.url}/${prod.id}`,prod);

  }

  add(prod){
    console.log("you are in  service add ! ");
    return this.client_http.post(this.url,prod);
  }

 

}
