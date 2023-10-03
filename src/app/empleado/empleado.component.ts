import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
nombre = "Juan";
apellido = "Diaz";
edad = 32;
empresa = "Superempresa"

}
