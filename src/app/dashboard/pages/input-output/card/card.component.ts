import { Product } from '@/app/interfaces/product.interface'
import { Component, input, output } from '@angular/core'

@Component({
  selector: 'input-output-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class InputOutputCardComponent {
  product = input.required<Product>()

  onIncrementQuantity = output<number>()

  incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quatity + 1)
  }
}
