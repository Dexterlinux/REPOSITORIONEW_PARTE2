import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  alumnos: any[] = []; // Aquí deberías cargar tu lista de alumnos desde algún origen de datos

  constructor() {
    // Simula la carga de la lista de alumnos (reemplaza esto con tu lógica real)
    this.cargarAlumnos();
  }

  ngOnInit() {}

  cargarAlumnos() {
    // Aquí debes cargar la lista de alumnos desde tu API o base de datos
    // Ejemplo: Supongamos que obtienes los datos de una API
    // this.miServicio.obtenerAlumnos().subscribe((data) => {
    //   this.alumnos = data;
    // });
  }
}
