import GW2Api from '../src/GW2Api';
const gw2 =  new GW2Api('F1C1F53E-FD03-E248-AF53-0A79A6CC75969671D389-D3F3-41F6-BE4D-5C7918CA67E9');

gw2.tokenInfo().then(token => console.log(token, 'xox')).catch(e => console.log(e));
