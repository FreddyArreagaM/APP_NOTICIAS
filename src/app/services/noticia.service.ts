import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {


    /*
      https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2F"+parametros.categoria+"%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2F"+parametros.pais+"%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%7D%7D&resultType=articles&articlesSortBy=date&articlesCount=100&articleBodyLen=-1&includeConceptImage=true&includeConceptDescription=true&includeSourceDescription=true&apiKey=a3586a86-8487-4286-b66c-8b9aed3814d3&callback=JSON_CALLBACK 
    
    
    */
    //https://api.worldnewsapi.com/search-news?api-key=6e39b81b3ed04fc680cd788644f0d8a2


    //Si vale
    //const URL = 'https://api.worldnewsapi.com/search-news?api-key=6e39b81b3ed04fc680cd788644f0d8a2&source-countries=' + parametros.pais;


    const URL = 'https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2F' + parametros.categoria + '%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2F' + parametros.pais + '%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%7D%7D&resultType=articles&articlesSortBy=date&articlesCount=100&articleBodyLen=-1&includeConceptImage=true&includeConceptDescription=true&includeSourceDescription=true&apiKey=a3586a86-8487-4286-b66c-8b9aed3814d3';

    /*const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais +
      '&category=' + parametros.categoria + '&apiKey=466e41b269cb49499940a9719abf5db2';*/

    return this._http.get(URL);
  }
}
