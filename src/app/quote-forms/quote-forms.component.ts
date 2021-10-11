import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {

  newQuote = new Quote('','','',new Date(),0,0)
  @Output() addQuote=new EventEmitter<Quote>()

  addingQuotes(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
