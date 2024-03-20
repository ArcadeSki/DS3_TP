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
        //is green square on green mat?
        if( (obj2[0].getAttribute('position').x === obj2[1].getAttribute('position').x) &&
            (obj2[0].getAttribute('position').y === obj2[1].getAttribute('position').y) &&
            (obj2[0].getAttribute('position').z === obj2[1].getAttribute('position').z))
            {
                //is green square on green mat?
                if( (obj3[0].getAttribute('position').x === obj3[1].getAttribute('position').x) &&
                    (obj3[0].getAttribute('position').y === obj3[1].getAttribute('position').y) &&
                    (obj3[0].getAttribute('position').z === obj3[1].getAttribute('position').z))
                    {
                        console.log('quebec set is looking good');
                    }
                else{
                    console.log('WRONG');
                }
            }
        else{
                console.log('WRONG');
            }
    }
    else{
        console.log('WRONG');
    }
}