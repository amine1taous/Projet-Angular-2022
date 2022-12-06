import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix',
})
export class PrixPipe implements PipeTransform {
  transform(prix: number): number {
    return prix - prix * 0.15;
  }
}
