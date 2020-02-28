import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../../../../shared/produits.service'
import { Produit } from './../../../../../models/produit.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {


  constructor(public service: ProduitsService,private router:Router) { }

  private prod:Produit={
    id: null,
    nomProduit: '',
    nomCourtProduit: '',
    prixBase: 0,
    prixVente: 0,
    seuilMax: 0,
    uniteProduit: '',
    imageProduit: '',
    quantiteInitiale: 0,
    quantiteActuel: 0
  }
  
  produits:Produit[]=[]

  add()
  {
    this.service.add(this.prod).subscribe((prod)=>this.produits=[this.prod,...this.produits]);
  }
  update()
  {
    this.service.update(this.prod).subscribe(()=>this.router.navigateByUrl("/produits"));
  }
  
  onSubmit()
  {
    if(this.service.form.valid)
    {
      this.prod = this.service.form.value;
      if(this.service.form.value.id==null)
      {
        console.log(this.prod);
        this.add();
        this.service.form.reset();
        
      }else{
        
        console.log(this.prod);
        this.update();
        this.service.form.reset();
      }
      this.router.navigate(['']);
      this.service.initializeFormGroup();
    }
  }

  
  unites = [ 
    {id:1,value:"KG"},
    {id:2,value:"Lettre" },
    {id:3, value:"Metre"}];


  onClear(){
      this.service.initializeFormGroup();
      this.service.form.reset();
    }

  ngOnInit() {
  }

}
