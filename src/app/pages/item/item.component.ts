import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcio.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion | undefined;
  id:string | undefined;
  constructor( private route: ActivatedRoute, 
               public productoService:ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametros=>{
        //console.log('parametros', parametros['id'])

        this.productoService.getProducto(parametros['id'])
          .subscribe((produc:ProductoDescripcion) =>{
            console.log('producto', produc)
            this.producto = produc
            this.id= parametros['id']

          })

      }
    )
  }

}
