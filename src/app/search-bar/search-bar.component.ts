import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WikiPediaService} from "../_services/wiki-pedia.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private wikipediaService : WikiPediaService) { }

  ngOnInit(): void {
  }

  search : string ='';
  result : [] =[]
  @Output() resultSearch = new EventEmitter

  onSearch(value : Event){
    this.search = (value.target as HTMLInputElement).value;

  }

  onSubmit(e : Event){

    this.resultSearch.emit(this.search)
    e.preventDefault();
  }



}
