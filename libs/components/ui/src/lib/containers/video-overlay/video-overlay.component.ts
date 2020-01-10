import { Component, OnChanges, OnInit, HostListener } from '@angular/core';

import { VideoOverlayService } from '../../services';

@Component({
    selector: 'blueCircle-ui-video-overlay',
    templateUrl: './video-overlay.component.html',
    styleUrls: ['./video-overlay.component.css']
})
export class VideoOverlayComponent implements OnInit, OnChanges {
    @HostListener('document:keydown', ['$event'])
    onKeydownHandler ( event: KeyboardEvent ) {
        if (event.key === '27' || event.key === 'Escape' ) this._videoOverlayService.closeVideoModal();
    }

    constructor(private _videoOverlayService: VideoOverlayService) {}

    ngOnInit() {}

    ngOnChanges() {}

    closeVideoOverlay() {
        this._videoOverlayService.closeVideoModal();
    }
}
