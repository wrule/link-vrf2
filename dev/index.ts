import { X } from '../typechain-types';
import { deployContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  watchContract(x);
  const tx = await x.sendMessage('你好，世界');
  console.log(tx.hash);
  const tr = await tx.wait();
  console.log(tr?.hash);
}

async function dev() {
  await init();
  main();
}

dev();
