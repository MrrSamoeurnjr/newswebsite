import { Component , OnInit} from '@angular/core';
import { NewapisService } from '../service/newapis.service';

@Component({
  selector: 'app-testsla',
  templateUrl: './testsla.component.html',
  styleUrl: './testsla.component.css'
})
export class TestslaComponent implements OnInit{
  constructor(private _service: NewapisService){}
  topTeslaHeading: any = []
  ngOnInit(): void {
    this._service.teslaHeading().subscribe((result) => {
      this.topTeslaHeading = result.articles;
    })
  }
}
