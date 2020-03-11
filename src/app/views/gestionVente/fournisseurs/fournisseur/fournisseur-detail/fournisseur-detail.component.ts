
import { Component, OnInit } from '@angular/core';
import {FournisseurService } from '../../../../../shared/fournisseur.service'
import { Fournisseur } from './../../../../../models/fournisseur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur-detail',
  templateUrl: './fournisseur-detail.component.html',
  styleUrls: ['./fournisseur-detail.component.css']
})
export class FournisseurDetailComponent implements OnInit {


  constructor(public service: FournisseurService,private router:Router) { }

  private frns:Fournisseur={
    id: null,
    nomFournisseur: '',
    nomCourtFournisseur: '',
    villeFournisseur: '',
    adressFournisseur: '',
    teleFixFournisseur: '',
    teleMobileFournisseur: '',
    faxFournisseur: '',
    maiFournisseur: ''
  }
  
  fournisseurs:Fournisseur[]=[]

  add()
  {
    this.service.add(this.frns).subscribe((clt)=>
    this.fournisseurs=[this.frns,...this.fournisseurs]);
    this.router.navigateByUrl("fournisseurs");
  }
  update()
  {
    this.service.update(this.frns).subscribe(()=>this.router.navigateByUrl("/fournisseurs"));
  }
  
  onSubmit()
  {
 
      this.frns = this.service.form.value;
      if(this.service.form.value.id==null)
      {
        console.log(this.frns);
        this.add();
        this.service.form.reset();
        
      }else{
        
        console.log(this.frns);
        this.update();
        this.service.form.reset();
      }
      this.service.initializeFormGroup();
  
  }

  
  onClear(){
      this.service.initializeFormGroup();
      this.service.form.reset();
    }

  ngOnInit() {
  }

}

