import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {NavBar} from '../interfaces'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private http: HttpClient) {}
  private url = 'api/navbar'

  getNavbar() {
    return this.http.get<NavBar>(this.url)
  }
}
