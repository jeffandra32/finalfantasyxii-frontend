import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { AppConstants } from '../constants/shared.constants';
import { EsperDTO } from './../interfaces/esper.';
import { HandleError } from './../util/handle-error';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EsperService {
  baseHttpHeader: HttpHeaders;
  baseURL: string;
  pathEndpoint: string;
  pathEndpoint2: string;
  private readonly _pathEndpointListar = '/espers';

  /**
   * Creates an instance of ProcessService.
   * @param {HttpClient} http
   * @memberof ProcessService
   */
  constructor(private http: HttpClient) {
    this.pathEndpoint = `${environment.hosts.local}${this._pathEndpointListar}`;
    this.baseHttpHeader = AppConstants._baseHttpOptions;
  }

  /**
   * Retorna todas os Espers
   * @returns {Observable<any>}
   * @memberof PostService
   */
  getAllEspers(): Observable<EsperDTO> {
    return this.http
      .get<EsperDTO>(this.pathEndpoint, {
        headers: this.baseHttpHeader,
      })
      .pipe(retry(1), catchError(HandleError.handleError));
  }
}
