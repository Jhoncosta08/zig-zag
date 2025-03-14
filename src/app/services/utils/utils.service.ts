import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  openInNewTab(src: string): any {
    window.open(src, '_blank');
  }

}
