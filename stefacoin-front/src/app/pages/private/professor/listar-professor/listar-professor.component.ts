import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})
export class ListarProfessorComponent implements OnInit {

  professores: Array<Professor[]>;

  constructor() { }

  ngOnInit(): void {
  }

  listarProfessor() {
    return this.professores
  }

}
