import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class DataService{
  baseUrl: string = 'https://swapi.dev/api/planets/1/'

  constructor(private httpClient: HttpClient){

  }

  //Essa função já retorna automaticamente um observable
  get_jobs(){
    return this.httpClient.get(this.baseUrl)
  }


}

