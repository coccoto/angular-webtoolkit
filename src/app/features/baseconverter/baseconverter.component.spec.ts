import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconverterComponent } from './baseconverter.component';

describe('BaseconverterComponent', () => {
  let component: BaseconverterComponent;
  let fixture: ComponentFixture<BaseconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseconverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
