import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina ={}
  cargada:boolean = false;

  equipo: any[] = [];
  
  constructor( private http: HttpClient) { 
    this.cargarInfo();

    this.cargarEquipo();
   

  }

  private cargarInfo(){
    console.log('Servicio de InfoPagina Listo');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true
        this.info = resp
  
        
      })
  }

  private cargarEquipo(){
    console.log('Equipo Listo');

    this.http.get('https://angula-html-e4b68-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp:any) => {
      
        this.equipo = resp
        // console.log('resp', resp)
  
        
      })
  }
}
