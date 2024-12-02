import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TitleComponent } from '../../../shared/title/title.component'

@Component({
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition" />
    <section class="flex flex-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Image"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        class="bg-blue-500 size-56"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransition1Component {}
