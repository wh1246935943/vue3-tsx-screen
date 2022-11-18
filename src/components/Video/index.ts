import { h, createApp, type App } from 'vue'
import VideoComponent, { type VideoProps } from './video';

class Video {

  private div: HTMLDivElement;
  private vc: App<Element>;

  constructor() {
    this.div = document.createElement('div');
    this.vc = createApp({});
  };

  public show(props: VideoProps) {
    this.div = document.createElement('div');
    const bc = document.querySelector('.basic-container') as HTMLElement;
    bc.appendChild(this.div);

    this.vc = createApp(h(VideoComponent, props))
  
    this.vc.mount(this.div);

    setTimeout(() => {
      window.addEventListener('click', this.closeVideoFn)
    }, 100)

  }

  public close() {
    this.vc.mount(this.div);
    this.div.remove();
    window.removeEventListener('click', this.closeVideoFn)
  };

  private closeVideoFn(e: Event) {

    const videoNode = document.querySelector('#willesPlay');
  
    if (videoNode?.contains(e.target as Element)) return;
  
    window?.videoInstance?.close?.()
  }
};


export default Video
