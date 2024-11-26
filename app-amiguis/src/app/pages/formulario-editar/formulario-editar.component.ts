import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmiguisService } from '../../services/amiguis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {

  id: any;
  nombre: any;
  edad: any;
  genero: any;

  servicio = inject(AmiguisService)
  ruta = inject(Router)
  router = inject(ActivatedRoute)

  ngOnInit(){
    this.router.params.subscribe(r =>{
      this.servicio.getAmiguisID( r['idAmiguis'] ).subscribe( a =>{
        this.id = a.id,
        this.nombre = a.nombre,
        this.edad = a.edad,
        this.genero = a.genero
      })
    })
  }

  editar(datos: any){
    this.servicio.putAmiguis(datos.value).subscribe()

    //window.location.href = "amiguis"
    this.ruta.navigateByUrl("amiguis")
  }

}
