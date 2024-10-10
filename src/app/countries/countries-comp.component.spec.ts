import { ComponentFixture, TestBed } from '@angular/core/testing';

import CountriesCompComponent from './countries-comp.component';

describe('CountriesCompComponent', () => {
  let component: CountriesCompComponent;
  let fixture: ComponentFixture<CountriesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
        imports: [
          CountriesCompComponent,
          
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
