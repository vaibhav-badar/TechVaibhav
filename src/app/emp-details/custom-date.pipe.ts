import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  private datePipe: DatePipe = new DatePipe('en-US'); // Specify the locale

  transform(value: any, format: string = 'yyyy-MM-dd'): string | null {
    // Check if value is valid
    if (!value) return null;

    // Use Angular's built-in DatePipe to transform the date
    return this.datePipe.transform(value, format);
  }
}
