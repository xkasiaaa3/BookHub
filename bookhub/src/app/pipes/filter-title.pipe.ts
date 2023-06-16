import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();

    return value.filter(val => {
      return val.title.toLowerCase().includes(filterText);
    });
  }
}
