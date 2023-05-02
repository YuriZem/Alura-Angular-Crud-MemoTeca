import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pesansamento',
  templateUrl: './criar-pesansamento.component.html',
  styleUrls: ['./criar-pesansamento.component.css']
})
export class CriarPesansamentoComponent implements OnInit {

  pensamento ={
    id:'1',
    conteudo:'Aprendeno angular',
    autoria:'dev',
    modelo:'modelo2'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert('teste')
  }
  cancelar(){

  }
}
