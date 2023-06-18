import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  haMaisPensamentos: boolean = true;
  listaPensamentos : Pensamento[] = [];
  paginaAtual:number = 1
  favoritos:boolean = false;
  titulo:string = 'Meu Mural';
  listaFavoritos: Pensamento[] = []
  constructor(
    private service: PensamentoService,
    private router: Router

  ) { }

  filtro:string = '';

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos).subscribe(res => this.listaPensamentos = res)
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro,this.favoritos).subscribe(res => {
      this.listaPensamentos.push(...res) //aqui retorna do bd a lista de pensamentos e adiciona em nosso array ja existente
      if(!res.length){
        this.haMaisPensamentos = false
      }
    })
  }
  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual,this.filtro,this.favoritos).subscribe(res => {this.listaPensamentos = res})
  }
  listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual,this.filtro,this.favoritos).subscribe(res => {
      this.listaPensamentos = res
      this.listaFavoritos = res
    })
  }

  recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }
}
