import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JeuxListPage } from './jeux-list.page';

describe('JeuxListPage', () => {
  let component: JeuxListPage;
  let fixture: ComponentFixture<JeuxListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
