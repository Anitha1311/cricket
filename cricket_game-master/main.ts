import { Batsman } from './batsman';

import { Scorer } from './scorer';
import { datatype } from './datatype';



let obj: Array<datatype> =  [{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'Run Out',
    "dismissalInfo": {
        "fielderName": "Root",
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "Rahul",
    "bowlerName": "Anderson"
},
{
    "runScored": 5,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":2
    },
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 3,
    "isOut": false,
    "batsmanName": "kohli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 2,
    "isOut": false,
    "batsmanName": "kohli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 2,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "kohli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 3,
    "isOut": true,
    "dismissalType": 'catch',
    "batsmanName": "sehwag",
    "bowlerName": "Morkel   "
},
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Morkel   "
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Morkel   "
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Morkel   "
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Morkel   "
}
,
{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Morkel   "
},
{
    "runScored": 0,
    "isOut": false,
    "dismissalType": 'catch',
    "dismissalInfo": {
        "fielderName": "Root",
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "Dhinesh",
    "bowlerName":"shanewarn"
},
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "Dhinesh",
    "bowlerName":"shanewarn"
}
,
{
    "runScored": 4,
    "isOut": false,
    
    "batsmanName": "Rohit",
    "bowlerName":"shanewarn"
    
}
,
{
    "runScored": 1,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "Rohit",
    "bowlerName":"shanewarn"
}
,
{
    "runScored": 4,
    "isOut": false,
    "batsmanName": "Dhinesh",
    "bowlerName": "shanewarn"
}
,
{
    "runScored": 4,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":1
    },
    "batsmanName": "MSDhoni",
    "bowlerName": "shanewarn"
},



];

const scorer = new Scorer();
scorer.calculateScore(obj);
