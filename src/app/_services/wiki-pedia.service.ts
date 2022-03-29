import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WikiPediaService {

  constructor(private http: HttpClient) {
  }


  public openSearch(search: string) : Observable<any> {
    return this.http.get(`https://en.wikipedia.org/w/api.php?`, {
      params: {
        action: 'query',
        list: 'search',
        srsearch: search,
        utf8: "1",
        format: 'json',
        origin: "*"
      }
    });

  }
}
