import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'

import { UsersService } from '@/app/services/users.service'
import { TitleComponent } from '@/app/shared/title/title.component'
import { RouterLink } from '@angular/router'

@Component({
  imports: [CommonModule, TitleComponent, RouterLink],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public userService = inject(UsersService)
}
