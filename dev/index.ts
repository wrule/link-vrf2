import { X } from '../typechain-types';
import { deployContract, getContract, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  // const x = await getContract<X>('X', '0x92ED2444ECbbe92F120dafA0965078D7aeDb18E7');
  const x = await deployContract<X>('X');
}

async function dev() {
  await init();
  main();
}

dev();
