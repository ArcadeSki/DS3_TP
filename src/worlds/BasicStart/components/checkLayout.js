'use strict';

function check_quebec(){

    //these can be changed for each room
    let obj1 = document.querySelectorAll('.Artefact-Headphones'); //green
    let obj2 = document.querySelectorAll('.Artefact-Mailbox'); //red

    console.log('obj1: ', (obj1[0].getAttribute('position').x).toFixed(2), (obj1[1].getAttribute('position').x).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').y).toFixed(2), (obj1[1].getAttribute('position').y).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').z).toFixed(2), (obj1[1].getAttribute('position').z).toFixed(2));

    console.log('obj2: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj2[1].getAttribute('position').x).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj2[1].getAttribute('position').y).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj2[1].getAttribute('position').z).toFixed(2));

    //is green square on green mat?
    if( ((obj1[0].getAttribute('position').x).toFixed(2) === (obj1[1].getAttribute('position').x).toFixed(2)) &&
        ((obj1[0].getAttribute('position').y).toFixed(2) === (obj1[1].getAttribute('position').y).toFixed(2)) &&
        ((obj1[0].getAttribute('position').z).toFixed(2) === (obj1[1].getAttribute('position').z).toFixed(2)))
    {
        //is green square on green mat?
        if( ((obj2[0].getAttribute('position').x).toFixed(2) === (obj2[1].getAttribute('position').x).toFixed(2)) &&
            ((obj2[0].getAttribute('position').y).toFixed(2) === (obj2[1].getAttribute('position').y).toFixed(2)) &&
            ((obj2[0].getAttribute('position').z).toFixed(2) === (obj2[1].getAttribute('position').z).toFixed(2)))
            {/*
                //is green square on green mat?
                if( (obj3[0].getAttribute('position').x === obj3[1].getAttribute('position').x) &&
                    (obj3[0].getAttribute('position').y === obj3[1].getAttribute('position').y) &&
                    (obj3[0].getAttribute('position').z === obj3[1].getAttribute('position').z))
                    {
                        
                    }
                else{
                    console.log('WRONG');
                }*/
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