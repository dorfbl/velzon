import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    if(value === 0){
      return 'נקבה'
    }else{
      return 'זכר'

    }
  }

}
