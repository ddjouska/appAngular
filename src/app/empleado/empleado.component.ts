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
habilitacionCuadro=false;
usuRegistrado=true;
textoDeRegistro="No hay nadie registrado";
getRegistroUsuario(){
  this.usuRegistrado=false
}
setUsuarioRegistrado(){
  //alert("El usuario se acaba de registrar")
this.textoDeRegistro="El usuario se acaba de registrar"
}
}
