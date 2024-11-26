import { Component, inject } from '@angular/core';
import { AmiguisService } from '../../services/amiguis.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(AmiguisService)

  amigui: any

  ngOnInit(){
    this.servicio.getAmiguis().subscribe( a => {
      this.amigui = a
    })
  }

  eliminar(id: any){
    this.servicio.deleteAmiguisID(id).subscribe()
  }

}
