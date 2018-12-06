import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items = ['Angular4', 'Recat',  'javascript'];

  newItem = '';
  pushItem = function() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
}
};

  returnItem = function(index) {
    this.items.splice(index, 1);
};

  constructor() { }

  ngOnInit() {
  }
}

