import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-4 p-10 bg-white rounded shadow">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {}
