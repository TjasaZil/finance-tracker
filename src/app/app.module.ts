import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/**DevExtreme*/
import { DxFormModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

/**Firebase*/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { categoryReducer } from './state/category/category.reducers';
import { CategoryEffects } from './state/category/category.effects';
import { ExpenseEffects } from './state/expense/expense.effects';
import { expenseReducer } from './state/expense/expense.reducers';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxChartModule,
    DxButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    StoreModule.forRoot({ category: categoryReducer, expense: expenseReducer }),
    EffectsModule.forRoot([CategoryEffects, ExpenseEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
