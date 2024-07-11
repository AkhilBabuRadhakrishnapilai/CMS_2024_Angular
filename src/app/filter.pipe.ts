// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(item => this.matchItem(item, searchText));
  }

  private matchItem(item: any, searchText: string): boolean {
    return Object.keys(item).some(key => {
      const prop = item[key];
      if (typeof prop === 'string' && prop.toLowerCase().includes(searchText)) {
        return true;
      }
      return false;
    });
  }
}
