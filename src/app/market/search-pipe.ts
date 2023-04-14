import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'searchSymbol'
})
export class SearchPipe implements PipeTransform {
  transform(items:any[],term : string) : any[] {
    let result:any=items;
    if(term && term.trim().length){
      result= items.filter(item =>
        item.symbol.toLowerCase().includes(term.toLowerCase().trim()) ||
        item.name.fa.toLowerCase().includes(term.toLowerCase().trim()) ||
        item.name.en.toLowerCase().includes(term.toLowerCase().trim())
      )
    }
    return  result;
  }
}
