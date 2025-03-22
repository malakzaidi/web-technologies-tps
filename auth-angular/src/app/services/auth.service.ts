import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL de l'API JSON Server
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('currentUser') || 'null')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length === 0) {
            throw new Error('Email ou mot de passe incorrect');
          }
          const user = users[0];
          // Stocker les informations utilisateur dans le localStorage
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
      .pipe(
        tap(newUser => {
          // Stocker les informations utilisateur dans le localStorage après inscription
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          this.currentUserSubject.next(newUser);
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    // Supprimer l'utilisateur du localStorage lors de la déconnexion
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}
