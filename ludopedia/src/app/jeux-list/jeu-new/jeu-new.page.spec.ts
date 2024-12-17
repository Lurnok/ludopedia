import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JeuNewPage } from './jeu-new.page';

describe('JeuNewPage', () => {
  let component: JeuNewPage;
  let fixture: ComponentFixture<JeuNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
