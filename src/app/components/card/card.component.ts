import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  info = [
    {title: "AMD Ryzen 3 3600G",
    cost: "2'000.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 3 3600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/1.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"},

    {title: "AMD Ryzen 5 5600G",
    cost: "2'400.000 COP",
    description: "Excelente equipo de escritorio para producción audiovisual.",
    cpu: "AMD Ryzen 5 5600G",
    board: "ASUS® PRIME B550-PLUS",
    ram: "8 GB Corsair VENGEANCE 2400 MHz",
    gpu: "AMD RADEON™ RX 550 de 4 GB",
    storage: "256 GB PCS SSD",
    img: "../../../assets/img/products/pc/2.png"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
