import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiguisComponent } from './amiguis.component';

describe('AmiguisComponent', () => {
  let component: AmiguisComponent;
  let fixture: ComponentFixture<AmiguisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmiguisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmiguisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
