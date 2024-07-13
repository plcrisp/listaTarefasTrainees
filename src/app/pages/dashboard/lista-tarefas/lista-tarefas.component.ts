import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.scss'
})
export class ListaTarefasComponent {
  visualizarLista: boolean = false;

  tarefaForm: FormGroup;

  tarefas: any[] = [];

  constructor(private fb: FormBuilder, private db: AngularFirestore) { 
    this.tarefaForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dificuldade: ['', Validators.required]
    });
  }

  onSubmit(): void {
    let tarefa = this.tarefaForm.value;
    tarefa.concluida = false;
    this.tarefas.push(tarefa);
    this.tarefaForm.reset();
    alert('Tarefa adicionada!');
  }

  ativarLista(){
    this.visualizarLista = true;
  }

  concluirTarefa(titulo: string): void {
    const index = this.tarefas.findIndex(t => t.titulo === titulo);
    
    this.tarefas[index].concluida = true;
  }

  excluirTarefa(titulo: string): void {
    const index = this.tarefas.findIndex(t => t.titulo === titulo);
    
    this.tarefas.splice(index, 1); 
  }



}
