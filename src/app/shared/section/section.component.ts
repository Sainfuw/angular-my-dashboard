import { Component } from '@angular/core'

@Component({
  selector: 'app-section',
  imports: [],
  template: `
    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ng-content></ng-content>
    </section>
  `,
})
export class SectionComponent {}
