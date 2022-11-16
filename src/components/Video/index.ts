import {onMounted, h, createApp, VueElement, type App} from 'vue'
import VideoComponent from './video';
interface Props {
  src: string,
  title?: string
}

class Video {

  private div: HTMLDivElement;
  private vc: App<Element> | null;

  constructor() {
    this.div = document.createElement('div');
    this.vc = null
  }
  public show(props: Props) {
    this.div = document.createElement('div');
    const bc = document.querySelector('.basic-container') as HTMLElement;
    bc.appendChild(this.div);

    this.vc = createApp(h(VideoComponent, props))
  
    this.vc.mount(this.div);

    setTimeout(() => {
      window.addEventListener('click', closeVideoFn)
    }, 100)

  }

  public close() {
    (this.vc as App<Element>).mount(this.div as HTMLDivElement);
    this.div.remove();
    window.removeEventListener('click', closeVideoFn)
  }
};

function closeVideoFn(e: Event) {

  const videoNode = document.querySelector('#willesPlay');

  if (videoNode?.contains(e.target as Element)) return;

  window?.videoInstance?.close?.()
}

export default Video
