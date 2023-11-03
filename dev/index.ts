import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  // const x = await deployContract<X>('X');
  const x = await getContract<X>('X', '0xAd7aE10f8E77dae834D10CEd0986d7AE3122a763');
  watchContract(x);

  const tx = await x.requestRandom();
  console.log(tx.hash);
  const tr = await tx.wait();
  console.log(tr?.hash);

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
