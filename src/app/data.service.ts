import {Injectable} from '@angular/core'
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let top_header = {
      header: {
        phone: 718256043,
        email: 'dumidu42@gmail.com',
        address: '506/1 maha vithikuliya',
      },
    }
    return top_header
  }
}
