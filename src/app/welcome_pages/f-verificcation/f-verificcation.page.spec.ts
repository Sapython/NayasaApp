import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FVerificcationPage } from './f-verificcation.page';

describe('FVerificcationPage', () => {
  let component: FVerificcationPage;
  let fixture: ComponentFixture<FVerificcationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FVerificcationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
