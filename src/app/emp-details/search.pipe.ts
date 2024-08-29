import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(obj: any, param: string): any {
    if (!param) return obj; 

    // param = param.toLowerCase();

    var filteredList = obj.filter((x:any)=>{return x.officiaL_EMAIL.toLowerCase().includes(param.toLowerCase()) || x.firsT_NAME.toLowerCase().includes(param.toLowerCase()) || x.lasT_NAME.toLowerCase().includes(param.toLowerCase()) || x.employeE_ID.toString().includes(param) });
    return filteredList;
}


//  ||  > -1;
//CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
// employeeMaster(obj: any, param: string): any {
//     return obj.filter((obj:any)=> obj.officiaL_EMAIL==param);
// }

  // transform(value: any, args: string): any {
  //   // return null;
  //   // if(!value) return null;
  //   // if(!args) return value;

  //   args = args.toLowerCase();
  //   console.log(args);

  //   return value.filter((item:any)=>{
  //     return JSON.stringify(item).toLowerCase();
  //   })
  // }

}
