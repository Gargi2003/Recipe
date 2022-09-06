import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('amount') amountRef!: ElementRef;

  @Output() ingAdded=new EventEmitter<Ingredient>();

  onAdd(){
    const ing= new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value);
    this.ingAdded.emit(ing);
  }
}
