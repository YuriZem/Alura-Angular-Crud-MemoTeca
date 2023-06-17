import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'I love Angularxxxx',
    autoria: 'Yuriss',
    modelo: 'modelo1'
    },
    {
    conteudo: 'I love Angularxxxx',
    autoria: 'Yuriss',
    modelo: 'modelo2'
    },
    {
    conteudo: 'kakakakakkkakakakskdjsakdj sakdlsdjkajdkajsdklakakakakakkkakakakskdjsakdjsa kdlsdjkajdkajsdklakakakakakkkakakakskdj sakdjsakdlsdjkajdkajsdklakakakakakkkakakaksk djsakdjsakdlsdjkajdkajsdklakakakak akkkakakakskdjsakdjsakdlsdjkajd ajsdklafdusifuidufisofuoisdfudis fuiufdikakakakakkkakakaks kdjsakdjsakdlsdjkajdkajsdkla',
    autoria: 'Ys',
    modelo: 'modelo3'
    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
