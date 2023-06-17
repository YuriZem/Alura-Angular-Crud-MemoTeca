import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pesansamento',
  templateUrl: './criar-pesansamento.component.html',
  styleUrls: ['./criar-pesansamento.component.css']
})
export class CriarPesansamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo2'
  }
  constructor(
     private service: PensamentoService,
     private router: Router,


     ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(res => this.router.navigate(['/listarPensamento']))
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
