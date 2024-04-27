import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MiservicioService } from './miservicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  titulo = 'Hola';

  getTitle(){
    return this.title;
  }

  constructor(private service:MiservicioService){

  }

  getEmpleado(){
    return this.service.getEmpleados();
  }
}
