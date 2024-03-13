'use strict';

AFRAME.registerComponent('grnd-placeable', {
    schema: {
        initialPos:{type:'array'}
    },
    init:function(){
        let greens = document.querySelectorAll('#tp');
        for( let i=0; i<greens.length; i++ )
        {
            this.data.initialPos += greens[i].getAttribute('dropPosition');
            console.log(greens[i].getAttribute('dropPosition'));
        }
        const CONTEXT_AF = this;
        let playerPos = CIRCLES.getAvatarRigElement().object3D.position;

        if (CONTEXT_AF.el.hasAttribute('circles-pickup-object') === false) {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {});
        }

        CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropRotation:'0 0.1 0'});
        
        //tick function was having issues getting variables
        setInterval( () => {
            playerPos = CIRCLES.getAvatarRigElement().object3D.position;
            //console.log('player: ', playerPos.x, '|| tp: ', greens[0].object3D.position.x);
            console.log(playerPos.x === greens[0].object3D.position.x);
            if( (playerPos.x === greens[0].object3D.position.x) &&
                (playerPos.z === greens[0].object3D.position.z))
                { CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition:'-6 1.3 -3'}); }
            else{ CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: '0 0 0'}); }
            
        }, 10);
    }
});