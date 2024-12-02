import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { CardComponent } from '@/app/shared/card/card.component'
import { HeavyLoadersSlowComponent } from '@/app/shared/heavy-loaders/heavy-loaders-slow.component'
import { TitleComponent } from '@/app/shared/title/title.component'

@Component({
  imports: [
    CommonModule,
    TitleComponent,
    CardComponent,
    HeavyLoadersSlowComponent,
  ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {}
