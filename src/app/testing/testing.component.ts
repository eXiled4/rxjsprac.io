import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface JLS {
  userId: string;
  id: string;
  title: string;
  completed: boolean
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  todos: JLS[];

  constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get<JLS>("https://jsonplaceholder.typicode.com/todos")
  //   .subscribe(data => {
  //     console.log(data)
  //   });
// }

    ngOnInit(): void {
      this.http.get<JLS[]>("https://jsonplaceholder.typicode.com/todos")
      .subscribe(result => this.todos = result)
    }

    // we are expecting the data being retrieved to be of the data type declared in interface JLS
    // hence, after stating the get request, we are retrieving values corresponding with the properties in JLS
    // Because this is a method, subscribe() is needed here to define this method
  
}

// ngOnOnit ensures that section inside it is loaded once browser is ready

// Creating an Interface object/function allows copying/mimicing of an API website
// In this example we are fetching data from an API website:
//      https://jsonplaceholder.typicode.com/todos
// It has the data stored as values corresponding with these properties
//    userId, id, title, completed