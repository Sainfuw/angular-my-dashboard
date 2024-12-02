import { CardComponent } from '@/app/shared/card/card.component'
import { HeavyLoadersFastComponent } from '@/app/shared/heavy-loaders/heavy-loaders-fast.component'
import { TitleComponent } from '@/app/shared/title/title.component'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  imports: [
    CommonModule,
    CardComponent,
    HeavyLoadersFastComponent,
    TitleComponent,
  ],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {}
