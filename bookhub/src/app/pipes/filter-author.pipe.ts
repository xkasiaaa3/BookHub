import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();

    return value.filter(val => {
      return val.author.toLowerCase().includes(filterText);
    });
  }
}
