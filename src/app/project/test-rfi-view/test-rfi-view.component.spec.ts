import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRfiViewComponent } from './test-rfi-view.component';

describe('TestRfiViewComponent', () => {
  let component: TestRfiViewComponent;
  let fixture: ComponentFixture<TestRfiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRfiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRfiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
