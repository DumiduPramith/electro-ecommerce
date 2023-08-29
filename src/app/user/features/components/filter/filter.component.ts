import {Component} from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  searchCategories = {
    laptop: 120,
    Smartphones: 740,
    Cameras: 1450,
    Accessories: 578,
    Laptops: 120,
  }

  filterBrand = {
    samsung: 578,
    lg: 125,
    sony: 755,
  }
}
