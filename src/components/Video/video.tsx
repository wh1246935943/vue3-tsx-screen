import { videoJs } from './willesPlay.js'

import './style.less';

export interface VideoProps {
  src: string,
  title?: string
}

export default function Video(props: VideoProps) {
  videoJs()
  const { src, title } = props;
  return (
    <div class="container">
      <div id="willesPlay">
        <div class="playHeader">
          <div class="videoName">{title}</div>
          <span
            class="playHeaderClose"
            onClick={() => {
              window?.videoInstance?.close?.()
            }}
          >❎</span>
        </div>
        <div class="playContent">
          <video autoplay width="100%" height="100%" id="playVideo">
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div class="playControll">
          <div class="playPause playIcon"></div>
          <div class="timebar"> <span class="currentTime">0:00:00</span>
            <div class="progress">
              <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
            <span class="duration">0:00:00</span> </div>
        </div>
      </div>
    </div>
  )
}
