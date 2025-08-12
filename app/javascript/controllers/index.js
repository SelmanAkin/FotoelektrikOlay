import { Application } from "@hotwired/stimulus"
import AnimationController from "./animation_controller"

const application = Application.start()
application.register("animation", AnimationController)
