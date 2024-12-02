import { CommonModule } from '@angular/common'
import { Component, computed, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UsersService } from '@/app/services/users.service'
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs'
import { TitleComponent } from '../../../shared/title/title.component'

@Component({
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService)

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(Number(id)))
    )
  )

  public titleLabel = computed(() => {
    if (!this.user()) return 'Cargando informacion del usuario'

    return `Informacion del usuario: ${this.user()!.first_name} ${
      this.user()!.last_name
    }`
  })
}
