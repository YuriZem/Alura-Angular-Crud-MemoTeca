import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  formulario!: FormGroup;

  constructor(
     private service: PensamentoService,
     private router: Router,
     private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario Reativo'],
      autoria: [''],
      modelo: ['modelo1'],
    })
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(res => this.router.navigate(['/listarPensamento']))
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
