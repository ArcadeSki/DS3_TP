'use strict';

AFRAME.registerComponent('grnd-placeable', {
    schema: {

    },
    init:function(){
        const CONTEXT_AF = this;

        if (CONTEXT_AF.el.hasAttribute('circles-pickup-object') === false) {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {});
        }

        play = CIRCLES.getAvatarElement();

        if(play.object3D.position < 1000)
        {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition:'0 0.1 0', dropRotation:'0 0.1 0'});
        }
        
    }
});