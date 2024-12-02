import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TitleComponent } from '../../../shared/title/title.component'

@Component({
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition" />
    <section class="flex justify-end w-full">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Image"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        class="bg-blue-500 size-32 rounded-xl fixed bottom-0 right-0"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransition2Component {}
