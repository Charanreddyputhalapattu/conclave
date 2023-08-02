import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContestComponent } from './video-contest.component';

describe('VideoContestComponent', () => {
  let component: VideoContestComponent;
  let fixture: ComponentFixture<VideoContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoContestComponent]
    });
    fixture = TestBed.createComponent(VideoContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
