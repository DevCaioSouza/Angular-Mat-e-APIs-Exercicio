import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  // <string>: chamado de Generic Annotation
  @Output() submitted = new EventEmitter<string>()
  // o submitted é o nome (um id) do evento que irá depois ser
  // vinculado via event binding no comp. pai. É usado para
  // passar uma informação que será ativada pelo comp. pai

  term = '';

  constructor() { }

  onFormSubmit(event: any){
    event.preventDefault()
    this.submitted.emit(this.term)
  }
}

/*
Anotações da aula 172 - Passo a passo:
1° Fazer os imports EventEmitter e Output no componente filho
2° Chamar a diretiva @Output no filho

*/
