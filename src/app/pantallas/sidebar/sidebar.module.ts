import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ProductosComponent } from '../productos/productos.component';
import { SucursalesComponent } from '../sucursales/sucursales.component';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';
import { NgxDropzoneModule } from 'ngx-dropzone';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  declarations: [
    CategoriasComponent,
    ProductosComponent,
    SucursalesComponent
  ],
  imports: [
    SidebarRoutingModule,
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule,
    ReactiveFormsModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    NgxDropzoneModule
  ],
  providers: [BsModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarModule { }
