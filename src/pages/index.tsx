import * as React from "react";
import type { PageProps } from "gatsby";
import character from "../images/character.png";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import logo from "../images/logo.png";
import lightning from "../images/lightning.png";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className="main">
            <img className="character" src={character} alt="" />
            <div className="box1">
                <img src={box1} alt="" />
            </div>
            <div className="box2">
                <img src={box2} alt="" />
            </div>
            <div className="box3">
                <img src={box3} alt="" />
            </div>
            <img className="lightning" src={lightning} alt="" />
            <img className="logo" src={logo} alt="" />

            <a href="https://bezzer.shop" className="button">
                Kup teraz
            </a>
        </main>
    );
};

export default IndexPage;
