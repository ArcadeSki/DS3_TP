'use strict';

function spawnLab(position){
    let complete = document.createElement('a-entity');

    complete.setAttribute('position',position);
    complete.setAttribute('rotation','0 0 0');
    complete.setAttribute('id','portal');
    complete.setAttribute('circles-portal','title_text:Lab; link_url:/w/BasicStart');

    document.querySelector('a-scene').appendChild(complete);
}

function spawnON(position){
    let complete = document.createElement('a-entity');

    complete.setAttribute('position', position);
    complete.setAttribute('rotation','0 90 0');
    complete.setAttribute('id','portal');
    complete.setAttribute('circles-portal','title_text:Ontario; link_url:/w/Ontario');

    document.querySelector('a-scene').appendChild(complete);
}

function spawnQB(position){
    let complete = document.createElement('a-entity');

    complete.setAttribute('position', position);
    complete.setAttribute('rotation','0 90 0');
    complete.setAttribute('id','portal');
    complete.setAttribute('circles-portal','title_text:Quebec; link_url:/w/WIT_1_Kitchen');

    document.querySelector('a-scene').appendChild(complete);
}

function check_ingenium(){
    //these can be changed for each room
    let obj1 = document.querySelectorAll('.cube'); //green
    let obj2 = document.querySelectorAll('.box'); //red
    let obj3 = document.querySelectorAll('.de'); //red

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
            {
                //is green square on green mat?
                if( (obj3[0].getAttribute('position').x === obj3[1].getAttribute('position').x) &&
                    (obj3[0].getAttribute('position').y === obj3[1].getAttribute('position').y) &&
                    (obj3[0].getAttribute('position').z === obj3[1].getAttribute('position').z))
                {
                    console.log('Ingenium set is looking good');

                    spawnQB();
                    document.querySelector('a-scene').setAttribute('background','color:green;');

                }
                else{
                    console.log('WRONG');
                    document.querySelector('a-scene').setAttribute('background','color:red;');
                }   
            }
        else{
                console.log('WRONG');
                document.querySelector('a-scene').setAttribute('background','color:red;');
        }
    }
    else{
        console.log('WRONG');
        document.querySelector('a-scene').setAttribute('background','color:red;');
    }
}

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
        {
            console.log('Quebec set is looking good');k
            spawnLab();
        }
        else{
                console.log('WRONG');
                document.querySelector('a-scene').setAttribute('background','color:red;');
        }
    }
    else{
        console.log('WRONG');
        document.querySelector('a-scene').setAttribute('background','color:red;');
    }
}