import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RVerificcationPage } from './r-verificcation.page';

describe('RVerificcationPage', () => {
  let component: RVerificcationPage;
  let fixture: ComponentFixture<RVerificcationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RVerificcationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
