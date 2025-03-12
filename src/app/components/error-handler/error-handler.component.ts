import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="message" class="alert alert-danger">{{ message }}</div>`,
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent {
  @Input() message: string = '';
}


