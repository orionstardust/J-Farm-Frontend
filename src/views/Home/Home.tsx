import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {Heading, BaseLayout, Text} from '@saltswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import { TimelineMax, Power4 } from "gsap";
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import {getBalanceNumber} from '../../utils/formatBalance'
import {useTotalValue, useFarms} from '../../state/hooks'
import {useTotalSupply, useBurnedBalance} from '../../hooks/useTokenBalance'
import {getCakeAddress} from '../../utils/addressHelpers'
import Dinosaur from "./images/d1.png"
import "./Home.css"
import CardValue from "./components/CardValue";

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

  ${({theme}) => theme.mediaQueries.lg} {
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

  ${({theme}) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({theme}) => theme.mediaQueries.lg} {
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

    let saltPerBlock = 0
    if (farms && farms[0] && farms[0].saltPerBlock) {
        saltPerBlock = new BigNumber(farms[0].saltPerBlock).div(new BigNumber(10).pow(18)).toNumber()
    }

    const dinosaurImg = useRef(null)
    const totalValueTxt = useRef(null)
    useEffect(()=> {
        const tl = new TimelineMax();
        // const tl = gsap.timeline();
        if(window.innerWidth >= 750){
            tl.to(dinosaurImg.current, {
                x: '-25%',
                opacity: 1,
                duration: 0.5,
                ease: Power4.easeInOut
            });
            tl.to(totalValueTxt.current, {
                x: 100 + window.innerWidth * 0.1,
                opacity: 1,
                duration: 0.5,
                textShadow: '#F8CE46 1px 1px 2px',
                ease: Power4.easeInOut
            }, '-=0.3');
        }
        else {
            tl.to(dinosaurImg.current, {
                opacity: 1,
                x: '-25%'
            });
            tl.set(totalValueTxt.current, {
                opacity: 1,
                x: 0,
                textShadow: '#F8CE46 1px 1px 2px',
            });
        }
    })

    return (
        <Page>
            <Hero>
                <Heading as="h1" size="xl" mb="24px" color="secondary">
                    {/* {TranslateString(10004, 'SaltSwap Farms Are Opened')} */}
                    JurassicFarms Are Opened
                </Heading>
                {/* <Text>{TranslateString(578, 'The saltiest AMM and yield farm on Binance Smart Chain.')}</Text> */}
                <Text>The true #1 GOOSE fork on BSC, Jurassic Farm FEEDS ON the competition</Text>
            </Hero>
            <div className="dinoContainer">
                <section className="dinosaur">
                    <img src={Dinosaur} alt="Dinosaur" ref={dinosaurImg}/>
                    <div className="border"/>
                    <h1 ref={totalValueTxt}>Total Value Locked (TVL) <br /> <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} /> <br/><br/> Across all Farms and Pools</h1>
                </section>
                <section className="dinosaur-info">
                    <div>
                        <p><span>Total SALT Supply: </span>{cakeSupply && <CardValue value={cakeSupply} decimals={0} />}</p>
                        <p><span>Total SALT Burned: </span><CardValue value={getBalanceNumber(burnedBalance)} decimals={0} /></p>
                        <p><span>New SALT per block: </span><span>{saltPerBlock}</span></p>
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
