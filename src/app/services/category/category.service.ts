import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private baseURL="https://financetracker-970ea-default-rtdb.europe-west1.firebasedatabase.app/categories";
  constructor(private http:HttpClient) { }

  /** add, show, change and delete category */

  //shows all categories
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseURL}`)
  }

  //adds a category
  addCategory(category: Category){
    return this.http.post<Category>(this.baseURL, category);
  }

  //changes category
  changeCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(this.baseURL + '/' + category.id, category)
  }

  //deletes category
  deleteCategory(category: Category): Observable<Category>{
    return this.http.delete<Category>(this.baseURL + '/' + category.id)
  }
}
