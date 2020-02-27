import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../models/produit.model';
import {ProduitsService} from '../../../../shared/produits.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  listProduits:Produit[] = [];
  constructor(public service :ProduitsService,private rout:Router) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements(){
    this.service.getAll().subscribe((data: Produit[]) => {
      this.listProduits = data;
      console.log(data);
    });
  }

  ondelete(id){
    if(confirm("sure ?"))
    {
       this.service.delete(id).subscribe(()=>{
       this.fetchElements();
      });
    }
  }

  onEdit(produit)
  {
    this.service.setProduit(produit);
    this.rout.navigateByUrl("/detail-produit");
  }

}
