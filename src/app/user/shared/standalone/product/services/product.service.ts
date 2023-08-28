import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {ProductInterface} from '../model'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'api/product'
  fetchDetails(productId: number) {
    return this.http.get<ProductInterface>(this.url)
  }
}
