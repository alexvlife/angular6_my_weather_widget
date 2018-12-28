import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirstLetter'
})
export class UppercaseFirstLetterPipe implements PipeTransform {

  transform(text: string): string {
    if (!text) {
      return;
    }
    return text[0].toUpperCase() + text.substr(1).toLowerCase();
  }

}
