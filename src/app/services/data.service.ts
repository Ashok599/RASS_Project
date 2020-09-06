import { Injectable, Inject } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private notify = new Subject();
  notifyObservable$ = this.notify.asObservable();

  private message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();

  constructor() {

  }
  public notifyOther(data: string) {
    if (data) {
      this.notify.next(data);
    }
  }

  nextMessage(message: string) {
    this.message.next(message)
  }
}
