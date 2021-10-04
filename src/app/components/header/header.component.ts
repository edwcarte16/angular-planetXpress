import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
options = [
  {element: "Login", routerLink: "/login"},
  {element: "Administrador", routerLink: "/admin"},
  {element: "Productos", routerLink: "/products"}
]
  constructor() { }

  ngOnInit(): void {
  }
}
