'use strict';

function spawnLab(position){
    let complete = document.createElement('a-entity');

    complete.setAttribute('position', position);
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

    /*
    console.log('obj1: ', (obj1[0].getAttribute('position').x).toFixed(2), (obj1[1].getAttribute('position').x).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').y).toFixed(2), (obj1[1].getAttribute('position').y).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').z).toFixed(2), (obj1[1].getAttribute('position').z).toFixed(2));

    console.log('obj2: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj2[1].getAttribute('position').x).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj2[1].getAttribute('position').y).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj2[1].getAttribute('position').z).toFixed(2));
    
    console.log('obj3: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj3[1].getAttribute('position').x).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj3[1].getAttribute('position').y).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj3[1].getAttribute('position').z).toFixed(2));*/

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

                    //give user access to the next levels
                    spawnQB('-4.8 1.5 3');
                    spawnON('-3.5 1.5 3');

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
}//endLab

function check_quebec(){

    //these can be changed for each room
    let obj1 = document.querySelectorAll('.Artefact-Headphones'); //green
    let obj2 = document.querySelectorAll('.Artefact-Mailbox'); //red
    let obj3 = document.querySelectorAll('.Artefact-Jacket'); //red
    let obj4 = document.querySelectorAll('.Artefact-Repeater'); //red

    /*
    console.log('obj1: ', (obj1[0].getAttribute('position').x).toFixed(2), (obj1[1].getAttribute('position').x).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').y).toFixed(2), (obj1[1].getAttribute('position').y).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').z).toFixed(2), (obj1[1].getAttribute('position').z).toFixed(2));

    console.log('obj2: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj2[1].getAttribute('position').x).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj2[1].getAttribute('position').y).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj2[1].getAttribute('position').z).toFixed(2));
    
    console.log('obj3: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj3[1].getAttribute('position').x).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj3[1].getAttribute('position').y).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj3[1].getAttribute('position').z).toFixed(2));
    
    console.log('obj4: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj4[1].getAttribute('position').x).toFixed(2));
    console.log('obj4: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj4[1].getAttribute('position').y).toFixed(2));
    console.log('obj4: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj4[1].getAttribute('position').z).toFixed(2));*/

    //is artefact on correct ma
    if( ((obj1[0].getAttribute('position').x).toFixed(2) === (obj1[1].getAttribute('position').x).toFixed(2)) &&
        ((obj1[0].getAttribute('position').y).toFixed(2) === (obj1[1].getAttribute('position').y).toFixed(2)) &&
        ((obj1[0].getAttribute('position').z).toFixed(2) === (obj1[1].getAttribute('position').z).toFixed(2)))
    {
        if( ((obj2[0].getAttribute('position').x).toFixed(2) === (obj2[1].getAttribute('position').x).toFixed(2)) &&
            ((obj2[0].getAttribute('position').y).toFixed(2) === (obj2[1].getAttribute('position').y).toFixed(2)) &&
            ((obj2[0].getAttribute('position').z).toFixed(2) === (obj2[1].getAttribute('position').z).toFixed(2)))
        {
            if( ((obj3[0].getAttribute('position').x).toFixed(2) === (obj3[1].getAttribute('position').x).toFixed(2)) &&
                ((obj3[0].getAttribute('position').y).toFixed(2) === (obj3[1].getAttribute('position').y).toFixed(2)) &&
                ((obj3[0].getAttribute('position').z).toFixed(2) === (obj3[1].getAttribute('position').z).toFixed(2)))
            {
                if( ((obj4[0].getAttribute('position').x).toFixed(2) === (obj4[1].getAttribute('position').x).toFixed(2)) &&
                    ((obj4[0].getAttribute('position').y).toFixed(2) === (obj4[1].getAttribute('position').y).toFixed(2)) &&
                    ((obj4[0].getAttribute('position').z).toFixed(2) === (obj4[1].getAttribute('position').z).toFixed(2)))
                {
                    console.log('Quebec set is looking good');
                    spawnLab('-4.3 1 3.5');

                    //change "complete-light" colour
                    document.querySelector('#complete-light').setAttribute("light","color: #2bff2b;");
                    document.querySelector('#complete-light').setAttribute("light","decay: -1;");
                }
                else{
                    console.log('WRONG');
                    document.querySelector('a-scene').setAttribute('background','color:red;');
                    document.querySelector('#complete-light').setAttribute("light","color: #ff2b2b;");
                }
            }
            else{
                console.log('WRONG');
                document.querySelector('a-scene').setAttribute('background','color:red;');
                document.querySelector('#complete-light').setAttribute("light","color: #ff2b2b;");
            }
        }
        else{
            console.log('WRONG');
            document.querySelector('a-scene').setAttribute('background','color:red;');
            document.querySelector('#complete-light').setAttribute("light","color: #ff2b2b;");
        }
    }
    else{
        console.log('WRONG');
        document.querySelector('a-scene').setAttribute('background','color:red;');
        document.querySelector('#complete-light').setAttribute("light","color: #ff2b2b;");
    }
}//end QB

