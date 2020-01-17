import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }
  ingredient = [];
  proteins = ['Beef', 'Chicken', 'Pork',
            'Lamb', 'Tofu', 'Shrimp'];
  veges = ['Potato', 'Tomato', 'Pepper',
          'Lettuce', 'Onion', 'Spinach'];
  recipes = [['Beef', 'Potato'], ['Chicken', 'Onion'],
            ['Pork', 'Pepper'], ['Lamb', 'Lettuce']];
  result = '';
  selectedProtein = this.proteins[0];
  selectedVeg = this.veges[0];
  check() {
    this.ingredient = [];
    console.log(this.selectedProtein);
    console.log(this.selectedVeg);
    this.ingredient.push(this.selectedProtein);
    this.ingredient.push(this.selectedVeg);
    console.log(this.recipes);
    console.log(this.ingredient);
    let flag: boolean = false;
    for (let i = 0; i < this.recipes.length; i++) {
      flag = this.recipes[i][0] == this.selectedProtein && this.recipes[i][1] == this.selectedVeg;
      // tslint:disable-next-line:triple-equals
      // @ts-ignore
      if (flag === true) {
        this.result = this.selectedProtein + ' with ' + this.selectedVeg + ' found :)'
        break;
      }
    }
    if (flag === false) { this.result = 'No such recipe :('; }
  }
  ngOnInit() {
  }
}
