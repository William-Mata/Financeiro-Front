// auth.service.ts
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {
    const token = localStorage?.getItem('auth_token');
    this._isLoggedIn.next(!!token);
  }

  login(credentials: {email: string, password: string}) {
    return this.http.post<{token: string}>('/api/auth/login', credentials).pipe(
      tap(response => {
        localStorage?.setItem('auth_token', response.token);
        this._isLoggedIn.next(true);
        this.router.navigate(['/']);
      })
    );
  }

  logout() {
    localStorage?.removeItem('auth_token');
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage?.getItem('auth_token');
  }
}