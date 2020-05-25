import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { AppConstants } from '../constants/shared.constants';
import { HandleError } from './../util/handle-error';
import { Injectable } from '@angular/core';
import { ItemDTO } from './../interfaces/item';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private readonly _pathEndpointListar = '/items';
  baseHttpHeader: HttpHeaders;
  baseURL: string;
  pathEndpoint: string;

  /**
   * Creates an instance of ItemsService.
   * @param {HttpClient} http
   * @memberof ItemsService
   */
  constructor(private http: HttpClient) {
    this.pathEndpoint = `${environment.hosts.local}${this._pathEndpointListar}`;
    this.baseHttpHeader = AppConstants._baseHttpOptions;
  }

  /**
   * Retorna uma lista de Items
   * @returns {Observable<ItemDTO>}
   * @memberof ItemsService
   */
  getAllItems(): Observable<ItemDTO> {
    return this.http
      .get<ItemDTO>(this.pathEndpoint, {
        headers: this.baseHttpHeader,
      })
      .pipe(retry(1), catchError(HandleError.handleError));
  }
}
