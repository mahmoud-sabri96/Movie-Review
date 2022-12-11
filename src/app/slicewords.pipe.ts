import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicewords'
})
export class SlicewordsPipe implements PipeTransform {

  transform(Words: string, numOfWord:number): string {
    // Words.split(' ').slice(0,20).join('');
    return Words.split(' ').slice(0, numOfWord).join(' ');
  }

}
