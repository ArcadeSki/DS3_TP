'use strict';

AFRAME.registerComponent('grnd-placeable', {
    schema: {
        initialPos:{type:'array'}
    },
    init:function(){
        const CONTEXT_AF = this;
        let playerPos = CIRCLES.getAvatarRigElement().object3D.position;
        //these are our teleport points where you can place objects
        let greens = document.querySelectorAll('.tp');
        let mats = document.querySelectorAll('.mat');
        let matsPos;
    
        for( let i=0; i<mats.length; i++ )
            {
                matsPos += mats[i].getAttribute('position');
                //console.log(mats[i].getAttribute('position'));
            }
        
        //loops to set the inital position of our tp points
        for( let i=0; i<greens.length; i++ )
        {
            CONTEXT_AF.data.initialPos += greens[i].getAttribute('position');
            //console.log(greens[i].getAttribute('position'));
        }

        if (CONTEXT_AF.el.hasAttribute('circles-pickup-object') === false) {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {});
        }

        CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropRotation:'0 0.1 0'});
        
        //tick function was having issues getting variables
        setInterval( () => {
            playerPos = CIRCLES.getAvatarRigElement().object3D.position;
            //console.log('player: ', playerPos.x, '|| tp: ', greens[0].object3D.position.x);
            if( (playerPos.x === greens[0].object3D.position.x) &&
                (playerPos.z === greens[0].object3D.position.z))
                { CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition:'-6 1.3 -3'}); }
            else{ CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: CONTEXT_AF.data.initialPos}); }
            
        }, 10);
    }
});