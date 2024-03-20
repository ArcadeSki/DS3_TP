'use strict';

//WHEN PICKED UP, THE OBJECT WILL FOLLOW YOU. WHEN RELEASED, TI WILL EITHER GO BACK TO ITS INITAL POSITION OR TO THE TP'S CORRESPONDING PLACEMAT.
AFRAME.registerComponent('grnd-placeable', {
    schema: {
        initialPos:{type:'array'},
        tester:{type:'int', default:0}
    },
    init:function(){
        const CONTEXT_AF = this;
        let playerPos = CIRCLES.getAvatarRigElement().object3D.position;

        //these are our teleport points where you can place objects
        let greens = document.querySelectorAll('.tp');

        //mats (red, green, blue)
        let mats = document.querySelectorAll('.mat');
        
        CONTEXT_AF.data.initialPos = String(CONTEXT_AF.el.object3D.position.x) + ' ' + String(CONTEXT_AF.el.object3D.position.y) + ' ' + String(CONTEXT_AF.el.object3D.position.z);
        console.log("initial pos is: ", CONTEXT_AF.data.initialPos);

        if (CONTEXT_AF.el.hasAttribute('circles-pickup-object') === false) {
            CONTEXT_AF.el.setAttribute('circles-pickup-object', {});
        }

        //make sure object is flat when released
        CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropRotation:'0 0.1 0'});
        
        //tick:function was having issues getting variables
        setInterval( () => {
            playerPos = CIRCLES.getAvatarRigElement().object3D.position;

            //if user is on a teleport point, release sends the object to the corresponding position
            if( (playerPos.x === greens[0].object3D.position.x) &&
                (playerPos.z === greens[0].object3D.position.z))
                { CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: mats[0].object3D.position}); } //object goes on red mat

            else if((playerPos.x === greens[1].object3D.position.x) &&
                    (playerPos.z === greens[1].object3D.position.z))
            { CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: mats[1].object3D.position}); } //object goes on green mat

            else if((playerPos.x === greens[2].object3D.position.x) &&
                    (playerPos.z === greens[2].object3D.position.z))
            { CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: mats[2].object3D.position}); } //object goes on green mat

            //if user is not on a teleport point, release sends the object to its inital position
            else{ CONTEXT_AF.el.setAttribute('circles-pickup-object', {dropPosition: CONTEXT_AF.data.initialPos}); }
        }, 10);
    }
});