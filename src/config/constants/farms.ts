import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    // FIXME:
    pid: 0,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'DINO',
    lpAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d', 56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
       // DINO
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d', 56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
    },
    quoteTokenSymbol: QuoteToken.DINO,
    quoteTokenAdresses: contracts.dino,
  },
  {
    // FIXME:
    pid: 1,
    risk: 2,
    lpSymbol: 'DINO-BUSD',
    lpAddresses: {
      97: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99', 56: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99',
      
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d', 56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
      
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 2,
    risk: 2,
    lpSymbol: 'DINO-BNB',
    lpAddresses: {
      97: '0xE6BDEa4578329b908461EB76A6705fa18b22a1C6', 56: '0xE6BDEa4578329b908461EB76A6705fa18b22a1C6', // FIXME:
      
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d', 56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
      
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 5,
    risk: 1,
    lpSymbol: 'SIL-BNB',
    lpAddresses: {
      97: '0x51509ef5ed3fa020b6011ab10e0383e089fd4823', 56: '0x51509ef5ed3fa020b6011ab10e0383e089fd4823', // FIXME:
      
    },
    tokenSymbol: 'SIL',
    tokenAddresses: {
      97: '0xc66e4de0d9b4f3cb3f271c37991fe62f154471eb', 56: '0xc66e4de0d9b4f3cb3f271c37991fe62f154471eb', // FIXME:
       // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 6,
    risk: 1,
    lpSymbol: 'BSCPAD-BNB',
    lpAddresses: {
      97: '0x1e47da535d9e96e2f9348d00c18fbe967566bc28', 56: '0x1e47da535d9e96e2f9348d00c18fbe967566bc28', // FIXME:
      
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', 56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', // FIXME:
       // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 4,
    risk: 1,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', 56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // FIXME:
      
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', 56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // FIXME:
       // https://bscscan.com/address/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 3,
    risk: 1,
    lpSymbol: 'CAKE-BNB',
    lpAddresses: {
      97: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', 56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // FIXME:
       // https://bscscan.com/address/0x99d865Ed50D2C32c1493896810FA386c1Ce81D91
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // FIXME:
       // https://bscscan.com/address/0x2170ed0880ac9a755fd29b2688956bd959f933f8
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT-BUSD',
    lpAddresses: {
      97: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd', 56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd', // FIXME:
       // https://bscscan.com/address/0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955', 56: '0x55d398326f99059ff775485246999027b3197955', // FIXME:
       // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // { // FIXME:
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'CAKE-BNB',
  //   lpAddresses: {
  //     97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', 56: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // https://bscscan.com/address/0xa527a61703d82139f8a06bc30097cc9caa2df5a6
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '0x89dcddca577f3658a451775d58ea99da532263c8', 56: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  {
    // FIXME:
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', 56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', 56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // FIXME:
       // https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // FIXME:
       // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
       // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',

    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    // FIXME:
    pid: 11,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'SIL',
    lpAddresses: {
      97: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB', 56: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB',

    },
    tokenSymbol: 'SIL',
    tokenAddresses: {
      97: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB', 56: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB',

    },
    quoteTokenSymbol: QuoteToken.SIL,
    quoteTokenAdresses: contracts.sil,
  },
  {
    // FIXME:
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BSCPAD',
    lpAddresses: {
      97: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', 56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
       // DAI-BUSD LP
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', 56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',

    },
    quoteTokenSymbol: QuoteToken.BSCPAD,
    quoteTokenAdresses: contracts.bscpad,
  },
  // { // FIXME:
  //     pid: 12,
  //     risk: 1,
  //     isTokenOnly: true,
  //     lpSymbol: 'USDT',
  //     lpAddresses: {
  //         97: '',
  //         56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //     },
  //     tokenSymbol: 'USDT',
  //     tokenAddresses: {
  //         97: '',
  //         56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //     },
  //     quoteTokenSymbol: QuoteToken.BUSD,
  //     quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
