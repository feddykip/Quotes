import { Quote} from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quote[]=[
    new Quote('Entrepreneurial','Timing, perseverance and 10 years of trying will eventually make you look like an overnight success.','Biz Stone',new Date(2019,3,23),0,0,),
    new Quote('Life','It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.','Warren Buffett',new Date(2021,5,18),0,0,),
    new Quote('Aviation','Fighter pilots have ice in their veins. They don’t have emotions. They think, anticipate. They know that fear and other concerns cloud your mind from what’s going on and what you should be involved in.','Buzz Aldrin',new Date(2021,1,12),0,0,),
  ]

  pushQuote(quote:Quote){
    quote.datePost= new Date(quote.datePost)
    this.quote.push(quote)
  }
  deleteQuote(isComplete:any, index:number){
    if(isComplete){
      this.quote.splice(index,1)
  
  }
}
  currentValue!:number;
  newValue!:number;
  counter!:number;
  mostUpvotes(){
    this.currentValue = 0
    this.newValue = 0

    for(this.counter=0 ; this.counter < this.quote.length; this.counter++) {
      this.newValue = this.quote[this.counter].upvote;
      if(this.newValue > this.currentValue){this.currentValue = this.newValue}
    }
    return  this.currentValue
  }

  constructor() { }

  ngOnInit(): void {
  }

}
