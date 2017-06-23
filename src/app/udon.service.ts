import { Injectable } from '@angular/core';

class UnknownUdonException {
}

@Injectable()
export class UdonService {

  getUdonName(id: string): string {
    if (id === 'kake') {
      return 'かけうどん';
    } else if (id === 'kitsune') {
      return 'きつねうどん';
    } else {
      throw new UnknownUdonException();
    }
  }

  getUdonDescription(id: string): string {
    if (id === 'kake') {
      return `
ベーシックなかけうどんです。<br>
トッピングを付けて自分だけのうどんにカスタマイズすることも可能です。`;
    } else if (id === 'kitsune') {
      return `
ジューシーなあぶらあげを乗せたうどんです。`;
    } else {
      throw new UnknownUdonException();
    }
  }

}
