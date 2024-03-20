'use strict';

function check_quebec(){

    //these can be changed for each room
    let obj1 = document.querySelectorAll('.box'); //green
    let obj2 = document.querySelectorAll('.cube'); //red
    let obj3 = document.querySelectorAll('.de'); //blue

    console.log('objs: ', obj1[0].getAttribute('position').x, obj1[1].getAttribute('position').x);
    console.log('objs: ', obj1[0].getAttribute('position').y, obj1[1].getAttribute('position').y);
    console.log('objs: ', obj1[0].getAttribute('position').z, obj1[1].getAttribute('position').z);

    //is green square on green mat?
    if( (obj1[0].getAttribute('position').x === obj1[1].getAttribute('position').x) &&
        (obj1[0].getAttribute('position').y === obj1[1].getAttribute('position').y) &&
        (obj1[0].getAttribute('position').z === obj1[1].getAttribute('position').z))
    {
        console.log('its box time');
    }
}