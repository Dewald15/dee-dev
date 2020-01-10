import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideoOverlayService {
    constructor() {}

    toggleVideoModal(id: string) {
        const videoOverlay = document.querySelector('.section-video-overlay');
        const htmlNode = document.querySelector('html');
        const youtube = document.querySelector('#youtube');
        const autoplay = '?autoplay=1';
        const related_no = '&rel=0';
        const src = 'https://www.youtube.com/embed/' + id + autoplay + related_no;

        youtube.setAttribute('src', src);
        videoOverlay.classList.add('show');
        htmlNode.style.overflowY = 'hidden';
    }

    closeVideoModal() {
        const videoOverlay = document.querySelector('.section-video-overlay');
        const youtube = document.querySelector('#youtube');
        const htmlNode = document.querySelector('html');

        videoOverlay.classList.remove('show');
        youtube.setAttribute('src', '');
        htmlNode.style.overflowY = 'scroll';
    }
}
