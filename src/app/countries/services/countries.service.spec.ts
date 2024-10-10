import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';


describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient()]
    })
    service = TestBed.inject(CountriesService);


  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });


});
