import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthMessageService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})

export class ProtegidaComponent implements OnInit {

  data:any = [];
  cont:number = 0;
  mensaje = {
    index:'',
    timestamp:'',
      data: {
        sender:'',
        recipient:'',
        quantity:0
      },
    precedingHash: '""',
    hash: '',
    nonce: 0
  }

  constructor(public auth: AuthService,
              private router:Router,
              private authMessageService:AuthMessageService
               ) { }

  // mensaje:any = [];

  ngOnInit() {
    this.auth.user$.subscribe(perfil => {
      this.mensaje.data.sender = perfil.name
    })
    this.getAllData();
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();

  }

  onSubmit(){
    this.authMessageService.infoPost(this.mensaje).subscribe(res => {
      this.getAllData()
      console.log(res);

    })
  }

  getAllData() {
    this.authMessageService.getInfo().subscribe((res:any) => {
      // console.warn(res);
      //PARCHE
      let contador = 0
      for(let i of res){
        for(let j of i.blockchain){
          this.cont++;
          if(this.cont % 2 == 0) {
            this.data.push({
              index: contador++,
              hash:j.hash,
              precedingHash: j.precedingHash,
              nonce: j.nonce,
              data: j.index.data
            });
            // console.log(j.hash) //hash
            // console.log(j.precedingHash) //precedingHash
            // console.log(j.nonce) //nonce
            // console.log(j.index.data) //hash
          }

        }
      }
    });

  }

}
