import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Home} from '../interfaces'

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  private url = 'api/home'
  getHomeData() {
    console.log('ran')
    return this.http.get<Home>(this.url)
  }
}
