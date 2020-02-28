import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../../shared/client.service'
import { Client } from './../../../../../models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {


  constructor(public service: ClientService,private router:Router) { }

  private clt:Client={
    id: null,
    nomClient: '',
    prenomClient: '',
    statusClient: '',
    photoClient: '',
    teleClient: '',
    mailClient: '',
    adressClient: '',
    villeClient: ''

  }
  
  clients:Client[]=[]

  add()
  {
    this.service.add(this.clt).subscribe((clt)=>
    this.clients=[this.clt,...this.clients]);
    this.router.navigateByUrl("");
  }
  update()
  {
    this.service.update(this.clt).subscribe(()=>this.router.navigateByUrl("/clients"));
  }
  
  onSubmit()
  {
 
      this.clt = this.service.form.value;
      if(this.service.form.value.id==null)
      {
        console.log(this.clt);
        this.add();
        this.service.form.reset();
        
      }else{
        
        console.log(this.clt);
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

