
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../../models/fournisseur.model';
import { FournisseurService} from '../../../../shared/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent implements OnInit {
  listFournisseurs:Fournisseur[] = [];
  constructor(public service :FournisseurService,private rout:Router) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements(){
    this.service.getAll().subscribe((data: Fournisseur[]) => {
      this.listFournisseurs = data;
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

  onEdit(frnsr)
  {
    this.service.setFournisseur(frnsr);
    this.rout.navigateByUrl("/detail-fournisseur");
  }

}
