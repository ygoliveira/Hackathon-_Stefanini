import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/models/professor';
import { Usuario } from 'src/app/models/usuario';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})


export class CadastroComponent implements OnInit {

  cadastro: Professor;

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit() {
  }

  cadastrarUsuario(){
    // this.professorService.incluir(this.cadastro).subscribe(
    //   success => {
    //     this.navegar('');
    //   },
    //   error => alert("Algo deu errado!"),
    //   () => console.log("Requisição completa")
    // );
  }

  navegar(rota: any) {
    this.router.navigate([rota])
  }
}
