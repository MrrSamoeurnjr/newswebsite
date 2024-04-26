import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TestslaComponent } from './testsla/testsla.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponent } from './domain/domain.component';
const routes: Routes = [
  {path: '' , component: TopHeadingComponent},
  {path:'tesla' , component: TestslaComponent},
  {path:'business' , component: BusinessComponent},
  {path: 'techcrunch', component: TechcrunchComponent},
  {path: 'domain', component: DomainComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
