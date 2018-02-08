
const loads = {}

export default {
  name: 'MLoader',
  props: {
    src: String,
    script: Boolean,
    mount: String
  },
  data () {
    return {
      elem: null
    }
  },
  methods: {
    onload () {
      console.log(loads)
      loads[this.src].loaded = true
      loads[this.src].mount = window[this.mount]
      this.$emit('load', window[this.mount], loads[this.src])
    },
    onerror () {
      console.log('error')
    },
    insert () {
      console.log('insert')
      loads[this.src] = {
        loaded: false,
        script: this.script
      }
      this.elem = document.createElement(this.script ? 'SCRIPT' : 'LINK')
      if (this.script) {
        this.elem.src = this.src
        this.elem.type = 'text/javascript'
      } else {
        this.elem.href = this.src
        this.elem.type = 'text/css'
        this.elem.rel = 'stylesheet'
      }

      this.elem.id = Math.random().toString(16).substring(2)
      loads[this.src]['id'] = this.elem.id
      loads[this.src]['el'] = this.elem
      this.listener()
      document.head.appendChild(this.elem)
    },
    listener () {
      var el = loads[this.src].el
      el.addEventListener('load', this.onload, false)
      el.addEventListener('error', this.onerror, false)
    }
  },
  mounted () {
    console.log(this.src)
    this.insert()
  },
  render () {
    return null
  }
}
