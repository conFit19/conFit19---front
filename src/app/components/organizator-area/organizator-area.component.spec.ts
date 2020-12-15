import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorAreaComponent } from './organizator-area.component';

describe('OrganizatorAreaComponent', () => {
  let component: OrganizatorAreaComponent;
  let fixture: ComponentFixture<OrganizatorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizatorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
