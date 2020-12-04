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

  data:any;
  mensaje:any
  constructor(public auth: AuthService,
              private router:Router,
              private authMessageService:AuthMessageService
               ) { }

  // mensaje:any = [];
  
  ngOnInit() {
    this.auth.user$.subscribe(perfil => {})
    this.getAllData();
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
    
  }

  onSubmit(form: NgForm){
    this.authMessageService.infoPost(form).subscribe(res => {
      console.log(res);

    })
  }

  getAllData() {
    this.authMessageService.getInfo().subscribe((res:any) => {
      console.warn(res);
      this.data = res;    
      
    });

  }

}
