import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
options = [
  {element: "Computadoras", href: "https://www.facebook.com"},
  {element: "Celulares", href: "https://www.pinterest.com"},
  {element: "Autos", href: "https://www.google.com"},
  {element: "Aviones", href: "https://www.edwinsuesca.com"}
]
  constructor() { }

  ngOnInit(): void {
  }
}
