# User Authentication Web Application 🔐

## Table of Contents 📋
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setting up JSON Server](#setting-up-json-server)
  - [Angular Setup](#angular-setup)
  - [React Setup](#react-setup)
- [Usage](#usage)
- [Implementation Details](#implementation-details)
  - [Authentication Flow](#authentication-flow)
  - [React vs Angular Comparison](#react-vs-angular-comparison)
  - [Code Samples](#code-samples)
    - [React Authentication Context](#react-authentication-context)
    - [Angular Authentication Service](#angular-authentication-service)
    - [Protected Routes Implementation](#protected-routes-implementation)
    - [Form Handling](#form-handling)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [React Implementation](#react-implementation)
- [Angular Implementation](#angular-implementation)
- [Best Practices Implemented](#best-practices-implemented)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Overview 🔍
This project implements a comprehensive user authentication system with signup, login, and logout functionalities. It has been developed using both Angular and React.js frameworks to demonstrate and compare the implementation of the same features across these two popular technologies. The application showcases modern frontend development practices including state management, routing, form validation, and secure authentication workflows.

## Features ✨
- 📝 User registration (Signup)
  - Email validation
  - Password strength requirements
  - Duplicate account prevention
- 🔑 User authentication (Login)
  - JWT-based authentication
  - Remember me functionality
  - Password recovery option
- 🚪 User session termination (Logout)
  - Secure token invalidation
  - Multiple device session management
- 🛡️ Protected routes with authentication guards
  - Role-based access control
  - Session timeout handling
- 🔄 Automatic redirection to login for unauthenticated access attempts
  - Return URL preservation after login
  - Friendly error messages
- 💾 Data persistence using JSON Server as a REST API
  - Simulated backend with authenticated routes
  - User profile management endpoints
- 📱 Responsive design for mobile and desktop
- 🔔 Notification system for authentication events
- 🌙 Dark/Light theme support


## Technologies Used 🛠️
- **Frontend**:
  - Angular 16
    - RxJS for reactive programming
    - NgRx for state management (optional implementation)
    - Angular Material UI components
  - React 18
    - React Router 6 for navigation
    - Context API for state management
    - React Hook Form for form validation
    - Material-UI or Chakra UI components
  - TypeScript for type safety
  - Bootstrap 5 for responsive design
  - SCSS for advanced styling
  - HTML5/CSS3
- **Backend**:
  - JSON Server (REST API simulation)
  - Custom middleware for authentication
- **Authentication**:
  - JWT (JSON Web Tokens)
  - Local Storage for token persistence
  - HTTP Interceptors (Angular)
  - Axios Interceptors (React)
- **Testing**:
  - Jest for unit testing
  - React Testing Library for React components
  - Jasmine/Karma for Angular components
  - Cypress for E2E testing
- **Build Tools**:
  - Webpack
  - Babel
  - Angular CLI
  - Create React App

## Installation 📥

### Prerequisites
- Node.js (v14+)
- npm (v7+) or yarn (v1.22+)
- Git

### Setting up JSON Server
```bash
# Clone the repository
git clone https://github.com/yourusername/user-auth-app.git
cd user-auth-app

# Install JSON Server globally
npm install -g json-server

# Navigate to server directory
cd server

# Install server dependencies (if any)
npm install

# Start JSON Server with custom routes and middleware
json-server --watch db.json --routes routes.json --port 3000 --middlewares middleware.js
```

#### Custom JSON Server Configuration
Create a middleware.js file for JWT validation:

```javascript
// server/middleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

module.exports = (req, res, next) => {
  // Skip authentication for login and signup routes
  if (req.path === '/login' || req.path === '/register' || req.method === 'OPTIONS') {
    return next();
  }

  // Check for Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    // Verify token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

### Angular Setup
```bash
# Navigate to Angular project directory
cd angular-auth

# Install dependencies
npm install

# Start Angular development server
ng serve --open
```
The Angular application will be available at `http://localhost:4200`

### React Setup
```bash
# Navigate to React project directory
cd react-auth

# Install dependencies
npm install

# Start React development server
npm start
```
The React application will be available at `http://localhost:3001`

## Usage 🖥️
1. **Registration Process**:
   - Navigate to the signup page at `/signup`
   - Fill in required fields (name, email, password)
   - Submit the form to create a new account
   - Validation feedback is provided for all fields

2. **Authentication**:
   - Go to the login page at `/login`
   - Enter your registered email and password
   - Toggle "Remember me" if you want to stay logged in
   - Click "Forgot Password" if needed

3. **Protected Content**:
   - After logging in, you'll be redirected to the home page
   - The navigation menu updates to show authenticated options
   - Access protected routes like `/profile` to manage your account

4. **Session Management**:
   - Use the logout button in the header to end your session
   - The token expiration is handled automatically (30-minute default)
   - Refreshing the page maintains your authentication state

5. **Error Handling**:
   - Invalid login attempts show helpful error messages
   - Network issues are handled gracefully with retry options
   - Session timeout warnings appear before automatic logout

## Implementation Details 📝

### Authentication Flow
1. **User Registration**:
   - Client-side validation ensures all fields meet requirements
   - Passwords are checked for minimum length and complexity
   - Backend verifies email uniqueness before account creation
   - Success/failure notifications are displayed to the user
   - Automatic redirection to login upon successful registration

2. **User Login**:
   - Credentials are validated against the JSON Server database
   - JWT token is generated with user ID and role information
   - Token is stored in localStorage or sessionStorage based on "Remember me" option
   - Authentication state is updated in application context/service
   - Previous URL is restored if user was redirected to login

3. **Route Protection**:
   - Authentication guards verify token presence and validity
   - Role-based guards check user permissions for specific routes
   - URL parameters are preserved when redirecting to login
   - Guards prevent authenticated users from accessing login/signup pages

4. **Logout Process**:
   - Token is removed from storage
   - Authentication state is reset
   - All active requests are canceled
   - User is redirected to login page
   - Optional: Server endpoint called to invalidate token

### React vs Angular Comparison
| Feature | Angular Implementation | React Implementation |
|---------|------------------------|----------------------|
| State Management | Services with RxJS BehaviorSubject | Context API with useReducer Hook |
| Route Protection | CanActivate Route Guards | Higher-Order Components/Custom Hooks |
| Form Handling | Reactive Forms with Validators | React Hook Form with validation schema |
| HTTP Requests | HttpClient with Interceptors | Axios with Interceptors |
| Component Architecture | Module-based with Dependency Injection | Component-based with Composition |
| Error Handling | Global Error Handler | Error Boundaries |
| Loading States | NgRx Effects | Custom Hooks with useState |
| Styling Approach | Component-scoped SCSS | CSS-in-JS or styled-components |
| Code Organization | Feature Modules | Feature Folders |
| Testing Approach | TestBed with Jasmine | React Testing Library with Jest |

### Code Samples

#### React Authentication Context
```jsx
// src/context/AuthContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import authReducer from './authReducer';
import authService from '../services/auth';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on page load
  useEffect(() => {
    const initAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return dispatch({ type: 'AUTH_LOGOUT' });
        }

        const userData = await authService.getCurrentUser();
        dispatch({ 
          type: 'AUTH_SUCCESS', 
          payload: { user: userData } 
        });
      } catch (error) {
        dispatch({ 
          type: 'AUTH_FAILURE', 
          payload: { error: error.message } 
        });
        localStorage.removeItem('token');
      }
    };

    initAuth();
  }, []);

  // Login method
  const login = async (credentials) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const { user, token } = await authService.login(credentials);
      
      // Store token
      localStorage.setItem('token', token);
      
      dispatch({ 
        type: 'AUTH_SUCCESS', 
        payload: { user } 
      });
      
      return true;
    } catch (error) {
      dispatch({ 
        type: 'AUTH_FAILURE', 
        payload: { error: error.message } 
      });
      return false;
    }
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'AUTH_LOGOUT' });
  };

  // Register method
  const register = async (userData) => {
    dispatch({ type: 'AUTH_START' });
    try {
      await authService.register(userData);
      dispatch({ type: 'AUTH_RESET' });
      return true;
    } catch (error) {
      dispatch({ 
        type: 'AUTH_FAILURE', 
        payload: { error: error.message } 
      });
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
```

#### Angular Authentication Service
```typescript
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../core/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  constructor(private http: HttpClient, private router: Router) {
    this.initializeAuth();
  }
  
  private initializeAuth(): void {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }
  
  get isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
  
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
  
  login(email: string, password: string, rememberMe: boolean = false): Observable<any> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length === 0) {
            throw new Error('Invalid credentials');
          }
          
          const user = users[0];
          // In a real application, you would get a token from the server
          const token = 'mock-jwt-token-' + Math.random().toString(36).substr(2);
          
          // Store authentication data
          if (rememberMe) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(user));
          }
          
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }
  
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, {
      ...userData,
      createdAt: new Date().toISOString()
    }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  
  getUserProfile(): Observable<User> {
    // In a real app, you would fetch the user profile with the token
    return this.http.get<User>(`${this.apiUrl}/profile`);
  }
  
  updateUserProfile(userData: Partial<User>): Observable<User> {
    const user = this.currentUserSubject.value;
    if (!user) {
      return throwError(() => new Error('User not authenticated'));
    }
    
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, userData)
      .pipe(
        tap(updatedUser => {
          this.currentUserSubject.next({...user, ...updatedUser});
          localStorage.setItem('user', JSON.stringify({...user, ...updatedUser}));
        })
      );
  }
}
```

#### Protected Routes Implementation
```jsx
// React Protected Route Component
// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show loading indicator while checking authentication
  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    // Redirect to login page with return URL
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Check role requirements if specified
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render protected content
  return children;
};

export default ProtectedRoute;
```

```typescript
// Angular Auth Guard
// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Check if user is authenticated
    if (this.authService.isAuthenticated) {
      // Check role requirements if specified
      const requiredRole = route.data['requiredRole'];
      if (requiredRole && this.authService.currentUser?.role !== requiredRole) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
      return true;
    }

    // Redirect to login with return URL
    this.router.navigate(['/login'], { 
      queryParams: { returnUrl: state.url } 
    });
    return false;
  }
}
```

#### Form Handling
```jsx
// React Hook Form Implementation
// src/pages/Login/LoginForm.jsx
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './LoginForm.scss';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm();
  
  const onSubmit = async (data) => {
    setServerError(null);
    try {
      const success = await login(data);
      if (success) {
        // Redirect to previous page or home
        const returnUrl = location.state?.from || '/';
        navigate(returnUrl);
      }
    } catch (error) {
      setServerError(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login to Your Account</h2>
      
      {serverError && (
        <div className="alert alert-danger">{serverError}</div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
            {...register('email', { 
              required: 'Email is required',
              pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter your password"
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        
        <div className="form-group form-check">
          <input 
            id="rememberMe"
            type="checkbox"
            className="form-check-input"
            {...register('rememberMe')}
          />
          <label htmlFor="rememberMe" className="form-check-label">
            Remember me
          </label>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="form-links">
          <a href="/forgot-password">Forgot Password?</a>
          <span className="separator">|</span>
          <a href="/signup">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
```

```typescript
// Angular Reactive Forms Implementation
// src/app/auth/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Initialize form with validation
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });

    // Get return URL from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = null;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(
      this.f.email.value,
      this.f.password.value,
      this.f.rememberMe.value
    )
    .subscribe({
      next: () => {
        this.router.navigate([this.returnUrl]);
      },
      error: error => {
        this.error = error.message || 'Invalid credentials';
        this.loading = false;
      }
    });
  }
}
```

## API Endpoints
The JSON Server exposes the following endpoints:

| Method | Endpoint | Description | Authentication Required |
|--------|----------|-------------|------------------------|
| POST | /register | Create new user account | No |
| POST | /login | Authenticate user and get token | No |
| GET | /users | List all users (admin only) | Yes (Admin) |
| GET | /users/:id | Get user by ID | Yes (Owner/Admin) |
| PATCH | /users/:id | Update user | Yes (Owner/Admin) |
| DELETE | /users/:id | Delete user | Yes (Owner/Admin) |
| GET | /profile | Get current user profile | Yes |
| PATCH | /profile | Update user profile | Yes |

## Database Structure

The `db.json` file contains the following structure:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Admin User",
      "email": "admin@example.com",
      "password": "admin123",
      "role": "admin",
      "createdAt": "2023-01-01T10:00:00.000Z"
    },
    {
      "id": 2,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "role": "user",
      "createdAt": "2023-01-02T14:30:00.000Z"
    }
  ],
  "profiles": [
    {
      "id": 1,
      "userId": 1,
      "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
      "bio": "System administrator",
      "phone": "123-456-7890"
    },
    {
      "id": 2,
      "userId": 2,
      "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
      "bio": "Regular user",
      "phone": "098-765-4321"
    }
  ]
}
```

## React Implementation

The React implementation uses a modern approach with functional components and hooks:

![Login page in React](https://github.com/user-attachments/assets/c1363185-b486-48c9-ab8e-4fe5da0c4425)

![Signup page in React](https://github.com/user-attachments/assets/062fbf1b-47cd-44f0-9c9e-0b1d24140fd4)

![Home page in React](https://github.com/user-attachments/assets/fc6424cc-feb1-4f63-857e-ff73b1f722b6)

Key features of the React implementation:
- Context API for global state management
- Custom hooks for authentication and form handling
- Protected route components for access control
- React Router for navigation
- Form validation with React Hook Form
- Bootstrap 5 for styling with SCSS customizations
- Axios for API requests with interceptors for token handling

## Angular Implementation

The Angular implementation demonstrates TypeScript-based development with Angular's powerful tools:

![Login page in Angular](https://github.com/user-attachments/assets/d3ef60b6-0c4c-4024-aa1c-1749e329cd63)

![Signup page in Angular](https://github.com/user-attachments/assets/6c178bc7-61d3-40b7-971c-760940dcb3cd)

![Home page in Angular](https://github.com/user-attachments/assets/10a9116b-7442-4427-a366-118dabfb1b9f)

Key features of the Angular implementation:
- Services with RxJS for state management
- Route guards for path protection
- Reactive Forms with validators
- HttpClient with interceptors
- Angular modules for feature organization
- TypeScript interfaces for type safety
- SCSS with component encapsulation
- Bootstrap integration with ng-bootstrap

## Database Structure

The JSON Server uses a simple database structure:

![Database Structure](https://github.com/user-attachments/assets/9cb8d7ff-c4d6-4743-a0ab-4aef23534ba8)

- We used the JSON Server as an API to connect with both implementations with React.js and Angular.

## Best Practices Implemented 👌
- ✅ Modular and reusable component design
  - Components are broken down into small, focused units
  - Shared components are used across multiple pages
  - Layout components handle consistent page structure
- ✅ Proper error handling and user feedback
  - Form validation with clear error messages
  - API error handling with user-friendly notifications
  - Loading indicators for asynchronous operations
- ✅ Secure storage of authentication tokens
  - JWT tokens stored in browser storage
  - Token expiration handling
  - Secure token transmission via Authorization headers
- ✅ Responsive design for various screen sizes
