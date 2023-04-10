import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { TableComponent } from './table/table.component';
import { Apollo } from 'apollo-angular';
import { ApolloTestingModule } from 'apollo-angular/testing';


describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [ ApolloTestingModule ],
      providers: [ EmployeeService, Apollo ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
