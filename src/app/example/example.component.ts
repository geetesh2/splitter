import { Component } from '@angular/core';
import { SplitterComponent } from "../splitter/splitter.component";
import { MatCard,MatCardTitle,MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [SplitterComponent,MatCard,MatCardTitle,MatCardContent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

}
