import { CardComponent } from '@/app/shared/card/card.component'
import { SectionComponent } from '@/app/shared/section/section.component'
import { TitleComponent } from '@/app/shared/title/title.component'
import { CommonModule } from '@angular/common'
import { Component, signal } from '@angular/core'

type Grade = 'A' | 'B' | 'C'

@Component({
  selector: 'control-flow',
  imports: [CommonModule, TitleComponent, CardComponent, SectionComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public grades: Grade[] = ['A', 'B', 'C']
  public showContent = signal(false)
  public grade = signal<Grade>('A')
  public frameworks = ['Angular', 'React', 'Vue', 'Svelte', 'Preact']
  public frameworksEmpty = []

  public toggleContent() {
    this.showContent.set(!this.showContent())
  }
}
