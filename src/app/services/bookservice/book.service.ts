import { Injectable } from '@angular/core';
import { HttpService} from '../httpservice/http.service'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  deleteMethod: any;
  createMethod: any;

  constructor(private httpService: HttpService) { }

  getBook() {
    return this.httpService.get('bookstore_user/get/book');
  }

  getCartItems(){
    return  this.httpService.get('bookstore_user/get_cart_items')
    }
  }
