import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  Valores = {
    Pizza: 34.99,
    Hamburger: 22.99,
    Salada: 15.99,
    Bolo: 9.99,
    Vegana: 24.99,
  };

  Pedido = {
    nome: '',
    telefone: '',
    endereco: '',
    pizza: false,
    hamburger: false,
    salada: false,
    bolo: false,
    vegano: false,
    total: 0.0,
  };

  constructor() {}

  ngOnInit() {}

  criarPedido() {
    let total = 0.0;
    total += this.Pedido.bolo ? this.Valores.Bolo : 0;
    total += this.Pedido.hamburger ? this.Valores.Hamburger : 0;
    total += this.Pedido.pizza ? this.Valores.Pizza : 0;
    total += this.Pedido.vegano ? this.Valores.Vegana : 0;
    total += this.Pedido.salada ? this.Valores.Salada : 0;

    this.Pedido.total = total;

    if (
      this.Pedido.nome !== '' &&
      this.Pedido.endereco !== '' &&
      this.Pedido.telefone !== '' &&
      (this.Pedido.bolo ||
        this.Pedido.hamburger ||
        this.Pedido.pizza ||
        this.Pedido.vegano ||
        this.Pedido.salada)
    ) {
      console.log(this.Pedido);
    } else {
      alert('Preencha todos os campos obrigatórios');
    }
  }
}
