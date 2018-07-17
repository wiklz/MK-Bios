import React from 'react';
import Card from './Card';


export default function Cards({chars}){
    return (
        <section className="content">
            <div className="cards">
                <div className="card">
                    <Card char={chars[0]}/>
                </div>
                <div className="card">
                    <Card char={chars[1]}/>
                </div>
                <div className="card">
                    <Card char={chars[2]}/>
                </div>
                <div className="card">
                    <Card char={chars[3]}/>
                </div>
                <div className="card">
                    <Card char={chars[4]}/>
                </div>
                <div className="card">
                    <Card char={chars[5]}/>
                </div>
                <div className="card">
                    <Card char={chars[6]}/>
                </div>
                <div className="card">
                    <Card char={chars[7]}/>
                </div>
            </div>

            <div className="cards">
                <div className="card">
                    <Card char={chars[8]}/>
                </div>
                <div className="card">
                    <Card char={chars[9]}/>
                </div>
                <div className="card">
                    <Card char={chars[10]}/>
                </div>
                <div className="card">
                    <Card char={chars[11]}/>
                </div>
                <div className="card">
                    <Card char={chars[12]}/>
                </div>
                <div className="card">
                    <Card char={chars[13]}/>
                </div>
                <div className="card">
                    <Card char={chars[14]}/>
                </div>
                <div className="card">
                    <Card char={chars[15]}/>
                </div>
            </div>
        </section>



    );
};