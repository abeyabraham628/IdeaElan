//TOny MAnuel
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
/**
 * Generated class for the MomentdatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'momentdate',
})
export class MomentdatePipe implements PipeTransform {
  currentDate=moment()

  transform(date:moment.Moment) {
    let expiryDate=moment(date)
     return expiryDate.diff(this.currentDate, 'days');
  }
}
