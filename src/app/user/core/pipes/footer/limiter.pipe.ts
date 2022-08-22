import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'limiter',
})
export class LimiterPipe implements PipeTransform {
  transform(data: {[key: number]: string}) {
    let temp = {...data}
    delete temp[0]
    return temp
  }
}
