import { Component , OnInit } from '@angular/core';
import { NewapisService } from '../service/newapis.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent implements OnInit{
constructor(private _service:NewapisService){}
topbusinessHeading: any = []
ngOnInit(): void {
  this._service.topHeading().subscribe((result) => {
    this.topbusinessHeading = result.articles;
  })
}
}
