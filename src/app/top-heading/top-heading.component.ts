import { Component , OnInit} from '@angular/core';
import { NewapisService } from '../service/newapis.service';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrl: './top-heading.component.css'
})
export class TopHeadingComponent implements OnInit{
constructor(private _service: NewapisService){}
topHeadingdisplay: any = []
ngOnInit(): void {
  this._service.topHeading().subscribe((result)=> {
    console.log(result)
    this.topHeadingdisplay = result.articles;
  })
}
}
