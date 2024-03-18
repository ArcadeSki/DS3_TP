'use strict';

AFRAME.registerComponent('check-Quebec', {
    schema: {

    },
    init:function(){
        let CONTEXT_AF = this;
        let mats = document.querySelectorAll('.mat');

        //these can be changed for each room
        let obj1 = document.querySelectorAll('.box');
        let obj2 = document.querySelectorAll('.cube');
        let obj3 = document.querySelectorAll('.3dSquare');

        //should return: 'class_name','class_name',undefined
        
        CONTEXT_AF.el.addEventListener('click', ()=>{
            console.log('1: ',obj1[0].getAttribute('class'),obj1[1].getAttribute('class'),obj1[2].getAttribute('class'));
            console.log('2: ',obj2[0].getAttribute('class'),obj2[1].getAttribute('class'),obj2[2].getAttribute('class'));
            console.log('3: ',obj3[0].getAttribute('class'),obj3[1].getAttribute('class'),obj3[2].getAttribute('class'));
        });
        

        //if obj1[0] class == obj1[1] class, then object is in the right spot.
        //if all objs are in the right spot, we have completed the room.
    }
});
function check_quebec(){
    let mats = document.querySelectorAll('.mat');

    //these can be changed for each room
    let obj1 = document.querySelectorAll('.box');
    let obj2 = document.querySelectorAll('.cube');
    let obj3 = document.querySelectorAll('.de');

    console.log("FUNCTION VERSION");
    console.log('1: ',obj1[0].getAttribute('class'),obj1[1].getAttribute('class'),obj1[2].getAttribute('class'));
    console.log('2: ',obj2[0].getAttribute('class'),obj2[1].getAttribute('class'),obj2[2].getAttribute('class'));
    console.log('3: ',obj3[0].getAttribute('class'),obj3[1].getAttribute('class'),obj3[2].getAttribute('class'));
}