import { Component, OnInit, Input } from '@angular/core';

import { UdonService } from '../udon.service';

@Component({
  selector: 'udon-item',
  templateUrl: './udon-item.component.html',
  styleUrls: ['./udon-item.component.css']
})
export class UdonItemComponent implements OnInit {

  @Input()
  udonId: string;

  constructor(
    public udonService: UdonService,
  ) { }

  ngOnInit() {
  }

}
