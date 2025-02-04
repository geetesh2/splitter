import { Component } from '@angular/core';
import { SplitterComponent } from "../splitter/splitter.component";

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SplitterComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

}
