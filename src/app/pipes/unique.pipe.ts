import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(array) {
    return _.uniq(array);
  }

}
