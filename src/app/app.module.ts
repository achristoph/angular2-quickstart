import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root.component';
import { AppComponent } from './app.component';
import { TodoStore } from './services/store';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {
        path: '',
        component: AppComponent
      },
      {
        path: ':id',
        component: AppComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    RootComponent
  ],
  providers: [
    TodoStore
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
