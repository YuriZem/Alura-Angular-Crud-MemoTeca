import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPesansamentoComponent } from './componentes/pensamentos/criar-pesansamento/criar-pesansamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'listarPensamento'
  },
  {
    path:'CriarPensamento',
    component:CriarPesansamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
