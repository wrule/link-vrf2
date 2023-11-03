import { X } from '../typechain-types';
import { deployContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  watchContract(x);
  await x.sendMessage('你好，世界');
}

async function dev() {
  await init();
  main();
}

dev();
