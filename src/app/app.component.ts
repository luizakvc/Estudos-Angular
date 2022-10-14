import { Component } from '@angular/core';

//@ ('decorator') faz com que a propriedade/classe/tag/... tenha um comportamento a mais, um comportamento do Angular
/** 'templateUrl': informa ao componente qual arquivo HTML ele deve mostrar quando o mesmo for utilizado
 * 'stylesUrls': é um array, informa os caminhos dos arquivos CSS que o componente utilizará
 * 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // TODO COMPONENTE tem uma classe
  title = 'primeiro-projeto';
}
