import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categorias: any[] = [
    { value: 'Arts', nombre: 'Arte' },
    { value: 'Business', nombre: 'Negocios' },
    { value: 'Games', nombre: 'Juegos' },
    { value: 'Health', nombre: 'Salud' },
    { value: 'Science', nombre: 'Ciencia' },
    { value: 'Sports', nombre: 'Deportes' },
    { value: 'Society', nombre: 'Sociedad' },
  ];

  paises: any[] = [
    { value: 'Germany', nombre: 'Alemania' },
    { value: 'Argentina', nombre: 'Argentina' },
    { value: 'Colombia', nombre: 'Colombia' },
    { value: 'Ecuador', nombre: 'Ecuador' },
    { value: 'Mexico', nombre: 'Mexico' },
    { value: 'Russia', nombre: 'Rusia' },

  ];
  categoriaSeleccionada = 'Arts';
  paisSeleccionado = 'Germany';

  constructor() { }


  ngOnInit(): void {

  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }



}
