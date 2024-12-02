import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px] p-10', cssClass]">
      <h1>Heavy Loaders Slow</h1>
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string

  constructor() {
    const start = Date.now()
    while (Date.now() - start < 3000) {}
    console.log('Heavy Loaders Slow Loaded')
  }
}
