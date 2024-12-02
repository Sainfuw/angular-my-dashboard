import { Product } from '@/app/interfaces/product.interface'
import { Component, signal } from '@angular/core'
import { interval, take, tap } from 'rxjs'
import { TitleComponent } from '../../../shared/title/title.component'
import { InputOutputCardComponent } from './card/card.component'

@Component({
  selector: 'app-input-output',
  imports: [InputOutputCardComponent, TitleComponent],
  templateUrl: './input-output.component.html',
})
export default class InputOutputComponent {
  products = signal<Product[]>([
    { id: 1, name: 'Product 1', quatity: 0 },
    { id: 2, name: 'Product 2', quatity: 0 },
    { id: 3, name: 'Product 3', quatity: 0 },
  ])

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quatity: 0,
          },
        ])
      }),
      take(6)
    )
    .subscribe()

  updateProduct(product: Product, quatity: number) {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quatity } : p))
    )
  }

  onDestroy() {
    this.intervalSubscription.unsubscribe()
  }
}
