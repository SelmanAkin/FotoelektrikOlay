import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["light", "colorPicker"]
  timeouts = []
  started = false

  startAnimation() {
    if (!this.started) {
      this.started = true
      this.triggerLight()
    }
  }

  stopAnimation() {
    this.lightTarget.style.opacity = "0"
    this.timeouts.forEach(timeout => clearTimeout(timeout))
    this.timeouts = []
    const balls = document.querySelectorAll(".ball")
    balls.forEach(ball => ball.remove())
    this.started = false
  }

  triggerLight() {
    const light = this.lightTarget
    light.style.opacity = "1"
  }

  updateLightColor() {
    this.startAnimation()

    const wavelength = parseInt(this.colorPickerTarget.value)
    let hue = 0
    let baseSpeed = 3.0 
    let ballCount = 0
  
    
    if (wavelength >= 620) {
        // Kırmızı (620-750 nm)
        hue = 0
        baseSpeed = 3.0
        ballCount = 0
    } else if (wavelength >= 590) {
        // Turuncu (590-619 nm)
        hue = 30
        baseSpeed = 2.5
        ballCount = 0
    } else if (wavelength >= 570) {
        // Sarı (570-589 nm)
        hue = 60
        baseSpeed = 2.0
        ballCount = 0
    } else if (wavelength >= 495) {
        // Yeşil (495-569 nm)
        hue = 120
        baseSpeed = 1.5
        ballCount = 0
    } else if (wavelength >= 450) {
        // Mavi (450-494 nm)
        hue = 240
        baseSpeed = 1.2
        ballCount = 8
    } else {
        // Mor (380-449 nm)
        hue = 270
        baseSpeed = 1.0 
        ballCount = 12
    }
  
  
    this.lightTarget.style.background = `radial-gradient(circle, 
        hsl(${hue}, 100%, 70%), 
        hsl(${hue}, 100%, 50%), 
        hsla(${hue}, 100%, 30%, 0))`
  
    this.createRandomBalls(ballCount, baseSpeed)
}

createRandomBalls(count, baseSpeed = 2.5) {
    const scene = document.querySelector(".scene")
  
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 10
      const timeout = setTimeout(() => {
        const ball = document.createElement("div")
        ball.classList.add("ball")
  
        const startY = Math.random() * 300 + 280
        const speed = baseSpeed + Math.random() * 0.5 
  
        ball.style.position = "absolute"
        ball.style.opacity = "1"
        ball.style.right = "300px"
        ball.style.top = `${startY}px`
  
        scene.appendChild(ball)
  
        setTimeout(() => {
          ball.style.transition = `transform ${speed}s ease-in-out, opacity 0.5s ease-in-out`
          ball.style.transform = "translateX(-600px)"
        }, 50)
  
        const removeTimeout = setTimeout(() => {
          ball.style.opacity = "0"
          setTimeout(() => ball.remove(), 500)
        }, speed * 1000 + 500)
  
        this.timeouts.push(removeTimeout)
      }, delay)
  
      this.timeouts.push(timeout)
    }
  }
  
}
