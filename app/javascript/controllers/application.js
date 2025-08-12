import { Application } from "@hotwired/stimulus"
import AnimationController from "./animation_controller"

window.Stimulus = Application.start()
Stimulus.register("animation", AnimationController)
