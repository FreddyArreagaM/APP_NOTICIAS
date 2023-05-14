import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

  @Input() listNoticias: any;
  texto = '';
  cont = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
