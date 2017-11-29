import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotequeComponent } from './biblioteque.component';

describe('BibliotequeComponent', () => {
  let component: BibliotequeComponent;
  let fixture: ComponentFixture<BibliotequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
