import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDate'

})
export class ShowDatePipe implements PipeTransform {

  transform(value: any,args: any): any{
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    let secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
