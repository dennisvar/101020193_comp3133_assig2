import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';

import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Employee } from './models/employee';

import { list, read } from './graphql/queries';
import { create, update, remove } from './graphql/mutations';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apollo: Apollo) { }

  list(): Observable<Employee[]> {
    return this.apollo.watchQuery<{ employees: Employee[] }>({
      query: list,
    }).valueChanges.pipe(
      map(result => result.data.employees)
    ).pipe(
      tap(result => console.log('Result:', result))
    );
  }

  create(employee: Employee): Observable<Employee> {
    return this.apollo.mutate<{ addEmployee: Employee }>({
      mutation: create,
      variables: employee,
      refetchQueries: [{ query: list }],
    }).pipe(
      map(result => (result.data ? result.data.addEmployee : {} as Employee))
    );
  }

  read(id: string): Observable<Employee> {
    return this.apollo.watchQuery<{ employee: Employee }>({
      query: read,
      variables: { id },
    }).valueChanges.pipe(
      map(result => result.data.employee)
    );
  }

  update(employee: Employee): Observable<Employee> {
    return this.apollo.mutate<{ updateEmployee: Employee }>({
      mutation: update,
      variables: employee,
      refetchQueries: [{ query: list }],
    }).pipe(
      map(result => (result.data ? result.data.updateEmployee : {} as Employee))
    );
  }

  remove(id: string): Observable<string> {
    return this.apollo.mutate<{ deleteEmployee: string }>({
      mutation: remove,
      variables: { id },
      refetchQueries: [{ query: list }],
    }).pipe(
      map(result => (result.data ? result.data.deleteEmployee : ''))
    );
  }
  
}
