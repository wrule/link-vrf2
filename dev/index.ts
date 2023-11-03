import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  // const x = await deployContract<X>('X');
  const x = await getContract<X>('X', '0x338BA1E5adf1F4a8c446197d720aAA2343F2F29e');
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
