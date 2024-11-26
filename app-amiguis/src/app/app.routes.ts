import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AmiguisComponent } from './pages/amiguis/amiguis.component';
import { CitasComponent } from './pages/citas/citas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleCitasComponent } from './pages/detalle-citas/detalle-citas.component';
import { FormularioEditarComponent } from './pages/formulario-editar/formulario-editar.component';

export const routes: Routes = [

    {path: "home", component:HomeComponent },
    {path: "amiguis", component:AmiguisComponent},
    {path: "citas", component:CitasComponent},
    {path: "citas/:idCitas", component:DetalleCitasComponent},
    {path: 'editar/:idAmiguis', component:FormularioEditarComponent},

    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', component:Error404Component}

];
