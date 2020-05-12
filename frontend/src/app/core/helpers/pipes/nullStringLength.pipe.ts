import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nullStringLength'})

export class NullStringLengthPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value : '--';
  }
}
