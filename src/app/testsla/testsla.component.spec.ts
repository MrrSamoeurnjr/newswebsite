import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestslaComponent } from './testsla.component';

describe('TestslaComponent', () => {
  let component: TestslaComponent;
  let fixture: ComponentFixture<TestslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestslaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
