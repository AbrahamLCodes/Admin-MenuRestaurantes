import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ProductosComponent } from '../productos/productos.component';
import { SucursalesComponent } from '../sucursales/sucursales.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Restaurante'
    },
    children: [
      {
        path: '',
        redirectTo: 'categorias'
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
        data: {
          title: 'Categorias'
        }
      },
      {
        path: 'productos',
        component: ProductosComponent,
        data: {
          title: 'Productos'
        }
      },
      {
        path: 'sucursales',
        component: SucursalesComponent,
        data: {
          title: 'Sucursales'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule {}
