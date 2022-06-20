import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Consumptions} from '../../components.model';

@Injectable({
    providedIn: 'root'
})

export class ConsumptionService {

    basePath = 'http://localhost:8891/employees';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`An error ocurred: ${error.error.message}`);
        } else {
            console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError( ()  => new Error('Something happened with request, please try again later'));
    }

    getAllConsumptionById(id: any): Observable<Consumptions> {
        return this.http.get<Consumptions>(this.basePath, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    deleteConsumptions(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    updateConsumptions(id: any, item: any): Observable<Consumptions> {
        return this.http.put<Consumptions>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createConsumptions(item: any): Observable<Consumptions> {
        return this.http.post<Consumptions>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }
}
