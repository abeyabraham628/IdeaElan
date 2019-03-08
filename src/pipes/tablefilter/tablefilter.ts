import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TablefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'table-filter',
})
export class TablefilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
        return [];
    }
    if (!field || !value) {
        return items;
    }

    return items.filter(singleItem =>
        singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
}
}
