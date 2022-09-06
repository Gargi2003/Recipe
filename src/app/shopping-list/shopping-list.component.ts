import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[new Ingredient('Tomatoes',20),new Ingredient('Apples',40)]
  constructor() { }

  ngOnInit(): void {
  }
  onAdded(ing:Ingredient){
    this.ingredients.push(ing);
  }

}
