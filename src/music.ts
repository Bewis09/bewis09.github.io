export class Music {

  url; audio;

  constructor(url: string) {
    this.url = url;
    this.audio = new Audio(this.url);

    this.audio.volume = 0.2

  }

  play() {
    this.audio.play();
  }

  setVolume(a: number) {
    this.audio.volume = a
  }

  pause() {
    this.audio.pause();
  }
}


export default Music