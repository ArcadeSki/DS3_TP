'use strict';

AFRAME.registerComponent('grnd-placeable', {
    schema: {

    },
    init:function(){
        let greens = document.querySelectorAll('#tp');
        const CONTEXT_AF = this;
        let playerPos = CIRCLES.getAvatarRigElement().object3D.position;

        console.log('the player spawned at: ', playerPos);
        console.log(greens[0].object3D.position);

        if (CONTEXT_AF.el.hasAttribute('circles-pickup-object') === false) {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {});
        }

        CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropRotation:'0 0.1 0'});
        
    }
});