import { Component, inject } from '@angular/core';
import { AmiguisService } from '../../services/amiguis.service';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-amiguis',
  standalone: true,
  imports: [CommonModule, FormularioComponent, TablaComponent],
  templateUrl: './amiguis.component.html',
  styleUrl: './amiguis.component.css'
})
export class AmiguisComponent {

  servicios = inject(AmiguisService)
  amiguis: any


  ngOnInit(){
    this.servicios.getAmiguis().subscribe( n => {
      this.amiguis = n
    })
  }

}
