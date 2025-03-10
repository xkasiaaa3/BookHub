import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string | undefined, limit: any): any {
    if (!value) {
      return null;
    }

    if(value.length>limit){
    return value.substr(0, limit) + '...';}
    else return value;
  }
}
