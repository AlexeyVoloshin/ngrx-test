import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffects } from './store/effects/app.effects';
import { reducers, metaReducers } from './store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { todoReducer, TODO_REDUCER_NODE } from './store/reducers/todo/todo.reducer';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { authReducer, AUTH_REDUCER_NODE } from './store/reducers/auth/auth.reducer';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './store/effects/auth.effects';
// import { appReducers } from './store/reducers/app.reducers';
// import { reducers, metaReducers } from './store/reducers;



@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoComponent,
    HeaderComponent,
    TodoEditComponent,
    UserAuthComponent,
    LoginFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    StoreModule.forFeature(AUTH_REDUCER_NODE, authReducer),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
