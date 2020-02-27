import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public client_http : HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomClient: new FormControl('', Validators.required),
    statuClient: new FormControl(''),
    teleClient: new FormControl(''),
    photoClient: new FormControl(''),
    mailClient: new FormControl('', Validators.email),
    adressClient: new FormControl(''),
    villeClient: new FormControl('')
    });

  private url ="http://localhost:3000/clients";

  getAll() {
    return this.client_http.get<Client[]>(this.url);
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomClient: '',
      prenomClient: '',
      statuClient: '',
      photoClient: '',
      teleClient: '',
      mailClient: '',
      adressClient: '',
      villeClient: ''
      
    });
  }

  setClient(cln)
  {
    this.form.setValue(cln);
  }

  delete(idClient){
    return this.client_http.delete(this.url+'/'+idClient);
  }

  update(e){
    console.log("you are in  service update! ");
    return this.client_http.put(`${this.url}/${e.id}`,e);

  }

  add(etud){
    console.log("you are in  service add ! ");
    return this.client_http.post(this.url,etud);
  }

 

}
