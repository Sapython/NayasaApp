import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RNewPassPage } from './r-new-pass.page';

describe('RNewPassPage', () => {
  let component: RNewPassPage;
  let fixture: ComponentFixture<RNewPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RNewPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
