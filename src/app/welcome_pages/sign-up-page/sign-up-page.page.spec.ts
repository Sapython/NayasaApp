import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpPagePage } from './sign-up-page.page';

describe('SignUpPagePage', () => {
  let component: SignUpPagePage;
  let fixture: ComponentFixture<SignUpPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
