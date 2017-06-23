import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdonItemComponent } from './udon-item.component';

describe('UdonItemComponent', () => {
  let component: UdonItemComponent;
  let fixture: ComponentFixture<UdonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
