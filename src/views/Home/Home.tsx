import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout, Text } from '@saltswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import { TimelineMax, Power4 } from 'gsap'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import { getBalanceNumber } from '../../utils/formatBalance'
import { useTotalValue, useFarms } from '../../state/hooks'
import { useTotalSupply, useBurnedBalance } from '../../hooks/useTokenBalance'
import { getCakeAddress } from '../../utils/addressHelpers'
import './Home.css'
import CardValue from './components/CardValue'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/salt-stars-bg-2.svg'), url('/images/salt-stars-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  let dinoPerBlock = 0
  if (farms && farms[0] && farms[0].dinoPerBlock) {
    dinoPerBlock = new BigNumber(farms[0].dinoPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  useEffect(() => {
    const tl = new TimelineMax()
    // const tl = gsap.timeline();
    // try {
    //   if (window.innerWidth >= 750) {
    //     tl.to('.dinosaurImg', {
    //       x: '-25%',
    //       opacity: 1,
    //       duration: 0.5,
    //       ease: Power4.easeInOut,
    //     })
    //   } else {
    //     tl.to('.dinosaurImg', {
    //       opacity: 1,
    //       x: '-25%',
    //     })
    //   }
    // } catch (e) {
    // console.log()
    // }
  })

  return (
    <Page>
      <Hero>
        <Heading
          as="h1"
          size="xl"
          mb="24px"
          color="secondary"
          style={{
            fontFamily: 'JurassicPark',
            fontSize: '6em',
            color: 'yellow',
            letterSpacing: '3px',
            marginBottom: '0',
            lineHeight: '0.7',
          }}
        >
          {/* {TranslateString(10004, 'SaltSwap Farms Are Opened')} */}
          JurassicFarms Are Opened
        </Heading>
        {/* <Text>{TranslateString(578, 'The saltiest AMM and yield farm on Binance Smart Chain.')}</Text> */}
        <Text>
          <span
            style={{
              fontFamily: 'Trade Winds',
              fontSize: '0.8em',
              color: '#e8e1a3',
            }}
          >
            The true #1 GOOSE fork on BSC, Jurassic Farm FEEDS ON the competition
          </span>
        </Text>
      </Hero>
      <div className="dinoContainer">
        <section className="dinosaur">
          <img
            className="dinosaurImg"
            src="/images/d1.png"
            style={{
              maxWidth: `calc(${550 - (totalValue.toNumber() % 100)}px + 25vw)`,
              width: `calc(${550 - (totalValue.toNumber() % 100)}px + 25vw)`,
            }}
            alt="Dinosaur"
          />
          <div className="border" />
        </section>
        <section className="dinosaur-info">
          <div>
            <p>
              <span
                style={{
                  fontFamily: 'Potta One',
                }}
              >
                Total DINO Supply:{' '}
              </span>
              {cakeSupply && <CardValue value={cakeSupply} decimals={0} />}
            </p>
            <p>
              <span
                style={{
                  fontFamily: 'Potta One',
                }}
              >
                Total DINO Burned:{' '}
              </span>
              <CardValue value={getBalanceNumber(burnedBalance)} decimals={0} />
            </p>
            <p>
              <span
                style={{
                  fontFamily: 'Potta One',
                }}
              >
                New DINO per block:{' '}
              </span>
              <span>{dinoPerBlock}</span>
            </p>
          </div>
        </section>
      </div>
      {/* <div> */}
      {/* <Cards> */}
      {/* <FarmStakingCard /> */}
      {/* <TwitterCard /> */}
      {/* <div> */}
      {/*  <img src={Dinosaur} alt="Dinosaur" /> */}
      {/* </div> */}
      {/* <CakeStats /> */}
      {/* <TotalValueLockedCard /> */}
      {/* </Cards> */}
      {/* </div> */}
    </Page>
  )
}

export default Home
