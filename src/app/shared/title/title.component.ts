import { CommonModule } from '@angular/common'
import { Component, Input, booleanAttribute } from '@angular/core'

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  template: `
    <h1
      [ngClass]="{
        'text-3xl font-bold p-10 my-4': true,
        'bg-white shadow rounded': withShadow
      }"
    >
      {{ title }}
    </h1>
  `,
})
export class TitleComponent {
  @Input({ required: true }) title!: string
  @Input({ transform: booleanAttribute }) withShadow: boolean = false
}
