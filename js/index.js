import Audios from './sounds.js'
import Events from './events.js'
import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,

} from './elements.js'

const sound = Audios()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({ timer, sound })


