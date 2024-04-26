import { Component , OnInit} from '@angular/core';
import { NewapisService } from '../service/newapis.service';

@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.component.html',
  styleUrl: './techcrunch.component.css'
})
export class TechcrunchComponent implements OnInit{
constructor(private _service:NewapisService){}
toptechrunchHeading: any = []
ngOnInit(): void {
  this._service.techcrunchHeading().subscribe((result)=> {
    this.toptechrunchHeading = result.articles
  })
}
}
