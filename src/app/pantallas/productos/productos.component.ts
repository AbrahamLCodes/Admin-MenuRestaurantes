import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INgxSelectOptions } from 'ngx-select-ex';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public nuevo: boolean = false;
  public items: string[] = ["Centro", "Consulado", "Juventud"];
  public categorias: string[] = ["Hamburgesas", "Burritos", "Bebidas"];
  public productos: any[] = [
    {
      nombre: "Hamburgesa",
      precio: 32.40,
      promocion: false,
      tiene_imagen: true
    },
    {
      nombre: "Hot Dogs",
      precio: 45.20,
      promocion: false,
      tiene_imagen: false
    },
    {
      nombre: "Torta de pierna",
      precio: 10.23,
      promocion: false,
      tiene_imagen: true
    },
    {
      nombre: "Burrito de sebrada XD",
      precio: 40,
      promocion: false,
      tiene_imagen: true
    },
  ]

  public ngxControl = new FormControl();
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;

  public categoriangxControl = new FormControl();
  private categoriangxDefaultTimeout;
  private categoriangxDefaultInterval;
  private categoriangxDefault;

  public files: File[] = [];

  public sucursalS = null;

  constructor() {
    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
      }, 2000);
    }, 2000);

    this.categoriangxDefaultTimeout = setTimeout(() => {
      this.categoriangxDefaultInterval = setInterval(() => {
      }, 2000);
    }, 2000);
  }

  ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    clearTimeout(this._ngxDefaultTimeout);
    clearInterval(this._ngxDefaultInterval);

    clearTimeout(this.categoriangxDefaultTimeout);
    clearInterval(this.categoriangxDefaultInterval);
  }

  public onSelect(event): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  //Select Sucursales
  public doNgxDefault(): any {
    return this._ngxDefault;
  }
  public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);
  public doFocus = () => console.log('SingleDemoComponent.doFocus');
  public doBlur = () => console.log('SingleDemoComponent.doBlur');
  public doOpen = () => console.log('SingleDemoComponent.doOpen');
  public doClose = () => console.log('SingleDemoComponent.doClose');
  public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);
  public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);
  public doSelectOptions = (options: INgxSelectOptions[]) => console.log('SingleDemoComponent.doSelectOptions', options);

  //Select Categorias
  public categoriadoNgxDefault(): any {
    return this.categoriangxDefault;
  }
  public categoriainputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);
  public categoriadoFocus = () => console.log('SingleDemoComponent.doFocus');
  public categoriadoBlur = () => console.log('SingleDemoComponent.doBlur');
  public categoriadoOpen = () => console.log('SingleDemoComponent.doOpen');
  public categoriadoClose = () => console.log('SingleDemoComponent.doClose');
  public categoriadoSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);
  public categoriadoRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);
  public categoriadoSelectOptions = (options: INgxSelectOptions[]) => console.log('SingleDemoComponent.doSelectOptions', options);
}
