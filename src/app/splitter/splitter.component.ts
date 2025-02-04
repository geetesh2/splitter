import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class SplitterComponent {
  @ViewChild('firstPanel') firstPanel!: ElementRef;

  @Input() orientation: 'vertical' | 'horizontal' = 'vertical'; // Split direction
  @Input() firstPanelSize: number = 50; // Default: 50%
  @Input() secondPanelSize: number = 50; // Default: 50%

  isResizing = false;
  startPos = 0;
  startSize = 0;

  onMouseDown(event: MouseEvent) {
    this.isResizing = true;
    this.startPos = this.orientation === 'vertical' ? event.clientX : event.clientY;
    this.startSize = this.orientation === 'vertical'
      ? this.firstPanel.nativeElement.offsetWidth
      : this.firstPanel.nativeElement.offsetHeight;
    document.body.style.userSelect = 'none'; // Prevent text selection
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) return;
    const offset = (this.orientation === 'vertical' ? event.clientX : event.clientY) - this.startPos;
    const newSize = this.startSize + offset;
    const parentSize = this.orientation === 'vertical'
      ? this.firstPanel.nativeElement.parentElement.offsetWidth
      : this.firstPanel.nativeElement.parentElement.offsetHeight;

    const newFirstSizePercent = (newSize / parentSize) * 100;
    const newSecondSizePercent = 100 - newFirstSizePercent;

    if (newFirstSizePercent > 10 && newSecondSizePercent > 10) { // Prevent too small sizes
      this.firstPanelSize = newFirstSizePercent;
      this.secondPanelSize = newSecondSizePercent;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isResizing = false;
    document.body.style.userSelect = ''; // Re-enable text selection
  }
}
