import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { User } from './models/user';

import { login } from './graphql/queries';
import { signup } from './graphql/mutations';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  signup(user: User): Observable<User> {
    return this.apollo.mutate<{ signup: User }>({
      mutation: signup,
      variables: user,
    }).pipe(
      map(result => (result.data ? result.data.signup : {} as User))
    );
  }

  login(): Observable<User[]> {
    return this.apollo.watchQuery<{ login: User[] }>({
      query: login,
    }).valueChanges.pipe(
      map(result => result.data.login)
    );
  }
}
