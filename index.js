Vue.createApp({
  data: () => ({
    intervals: [0.2, 0.5, 1, 2],
    numberRank: 2,
    interval: 0.2,
    number: 0,
    inputValue: '',
    isStarted: false,
    isEnded: false,
    isChecked: false,
    isRight: false
  }),
  methods: {
    setRank(index) {
      this.numberRank = index + 2
    },
    setInterval(index) {
      this.interval = this.intervals[index]
    },
    setRankPreview() {
      let b = ''
      for (let i = 0; i < this.numberRank; i++) {
        b += '?'
      }
      return b
    },
    checkNumber() {
      if (Number(this.inputValue) === this.number) {
        this.isChecked = true
        this.isRight = true
      } else {
        this.isChecked = true
      }
    },
    startRestartHandler() {
      if (!this.isEnded) {
        let randomNumber = 0
        for (; randomNumber.toString().length < this.numberRank; randomNumber = Math.floor(Math.random() * 10 ** this.numberRank)) { }

        this.number = randomNumber
        this.isStarted = true

        setTimeout(() => { this.isStarted = false, this.isEnded = true }, (this.interval * 1000))
      } else {
        console.log('haha')
        this.isChecked = false
        this.isRight = false
        this.inputValue = ''
        this.isStarted = false
        this.isEnded = false
        this.number = 0
      }
    },
  }
}).mount('#app')