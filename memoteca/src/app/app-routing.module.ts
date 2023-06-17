import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPesansamentoComponent } from './componentes/pensamentos/criar-pesansamento/criar-pesansamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listarPensamento'
  },
  {
    path: 'criarPensamento',
    component: CriarPesansamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editar-pensamentos/:id',
    component: EditarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
