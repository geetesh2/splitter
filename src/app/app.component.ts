import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplitterComponent } from "./splitter/splitter.component";
import { ExampleComponent } from "./example/example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplitterComponent, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'splitter';
}
