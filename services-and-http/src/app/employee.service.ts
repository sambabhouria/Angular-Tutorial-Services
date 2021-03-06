import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, concat, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEmployee } from './employee';

/*
create a service
register it
and urse
*/

/*
 Injetable decorator tells angular that the service might it self have injector dependancies
 this is require if servece have other dependencies
 IF YOU REMOVE Injectable decorator that mean it's simple class nothing to do we angular
*/
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http : HttpClient) { }

  // Creting a service that return a method getEmployees array
  // The service must be register if not it will be a regular class
  private _url: string = "/assets/data/employees.json";
  getEmployees (): Observable<IEmployee[]> {
    // return this.http.get<IEmployee[]>(this._url);

    return this.http.get<IEmployee[]>(this._url)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here
        return throwError(err || "Server Error");    //Rethrow it back to component thats subscribe to the observable
      })
    )
    // return [
    //   {id: 1, name:"George", age:32, retiredate:"March 12, 2014"},
    //   {id: 2, name:"Edward", age:17, retiredate:"June 2, 2023"},
    //   {id: 3, name:"Christine", age:58, retiredate:"December 20, 2036"},
    //   {id: 4, name:"Sarah", age:62, retiredate:"April 30, 2020"}
    // ]
  }
}
