import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './pages/dashboard/lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  {path:'', component:ListaTarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
