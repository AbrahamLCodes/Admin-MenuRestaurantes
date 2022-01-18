import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Categoria from '../../modelos/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias: Categoria[] = [
    {
      id: 1,
      nombre: "Servicio 1",
      fecha_registro: "24 de Diciembre del 2021"
    },
    {
      id: 2,
      nombre: "Servicio 2",
      fecha_registro: "13 de Julio del 2021"
    },
    {
      id: 3,
      nombre: "Servicio X",
      fecha_registro: "14 de Abril del 2020"
    }
  ]

  public modalRef: BsModalRef;
  public categoriaSelected: Categoria = null;

  public formCategoria: FormGroup;
  public editar: boolean = false;

  constructor(
    private modalService: BsModalService,
    fb: FormBuilder
  ) { 
    this.formCategoria = fb.group({
      nombre: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public modalEliminar(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public setCategoriaS(categoria: Categoria): void {
    this.categoriaSelected = categoria;
  }

  public editarCategoria(categoria: Categoria): void {
    this.categoriaSelected = categoria;
    this.editar = true;
    this.formCategoria.patchValue({
      nombre: categoria.nombre
    })
  }

  public submitForm(): void {
    const nombre = this.formCategoria.value.nombre;
    if(this.editar){
      const index = this.categorias.indexOf(this.categoriaSelected);
      this.categorias[index].nombre = nombre;
    } else {
      const id = this.categorias.length + 1;
      this.categorias.push({
        id,
        fecha_registro: "23 de Agosto del 2023",
        nombre
      })
    }
    this.resetForm();
  }

  public eliminarCategoria(): void {
    const index = this.categorias.indexOf(this.categoriaSelected);
    this.categorias.splice(index, 1);
    this.modalRef.hide();  
  }

  public resetForm(): void {
    this.formCategoria.reset();
    this.editar = false;
  }

}
