import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
pensamento = {
  id: '1',
  conteudo: 'frases famosas ou penamentos',
  autoria: 'alguém',
  modelo: ''
}
constructor(){}

ngOnInit():void{}

criarPensamento() {
  alert("Novo Pensamento Criado")
}

cancelar() {
  alert("Ação cancelada")
}
}