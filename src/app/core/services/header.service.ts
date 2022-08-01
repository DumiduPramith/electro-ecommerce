import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {TopHeader} from '../interfaces'
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  private url = 'api/header'

  getTopHeader() {
    return this.http.get<TopHeader>(this.url)
  }
}
