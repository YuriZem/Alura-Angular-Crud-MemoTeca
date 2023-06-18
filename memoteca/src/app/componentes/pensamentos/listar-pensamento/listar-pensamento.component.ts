import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  haMaisPensamentos: boolean = true;
  listaPensamentos : Pensamento[] = [];
  paginaAtual:number = 1
  constructor( private service: PensamentoService) { }

  filtro:string = '';

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(res => this.listaPensamentos = res)
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(res => {
      this.listaPensamentos.push(...res) //aqui retorna do bd a lista de pensamentos e adiciona em nosso array ja existente
      if(!res.length){
        this.haMaisPensamentos = false
      }
    })
  }
  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual,this.filtro).subscribe(res => {this.listaPensamentos = res})
  }
}
