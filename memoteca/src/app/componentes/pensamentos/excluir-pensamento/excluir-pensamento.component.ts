import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento : Pensamento = {
    id:0,
    conteudo:'',
    autoria:'',
    modelo:'',
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(res => this.pensamento = res)
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(Number(this.pensamento.id)).subscribe(_ => this.sair())
    }
  }

  sair(){
    this.router.navigate(['\listarPensamento'])
  }
}
