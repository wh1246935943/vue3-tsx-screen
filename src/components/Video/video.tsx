import { defineComponent, onMounted, reactive } from 'vue';
import { poller } from '@/utils/utils';
import moment from 'moment/moment';
import { useRouter } from 'vue-router'

import topbar_bj from '@/assets/district-level/top.png';
import locate from '@/assets/district-level/locate.png';
import weather_fine from '@/assets/village-level/weather_fine.png';
import { videoJs } from './willesPlay.js'

import './style.less';

interface Props {
  src: string,
  title?: string
}

export default function Video(props: Props) {
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
            <source src={src} type="video/mp4">
            </source>
            当前浏览器不支持 video直接播放，点击这里下载视频： <a href="/">下载视频</a> </video>
          {/* <div class="playTip glyphicon glyphicon-play"></div> */}
        </div>
        <div class="playControll">
          <div class="playPause playIcon"></div>
          <div class="timebar"> <span class="currentTime">0:00:00</span>
            <div class="progress">
              <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
            <span class="duration">0:00:00</span> </div>
          {/* <div class="otherControl"> <span class="volume glyphicon glyphicon-volume-down"></span> <span class="fullScreen glyphicon glyphicon-fullscreen"></span>
            <div class="volumeBar">
              <div class="volumewrap">
                <div class="progress">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
