import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pesansamento',
  templateUrl: './criar-pesansamento.component.html',
  styleUrls: ['./criar-pesansamento.component.css']
})
export class CriarPesansamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
     private service: PensamentoService,
     private router: Router,
     private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ]) ],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidator

      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(_ => this.sair())
    }
  }

  sair(){
    this.router.navigate(['/listarPensamento'])
  }
  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}

// parei na aula 3 video 02
