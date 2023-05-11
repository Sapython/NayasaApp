import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FNewPassPage } from './f-new-pass.page';

describe('FNewPassPage', () => {
  let component: FNewPassPage;
  let fixture: ComponentFixture<FNewPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FNewPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
