import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RequestApiService } from './request-api.service';

describe('RequestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [RequestApiService]
  }));

  it('should be created', () => {
    const service: RequestApiService = TestBed.get(RequestApiService);
    expect(service).toBeTruthy();
  });
});
