import { Component, OnInit, Inject  } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  Autentificado: boolean;
  // bol2: boolean;
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { 

    //  auth.isAuthenticated$.subscribe((res:boolean) =>{
    //   this.Autentificado = !res
    //   })
  } 
  ngOnInit() {
    // this.bol = this.getObservableRaul()      
  }

  // getObservableRaul(): Observable <boolean> {
  //   var subject = new Subject<boolean>();
  //   this.auth.isAuthenticated$.subscribe(res => {
  //     res = !res;
  //     subject.next(res);  
  //     }
  //   );
  //     return subject.asObservable();
  //   }

}
