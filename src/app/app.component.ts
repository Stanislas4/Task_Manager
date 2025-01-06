import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Your component logic goes here
}
