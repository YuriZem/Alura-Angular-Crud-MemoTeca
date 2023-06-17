import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pesansamento',
  templateUrl: './criar-pesansamento.component.html',
  styleUrls: ['./criar-pesansamento.component.css']
})
export class CriarPesansamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendeno angular',
    autoria: 'dev',
    modelo: 'modelo2'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert('teste')
  }
  cancelar(){
    alert('222')

  }
}
