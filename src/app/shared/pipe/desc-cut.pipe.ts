import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descCut'
})
export class DescCutPipe implements PipeTransform {

  transform(value: string, nbChar: number): string {
    //return value.substring(0, 40)
   return value.substring(0, nbChar) + (value.length>nbChar ?"..." : "") ;
  }

}
