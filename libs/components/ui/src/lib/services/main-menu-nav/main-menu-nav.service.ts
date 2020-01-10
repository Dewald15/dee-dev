export class MainMenuNavService {
    resize;
    particleCanvas;

    constructor() {}

    hideParticleClasses() {
        this.particleCanvas = document.getElementById('particle-canvas');
        this.removeEvents(this.particleCanvas);
        this.particleCanvas.style.height = '0';
        this.particleCanvas.style.display = 'none';
        this.particleCanvas.style.zIndex = '-50';
        // width = "1920" height = "1080" style = "display: block; height: var(--deviceScreenHeight); z-index: 150;"
        // canvas.setAttribute( 'height', '0' );
        // canvas.setAttribute( 'style', "display: none; height: 0; z-index: -50;" );
    }

    displayParticleClasses() {
        this.particleCanvas = document.getElementById('particle-canvas');
        this.particleCanvas.style.display = 'block';
        this.particleCanvas.style.height = 'var(--deviceScreenHeight)';
        this.particleCanvas.style.zIndex = '150';
    }

    removeEvents(el) {
        const newEl = el.cloneNode(false);
        while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
        el.parentNode.replaceChild(newEl, el);
    }

    toggleHamClass() {
        const htmlScrolling = document.querySelector('html');
        const hamMenu = document.querySelector('.ham-menu');

        if (document.querySelector('.ham-menu.cross')) {
            hamMenu.classList.add('lines');
            hamMenu.classList.remove('cross');
            document.getElementById('container-toolbar-id').classList.remove('cross');
            document.getElementById('side-nav').style.zIndex = '30';
            document.querySelector('.arrow-up')['style'].zIndex = '30';
            document.getElementById('myNav').style.height = '0%';
            htmlScrolling.style.overflowY = 'scroll';
            // below is for the particleBackground on the main menu page
            this.hideParticleClasses();
        } else {
            hamMenu.classList.remove('lines');
            hamMenu.classList.add('cross');
            document.getElementById('container-toolbar-id').classList.add('cross');
            document.getElementById('side-nav').style.zIndex = '20';
            document.querySelector('.arrow-up')['style'].zIndex = '20';
            document.getElementById('myNav').style.height = '100%';
            htmlScrolling.style.overflowY = 'hidden';
            // below is for the particleBackground on the main menu page
            this.displayParticleClasses();
        }

        this.resize = function() {
            const bodyNode = document.querySelector('body');

            bodyNode.style.marginTop = ` ~~(0) + "px"`;
        };

        this.resize();
    }
}
