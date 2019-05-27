import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private notify = new Subject();
  notifyObservable$ = this.notify.asObservable();

  constructor() {

  }
  public notifyOther(data: string) {
    if (data) {
      this.notify.next(data);
    }
  }
}
