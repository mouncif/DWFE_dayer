import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientService} from '../../../../shared/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  listClients:Client[] = [];
  constructor(public service :ClientService,private rout:Router) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements(){
    this.service.getAll().subscribe((data: Client[]) => {
      this.listClients = data;
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

  onEdit(client)
  {
    this.service.setClient(client);
    this.rout.navigateByUrl("/detail-client");
  }

}
