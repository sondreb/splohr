import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class IndexerService {
    constructor(private http: HttpClient) {

    }

    // peers() {
    //     return this.http.get('http://indexer.city-chain.org/api/Stats/Peers?api-version=1.0');
    // }

    peers(): Observable<any> {
        return this.http.get<any>('http://indexer.city-chain.org/api/Stats/Peers?api-version=1.0');
    }

    stats() {
        return this.http.get('http://indexer.city-chain.org/api/Stats/Info?api-version=1.0');
    }

}