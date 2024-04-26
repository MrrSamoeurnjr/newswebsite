import { Component , OnInit} from '@angular/core';
import { NewapisService } from '../service/newapis.service';
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.css'
})
export class DomainComponent implements OnInit{
constructor(private _service: NewapisService){}
topdomainHeading: any = []
ngOnInit(): void {
  this._service.domainHeading().subscribe((result) => {
    this.topdomainHeading = result.articles;
  })
}
}
