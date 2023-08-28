import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Home} from './user/core/home/interfaces'
import {TopHeader} from './user/core/interfaces'
import {headerData} from './user/DataApi/header.data'
import {homeData} from './user/DataApi/home.data'
import {ProductData} from './user/DataApi/product.data'
import {ProductInterface} from './user/shared/standalone/product/model'

export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let top_header: {
      header: TopHeader
      home: Home
      product: ProductInterface
    } = {
      header: headerData,
      home: homeData,
      product: ProductData,
    }
    return top_header
  }
}
