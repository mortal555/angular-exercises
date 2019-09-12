import { Pipe, PipeTransform } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Pipe({
  name: 'hexAndVowel'
})
export class HexAndVowelPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {

    var regex = /[aeiou]/gm;
    
    if(value){
      var arreglo = value.split('');

      arreglo.forEach((val,ind,arr)=>{
        arreglo[ind] = val.replace(regex, val.toUpperCase());
      });

      arreglo.forEach((val,ind,arr)=>{
        arreglo[ind] = val.replace(/[^AEIOU]/gm, val.charCodeAt(0).toString(16));
      });

      value = arreglo.join('');
    }

    return value;
  }
}
