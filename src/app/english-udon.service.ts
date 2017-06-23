import { Injectable } from '@angular/core';

import { UdonService } from './udon.service';

class UnknownUdonException {
}

@Injectable()
export class EnglishUdonService extends UdonService {

  getUdonName(id: string): string {
    if (id === 'kake') {
      return 'Kake-Udon';
    } else if (id === 'kitsune') {
      return 'Kitsune-Udon';
    } else {
      throw new UnknownUdonException();
    }
  }

  getUdonDescription(id: string): string {
    if (id === 'kake') {
      return `
A kind of plain udon.<br>
You can choose topping on it.`;
    } else if (id === 'kitsune') {
      return `
Udon with Abura-age (fried tofu).`;
    } else {
      throw new UnknownUdonException();
    }
  }

}
