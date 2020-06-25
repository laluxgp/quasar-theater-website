<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'CÁMARA 1', value: 'camara-uno' },
          { label: 'CÁMARA 2', value: 'camara-dos' },
          { label: 'CÁMARA 3', value: 'camara-tres' },
          { label: 'CÁMARA 4', value: 'camara-cuatro' }
        ]"
      />
    </div>
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="camara-uno">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
          customEventName="camarauno"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied">
        </video-player>
      </q-carousel-slide>
      <q-carousel-slide name="camara-dos">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptionsDos"
          :playsinline="true"
          customEventName="camarados"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied">
        </video-player>
      </q-carousel-slide>
      <q-carousel-slide name="camara-tres">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptionsTres"
          :playsinline="true"
          customEventName="camaratres"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied">
        </video-player>
      </q-carousel-slide>
      <q-carousel-slide name="camara-cuatro">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptionsCuatro"
          :playsinline="true"
          customEventName="camaracuatro"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied">
        </video-player>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<style lang="scss" scoped>
.q-carousel{
  height: auto;
}
</style>>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      slide: 'camara-uno',
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: true,
        preload: 'auto',
        language: 'en',
        aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/d030fb826be3b9395b9c46bfcd3eabf8/manifest/video.m3u8'
          }
        ],
        hls: true,
        // poster: 'statics/images/theater-wallpaper.jpg',
        width: document.documentElement.clientWidth, // Player width
        // height: '360',
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
      },
      playerOptionsDos: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        language: 'en',
        // aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/ec6a3598060ce2fca1ff5f450a003c72/manifest/video.m3u8'
          }
        ],
        hls: false,
        poster: 'statics/images/theater-wallpaper.jpg',
        width: document.documentElement.clientWidth, // Player width
        height: '360',
        notSupportedMessage: 'This video cannot be played for the time being. Please try again later.'
      },
      playerOptionsTres: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        language: 'en',
        // aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/d877d4217c7a0683c35ac12fc5aa8d94/manifest/video.m3u8'
          }
        ],
        hls: false,
        poster: 'statics/images/theater-wallpaper.jpg',
        width: document.documentElement.clientWidth, // Player width
        height: '360',
        notSupportedMessage: 'This video cannot be played for the time being. Please try again later.'
      },
      playerOptionsCuatro: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        language: 'en',
        // aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src:
              'https://videodelivery.net/cf4aca19b74c35d176679c6f7b1b13e7/manifest/video.m3u8'
          }
        ],
        hls: false,
        poster: 'statics/images/theater-wallpaper.jpg',
        width: document.documentElement.clientWidth, // Player width
        height: '360',
        notSupportedMessage: 'This video cannot be played for the time being. Please try again later.'
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
    // this.$refs.videoPlayer.player.controlBar.progressControl.disable()
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
