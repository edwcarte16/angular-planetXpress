import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  info =[
    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 5 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."},

    {nombre: "AMD Ryzen 3 3600G",
    precio: "2'000.000 COP",
    descripcion: "Excelente equipo de escritorio para producción audiovisual."}
  ]
  

  constructor(private PSvc:ProductsService) { }

  ngOnInit(): void {
      this.PSvc.getProduct().subscribe((res)=>console.log(res));
  }
}