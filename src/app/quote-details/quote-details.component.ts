import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  voting!: Quote;
  @Output()
  isComplete=new EventEmitter<boolean>()

  upVote(){
    this.voting.upvote+=1;
  }
  downVote(){
    this.voting.downvote+=1;
  }
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
