import { Component, inject } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-citas.component.html',
  styleUrl: './detalle-citas.component.css'
})
export class DetalleCitasComponent {

  servicios = inject(CitasService)
  ruta = inject(ActivatedRoute)

  id:any
  cita: any

  ngOnInit(){
    this.ruta.params.subscribe( c =>{
      this.id= c['idCitas']
      this.servicios.getCitasUnico(this.id).subscribe(cit=>{
        this.cita = cit
      })
    })
  }

}
