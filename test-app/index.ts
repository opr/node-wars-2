import GW2Api from '../src/GW2Api';

const runProgram = async () => {
  const gw2 = new GW2Api('F1C1F53E-FD03-E248-AF53-0A79A6CC75969671D389-D3F3-41F6-BE4D-5C7918CA67E9');
  let account;
  await gw2.tokenInfo().then(token => console.log(token)).catch(e => console.log(e));
  await gw2.getAccount().then(_account => account = _account).catch(e => console.log(e));
  //gw2.getGuilds();
};

runProgram();
