import { AnimationMixer } from 'http://mattcarey.com/SnailEngine/engine/src/component/3d/model/animationMixer.js';

class BeeAnimationMixer extends AnimationMixer {
    _onMixerReady() {
        super._onMixerReady();
        const actionToPlay = this.actions['hover'];
        if(actionToPlay != null) {
            actionToPlay.play();
        }
    }
}

export { BeeAnimationMixer };
