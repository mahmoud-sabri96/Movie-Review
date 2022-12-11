import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mediaArray: any[], searchTerm: string): any[] {
    return mediaArray.filter((element) => {
      return (element.title || element.name).toLowerCase().includes(searchTerm.toLowerCase())
    });
  }

}
