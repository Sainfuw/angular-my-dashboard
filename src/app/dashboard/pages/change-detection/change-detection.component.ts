import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { CardComponent } from '../../../shared/card/card.component'
import { SectionComponent } from '../../../shared/section/section.component'
import { TitleComponent } from '../../../shared/title/title.component'

@Component({
  imports: [CommonModule, TitleComponent, SectionComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change Detection" withShadow />
    <app-section>
      <app-card>
        <pre>{{ frameworksAsSignal() | json }}</pre>
      </app-card>
      <app-card>
        <pre>{{ frameworksAsProperty | json }}</pre>
      </app-card>
    </app-section>
  `,
})
export default class ChangeDetectionComponent {
  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  constructor() {
    setTimeout(() => {
      this.frameworksAsSignal.update((state) => ({
        ...state,
        name: 'React',
      }))
      this.frameworksAsProperty.name = 'React'
      console.log('Change Detection')
    }, 3000)
  }
}
