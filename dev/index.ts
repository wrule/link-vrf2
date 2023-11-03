import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0x49Cb3DdD9B9acFF4283625366700efF27c47D01f');
  // const x = await deployContract<X>('X');
  watchContract(x);

  const tx = await x.requestRandom();
  console.log('hash:', tx.hash);
  const tr = await tx.wait();
  console.log('hash:', tr?.hash);

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
