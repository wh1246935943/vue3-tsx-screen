
import { defineComponent, reactive } from 'vue';
import { pointDataMock } from '../../data';
import { useRouter } from 'vue-router';

import './style.less';

export default defineComponent({
  props: {
    mapType: {
      type: String,
      default: '3D'
    },
    isInfoBox: {
      type: Boolean,
      default: true
    },
    setState: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    const state = reactive({
      pointData: pointDataMock
    });

    const router = useRouter()
    return () => {
      const { mapType, isInfoBox, setState } = props;
      return (
        <div class="dl-center-map">
          <div
            class="map-switch-bar"
            style={{
              background: mapType === '3D' ? (
                `url(${new URL(`@/assets/district-level/3D_active.png`, import.meta.url).href})`
              ) : (
                `url(${new URL(`@/assets/district-level/GIS_active.png`, import.meta.url).href})`
              ),
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <span
              class={`map-type ${mapType === '3D' ? 'map-type_active' : ''}`}
              onClick={() => setState({ mapType: '3D' })}
            >立体地图</span>
            <span
              class={`map-type ${mapType === 'GIS' ? 'map-type_active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setState({ mapType: 'GIS', isInfoBox: true })
              }}
            >GIS地图</span>
          </div>
          <svg
            class="map-svg"
            viewBox="0 0 1337 1150"
          >
            <g>
              <image
                v-show={mapType === '3D'}
                class="image-3D"
                href={new URL(`@/assets/district-level/ditu.png`, import.meta.url).href}
              />
            </g>
            <g
              v-show={mapType === '3D'}
              onClick={(e) => {
                // e.stopPropagation();
                router.push({ name: 'VillageLevel' })
                // setState({ isInfoBox: true })
              }}
              onMouseover={() => {
                setState({ isInfoBox: true })
              }}
              onMouseleave={() => {
                setState({ isInfoBox: false })
              }}
              style="transform: translate(498px, 775px) scale(0.53);cursor: pointer;"
            >
              <path fill-rule="evenodd" opacity="0.302" fill="rgb(0, 255, 255)"
                d="M103.492,218.358 L100.901,206.268 L106.083,206.268 L106.083,204.541 L99.174,204.541 L98.310,201.087 L94.856,200.223 L91.402,191.587 L88.811,188.133 L86.220,188.133 L76.721,188.133 L76.721,191.587 L70.676,191.587 L71.539,187.269 L66.358,188.133 L63.767,189.860 L60.313,180.361 L65.494,179.497 L65.494,166.543 L58.585,167.407 L58.585,158.771 L59.449,157.044 L59.449,154.453 L61.176,152.726 L58.585,147.544 L59.449,145.817 L62.903,142.363 L60.313,138.909 L55.995,138.909 L55.131,133.727 L61.176,132.864 L62.040,131.136 L68.085,126.818 L73.267,122.500 L71.539,114.728 L72.403,113.865 L71.539,109.547 L69.812,107.820 L66.358,100.047 L62.903,101.774 L60.313,98.320 L55.995,99.184 L55.995,94.002 L46.495,97.457 L44.768,90.548 L35.269,92.275 L33.541,87.957 L17.133,76.731 L16.270,69.822 L9.361,69.822 L2.452,69.822 L0.725,64.640 L2.452,62.050 L2.452,54.277 L0.725,53.414 L0.725,49.959 L7.634,49.096 L17.133,53.414 L21.451,54.277 L23.179,51.687 L30.087,51.687 L30.951,44.778 L29.224,41.324 L44.768,49.096 L52.540,49.096 L56.858,45.642 L50.813,31.824 L60.313,29.233 L65.494,27.506 L63.767,24.052 L68.949,21.461 L61.176,14.553 L64.631,12.825 L63.767,9.371 L66.358,7.644 L67.221,9.371 L79.311,7.644 L84.493,3.326 L84.493,0.735 L87.084,0.735 L93.129,21.461 L105.219,20.598 L105.219,16.280 L107.810,17.143 L109.537,18.870 L114.718,19.734 L124.218,37.869 L126.809,47.369 L126.809,52.550 L126.809,57.732 L137.171,56.868 L149.262,53.414 L150.989,49.959 L157.897,50.823 L160.488,56.868 L168.261,68.958 L173.442,80.185 L173.442,87.094 L156.170,91.411 L157.034,96.593 L163.079,100.047 L171.715,94.002 L176.033,94.866 L178.623,100.911 L179.487,102.638 L180.351,107.820 L183.805,108.683 L182.078,112.138 L195.895,129.409 L196.759,132.000 L199.349,132.000 L204.531,128.546 L207.122,130.273 L208.849,128.546 L217.485,137.181 L223.530,143.226 L223.530,145.817 L221.803,147.544 L215.758,147.544 L214.030,150.135 L214.030,153.590 L206.258,157.044 L206.258,159.635 L213.167,157.044 L216.621,157.044 L216.621,163.952 L216.621,169.134 L217.485,173.452 L214.030,175.179 C214.030,175.179 214.721,180.533 214.030,180.361 C213.339,180.188 208.849,181.224 208.849,181.224 L208.849,183.815 L201.077,187.269 L201.077,189.860 L198.486,192.451 L198.486,195.042 L200.213,198.496 L197.622,200.223 L192.441,201.087 L184.669,201.950 L182.941,215.768 L181.214,223.540 L176.896,219.222 L173.442,215.768 L176.033,207.995 L175.169,204.541 L174.305,202.814 L169.124,206.268 L167.397,204.541 L169.124,201.950 L169.124,200.223 L171.715,198.496 L171.715,196.769 L169.124,197.632 L166.533,197.632 L166.533,195.042 L155.307,200.223 L150.125,201.087 L144.080,201.087 L142.353,207.132 L138.035,207.132 L137.171,202.814 L135.444,203.677 L133.717,206.268 L119.036,208.859 L119.900,213.177 L110.400,214.904 L103.492,218.358 Z" />
              <g
                style="transform: translate(58px, 36px) scale(1.6)"
              >
                <image
                  style="transform: translate(4px, 2px) scale(1.2);"
                  href={new URL(`@/assets/district-level/text-box-3.png`, import.meta.url).href}
                />
                <text
                  style={`
                    transform: translate(20px, 29px);
                    fill: #BD3E0D;
                    text-shadow: rgb(3 19 43 / 15%) 2px 0px 4px;
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                  `}
                >安塘村</text>
              </g>
            </g>
            <g v-show={mapType === '3D'}>
              {
                state.pointData.map((item) => {
                  return (
                    <g style={`transform: translate(${item.x}px, ${item.y}px);pointer-events: auto;`}>
                      {
                        import.meta.env.DEV &&
                        <foreignObject x="60" y="-18" width="50" height="20">
                          <input
                            type="text"
                            v-model={item.name}
                            onChange={(e) => {
                              navigator.clipboard.writeText(JSON.stringify(state.pointData))
                            }}
                          />
                        </foreignObject>
                      }
                      <rect
                        x={50}
                        y={0}
                        height="18"
                        fill="#020201a6"
                        width={25 + item.name.length * 13.5}
                      />
                      <image
                        height="18"
                        width="18"
                        style={`transform: translate(37px, -4px) scale(1.35)`}
                        href={new URL(`@/assets/district-level/sj.png`, import.meta.url).href}
                      />
                      <text
                        style={`
                          fill: #ffffff;
                          text-shadow: rgb(3 19 43 / 15%) 2px 0px 4px;
                          font-size: 14px;
                          font-family: Microsoft YaHei;
                          font-weight: 400;
                          transform: translate(65px, 14px);
                        `}
                      >{item.name}</text>
                    </g>
                  )
                })
              }
            </g>
            {
              (isInfoBox || mapType === 'GIS') && (
                <g
                  // v-click-outside={() => {
                  //   setState({ isInfoBox: false })
                  // }}
                  style="transform: translate(540px, 690px) scale(0.6)"
                >
                  <image
                    style="pointer-events: none;"
                    href={new URL(`@/assets/district-level/frame-1.png`, import.meta.url).href}
                  />
                  <image
                    style="pointer-events: none;transform: translate(134px, 4px)"
                    href={new URL(`@/assets/district-level/camera.png`, import.meta.url).href}
                  />
                  <image
                    style="transform: translate(195px, -9px);"
                    href={new URL(`@/assets/district-level/frame-2.png`, import.meta.url).href}
                  />
                  <image
                    style="transform: translate(256px, 107px);"
                    href={new URL(`@/assets/district-level/pic-5.png`, import.meta.url).href}
                  />
                  <text
                    style={`
                      transform: translate(237px, 39px);
                      font-size: 24px;
                      font-family: "Microsoft YaHei";
                      font-weight: bold;
                      fill: #fff;
                      text-shadow: rgb(3 19 43 / 15%) 2px 0px 4px;
                    `}
                  >安塘村监控视频</text>
                </g>
              )
            }
          </svg>
        </div>
      )
    }
  }
})
