import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            <div className="flex">
                <a className="footer__social" href="/" >
                    <img className="footer__icon" alt="" src={require("../../assets/icons/globe.svg")}/>
                    <p className="text-3">norrisdan.com</p>
                </a>
                <a className="footer__social" href="/">
                    <img className="footer__icon" alt="" src={require("../../assets/icons/twitter.svg")}/>
                    <p className="text-3">@danielpnorris</p>
                </a>
                <a className="footer__social" href="/">
                    <img className="footer__icon" alt="" src={require("../../assets/icons/github.svg")}/>
                    <p className="text-3">@daniel-norris</p>
                </a>
            </div>
            <p className="text-3">Copyright, 2020. Dan Norris</p>
        </div>
    </footer>
)

export default Footer;