<template>
  <div>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="videouno"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied">
    </video-player>
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="videodos"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied">
    </video-player>
  </div>
</template>
<style lang="stylus" scoped>
</style>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/cf4aca19b74c35d176679c6f7b1b13e7/manifest/video.m3u8'
          },
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/80619fcb64f0f1ef8e6de9465c5d2d28/manifest/video.m3u8'
          }
        ],
        hls: true,
        poster: 'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg',
        width: document.documentElement.clientWidth, // Player width
        notSupportedMessage: 'This video cannot be played for the time being. Please try again later.',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true
          /* playToggle: true,
          captionsButton: true,
          chaptersButton: true,
          subtitlesButton: false,
          progressControl: {
            seekBar: true
          },
          playbackRateMenuButton: true */
        }
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
    this.$refs.videoPlayer.player.controlBar.progressControl.disable()
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      // this.player.src(url);
      // change src
      // this.playerOptions.sources[1].src = 'https://videodelivery.net/d877d4217c7a0683c35ac12fc5aa8d94/manifest/video.m3u8';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 5000)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
  // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
    // you can use it to do something...
    // player.[methods]
    },

    onPlayerWaiting (player) {
      console.log('player Waiting!', player)
    },

    onPlayerEnded (player) {
      console.log('player ended!', player)
    }

  }
}
</script>