function check_ontario(){

    //Ontario Artefacts
    let obj1 = document.querySelectorAll('.Artefact-Pyrodene');
    let obj2 = document.querySelectorAll('.Artefact-Chemblender');
    let obj3 = document.querySelectorAll('.Artefact-Flamethrower');

    /*
    console.log('obj1: ', (obj1[0].getAttribute('position').x).toFixed(2), (obj1[1].getAttribute('position').x).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').y).toFixed(2), (obj1[1].getAttribute('position').y).toFixed(2));
    console.log('obj1: ', (obj1[0].getAttribute('position').z).toFixed(2), (obj1[1].getAttribute('position').z).toFixed(2));

    console.log('obj2: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj2[1].getAttribute('position').x).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj2[1].getAttribute('position').y).toFixed(2));
    console.log('obj2: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj2[1].getAttribute('position').z).toFixed(2));
    
    console.log('obj3: ', (obj2[0].getAttribute('position').x).toFixed(2), (obj3[1].getAttribute('position').x).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').y).toFixed(2), (obj3[1].getAttribute('position').y).toFixed(2));
    console.log('obj3: ', (obj2[0].getAttribute('position').z).toFixed(2), (obj3[1].getAttribute('position').z).toFixed(2));*/

    //is artefact on correct mat?
    if( ((obj1[0].getAttribute('position').x).toFixed(2) === (obj1[1].getAttribute('position').x).toFixed(2)) &&
        ((obj1[0].getAttribute('position').y).toFixed(2) === (obj1[1].getAttribute('position').y).toFixed(2)) &&
        ((obj1[0].getAttribute('position').z).toFixed(2) === (obj1[1].getAttribute('position').z).toFixed(2)))
    {
        if( ((obj2[0].getAttribute('position').x).toFixed(2) === (obj2[1].getAttribute('position').x).toFixed(2)) &&
            ((obj2[0].getAttribute('position').y).toFixed(2) === (obj2[1].getAttribute('position').y).toFixed(2)) &&
            ((obj2[0].getAttribute('position').z).toFixed(2) === (obj2[1].getAttribute('position').z).toFixed(2)))
        {
            if( ((obj3[0].getAttribute('position').x).toFixed(2) === (obj3[1].getAttribute('position').x).toFixed(2)) &&
                ((obj3[0].getAttribute('position').y).toFixed(2) === (obj3[1].getAttribute('position').y).toFixed(2)) &&
                ((obj3[0].getAttribute('position').z).toFixed(2) === (obj3[1].getAttribute('position').z).toFixed(2)))
            {
                if( ((obj4[0].getAttribute('position').x).toFixed(2) === (obj4[1].getAttribute('position').x).toFixed(2)) &&
                    ((obj4[0].getAttribute('position').y).toFixed(2) === (obj4[1].getAttribute('position').y).toFixed(2)) &&
                    ((obj4[0].getAttribute('position').z).toFixed(2) === (obj4[1].getAttribute('position').z).toFixed(2)))
                {
                    console.log('Ontario set is looking good');
                    spawnLab('-4.3 1 3.5');

                    //change "complete-light" colour
                    document.querySelector('#complete-light').setAttribute("light","color: #2bff2b;");
                    document.querySelector('#complete-light').setAttribute("light","decay: -1;");
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
    else{
        console.log('WRONG');
        document.querySelector('a-scene').setAttribute('background','color:red;');
    }
}//end ON