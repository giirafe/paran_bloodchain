import '../App.css';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.scss';
import React, {useState, Component, useLayoutEffect, useEffect } from 'react'
import caver from '../klaytn/caver';
import BloodContract from '../components/BloodContract';

import { Link } from 'react-router-dom';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';
import {gsap} from "gsap";
import $ from 'jquery';
import HomeCard from './card';

import './card.scss';
import {Icon} from '@iconify/react';

const CARDS = 3;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><Icon icon="typcn:chevron-left-outline" /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><Icon icon="typcn:chevron-right-outline"/></button>}
    </div>
  );
};


function Home() {
    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [donateType, setDonateType] = useState("");
    var [date, setDate] = useState("");
    var [length, setLength] = useState(0);

    console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)
    
    const getLength = async() => {
        const acc_balance = await BloodContract.methods.balances(wallet.address).call();
        console.log("Account Balance is : " , acc_balance);
        var cert_length = await BloodContract.methods.user_CertLength(wallet.address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        
        setLength(length = cert_length);
    }
    
    const getCertdata = async () => {

        await getLength();
        if(length <1){
            console.log("User Has No Blood Certificate");
            setName(name = "NULL");
            setId(id = "NULL");
            setDonateType(donateType = "NULL");
            setDate(date = "NULL");
        } else{
            var length_max = length - 1;
            console.log("length_max", length_max);
            // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
            // console.log("cert is :",cert);
            // const cert_data = await cert;
            // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
            // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
            const cert_data = await BloodContract.methods.getCertData(wallet.address,length_max,0).call({from: wallet.address});
            console.log("Cert is ", cert_data)
            setName(name = cert_data.get_name);
            setId(id = cert_data.get_id);
            setDonateType(donateType = cert_data.get_donateType);
            setDate(date = cert_data.get_date);
        }
        
        console.log("cycle done");

    }

    getCertdata();
    console.log("state: ", name);

    /*
    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.
        
        const spacing = 0.1,    // spacing of the cards (stagger)
          snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
          cards = gsap.utils.toArray('.cards li'),
          seamlessLoop = buildSeamlessLoop(cards, spacing),
          scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
            totalTime: 0,
            duration: 1,
            ease: "power3",
            paused: true
          }),
          trigger = ScrollTrigger.create({
            start: 0,
            onUpdate(self) {
              if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
                wrapForward(self);
              } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
                wrapBackward(self);
              } else {
                scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
                scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
                self.wrapping = false;
              }
            },
            end: "+=100",
            pin: ".gallery"
          });
        
        function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
          iteration++;
          trigger.wrapping = true;
          trigger.scroll(trigger.start + 1);
        }
        
        function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
          iteration--;
          if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
            iteration = 9;
            seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
            scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
          }
          trigger.wrapping = true;
          trigger.scroll(trigger.end - 1);
        }
        
        function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
          let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
          if (progress > 1) {
            wrapForward(trigger);
          } else if (progress < 0) {
            wrapBackward(trigger);
          } else {
            trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
          }
        }
        
        
        
        
        function buildSeamlessLoop(items, spacing) {
          let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
            startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
            loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
            rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
            seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
              paused: true,
              repeat: -1, // to accommodate infinite scrolling/looping
              onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                this._time === this._dur && (this._tTime += this._dur - 0.01);
              }
            }),
            l = items.length + overlap * 2,
            time = 0,
            i, index, item;
        
          // set initial state of items
          gsap.set(items, {xPercent: 400, opacity: 0, scale: 0});
        
          // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
          for (i = 0; i < l; i++) {
            index = i % items.length;
            item = items[index];
            time = i * spacing;
            rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
                       .fromTo(item, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, time);
            i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
          }
          
          // here's where we set up the scrubbing of the playhead to make it appear seamless. 
          rawSequence.time(startTime);
          seamlessLoop.to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: "none"
          }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none"
          });
          return seamlessLoop;
        }
    },[]);*/

    return(
        <body>
            <Header/>
            <div className='app'>
                <Carousel>
                    <Card title={`${name}님의 헌혈증명서`} content={
                        `\n
                        발급 번호 : ${id}\n
                        헌혈 종류 : ${donateType}\n
                        헌혈 일자 : ${date}\n
                        혈액원명 : 경기남부혈액원\n
                        헌혈 가능일까지 17일 남았습니다.`
                    }/>
                    <Card title={`${name}님의 혈액 검사 결과`}></Card>
                    <Card title={`${name}님의 건강 정보`}></Card>
                </Carousel>
            </div>
        </body>
        )
}


export default Home;
