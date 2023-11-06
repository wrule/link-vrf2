import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0xae3308Fa2AA7C6eC84E41716aa70BcAc354D89f8');
  // const x = await deployContract<X>('X');
  watchContract(x);
  const tx = await x.requestRandomWords();
  console.log(tx.hash);
  const tr = await tx.wait();
  console.log(tr?.hash);
}

async function dev() {
  await init();
  main();
}

dev();
