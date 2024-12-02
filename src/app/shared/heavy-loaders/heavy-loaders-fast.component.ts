import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-52 p-10', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string
}
