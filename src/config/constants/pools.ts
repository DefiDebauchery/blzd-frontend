import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.blzd,
    earningToken: tokens.bnb,
    contractAddress: {
      97: '',
      56: '0x481055C4182B9A5e90d8E7EDe9f65b957dC0Ec22',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.002480',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.blzd,
    earningToken: tokens.bifi,
    contractAddress: {
      97: '',
      56: '0x95b3389f41dbf513De5710A68220efF5a42dB068',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00009920',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.blzd,
    earningToken: tokens.btc,
    contractAddress: {
      97: '',
      56: '0xa918f270F3F9bC0032aF233876BA1EE43d4946e5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000049603',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.blzd,
    earningToken: tokens.eth,
    contractAddress: {
      97: '',
      56: '0x6F7CAFCD187d9cAbfa5A0139c7cC28c03BF7633b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000248',
    sortOrder: 999,
    isFinished: false,
  },
]

export default pools
