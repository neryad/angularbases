import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nuevo: Personaje = {
    nombre: 'Maestro rochi',
    poder: 1000,
  };

  // agregarNuevoPersonaje(arg: Personaje) {
  //   console.log(arg);
  //   //this.personaje.push(arg);
  // }
}
