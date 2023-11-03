import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  // const x = await deployContract<X>('X');
  const x = await getContract<X>('X', '0x9Ae18776A381c632799129E23aD533467F60b23F');

  x.on(x.getEvent('requestRandomEvent'), (requestId: string) => {
    console.log('requestId:', requestId);
  });

  x.on(x.getEvent('fulfillRandomnessEvent'), async (requestId: string, randomness: bigint) => {
    console.log('requestId:', requestId);
    console.log('randomness:', randomness);
    const randomnessSave = await x.randomMap(requestId);
    console.log('randomnessSave:', randomnessSave);
  });

  const tx = await x.requestRandom();
  console.log('TxHash:', tx.hash);
  const tr = await tx.wait();
  console.log('TxHash:', tr?.hash);

  // const tx = await x.sendMessage('你好，世界');
  // console.log(tx.hash);
  // const tr = await tx.wait();
  // console.log(tr?.hash);
}

async function dev() {
  await init();
  main();
}

dev();
