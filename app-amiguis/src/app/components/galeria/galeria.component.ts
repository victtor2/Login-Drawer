import { Component } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor( private servicios: CitasService){}

  citas: any

  ngOnInit(){
    this.servicios.getCitas().subscribe( c => {
      this.citas= c
    })
  }

}
