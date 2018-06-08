import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';

@Injectable()
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo : any , tipo : string , id : string) {

    return new Promise ( (resolve , reject)=>{
      const formdata = new FormData();
      const xhr = new XMLHttpRequest();
      formdata.append('imagen', archivo , archivo.name);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          }
          else{
            reject(JSON.parse(xhr.response));
          }
        }
      };

      const url = `${URL_SERVICIOS}/upload/${tipo}/${id}`;
      console.log('url actualizar: ' + url );
      xhr.open('PUT' , url , true);
      xhr.send(formdata);

    });
  }
}
