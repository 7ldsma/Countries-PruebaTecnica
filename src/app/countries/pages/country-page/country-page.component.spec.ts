import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryPageComponent } from './country-page.component';
import { provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CountryPageComponent,
        RouterModule.forRoot([])
      ],
      providers: [provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
