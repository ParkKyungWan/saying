import React from 'react';

//컴포넌트들
import Header from './components/header';
import Writing from './components/Writing';
import History from './components/History';
//css
import './Main.css';


export default function Main(){
    return(
        <div className="body" >
            <Header/>
            <Writing/>
            <div className="historyCover">
                <History name="철학자 니체" saying="신은 죽었다."/>
                <History name="스파르타의 왕 아게실라오스 2세" saying="용기는 정의가 수반되지 않는 한 무가치하다. 하지만 모든 이가 정의로와지면 용기는 불필요해 진다."/>
                <History name="혁명가 스티브잡스" saying="디자인은 어떻게 보이고 느껴지냐의 문제만은 아닙니다. 디자인은 어떻게 기능하냐의 문제입니다."/>
            </div>
        </div>
    )
}
