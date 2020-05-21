import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  /**
   * Creates an instance of SafePipe.
   * @param {DomSanitizer} sanitizer
   * @memberof SafePipe
   */
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @param {string} url
   * @returns
   * @memberof SafePipe
   */
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
