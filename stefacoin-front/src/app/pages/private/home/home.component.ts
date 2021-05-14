import { Component, OnInit, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.usuario = this.authService.getUsuario();
    });
  }

  navegar = (rota: any) => {
    this.router.navigate([rota]);
  }
}
