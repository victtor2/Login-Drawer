import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AmiguisService } from '../../services/amiguis.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  id: any;
  nombre: any;
  edad: any;
  genero: any;

  
  servicio = inject(AmiguisService)

  guardar( datos: NgForm){
    
    console.log(datos.value);
    this.servicio.postAmiguis(datos.value).subscribe()
    window.location.reload()
    
  }
}
