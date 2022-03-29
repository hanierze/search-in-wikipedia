import { Component } from '@angular/core';
import {WikiPediaService} from "./_services/wiki-pedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private wikipediaService : WikiPediaService) {
  }

  result : [] =[]
  onResult(e: string){
    // console.log(e)
    this.wikipediaService.openSearch(e).subscribe(res => {
      console.log(res.query.search)
      this.result = res.query.search
    })
  }





}
