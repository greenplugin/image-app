import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Image} from './Image';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    private page = 0;
    private pageSize = 9;

    constructor(private http: HttpClient) {
    }

    getImages(): Observable<Image[]> {
        const result = this.http.get<Image[]>(`${this.apiUrl}?_start=${this.page * this.pageSize}&_limit=${this.pageSize}`);
        this.page++;
        return result;
    }

    getPageSize(): number {
        return this.pageSize;
    }
}
