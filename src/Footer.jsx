import {useEffect} from "react";
import './Footer.css'
import CLlogo from "./assets/whitelogo.svg";

function Footer() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../src/min_main.js';
        script.async = true;
        const mobilescript = document.createElement('script');
        mobilescript.src = '../src/custom.js';
        mobilescript.async = true;
        document.body.appendChild(mobilescript);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(mobilescript);
        };
    }, []);
    return (
        <>
            <footer aria-label="primary" className="StaticFooter-footerContainer-jf4">
                <div className="StaticFooter-footerContent-OnA">
                    <div className="StaticFooter-mainFooterContainer-Bqa">
                        <div className="StaticFooter-behanceLinkContainer-qBT">
                            <div className="descdiv">Где выгодно купить или обменять скины CS2? <br/>Мы рекомендуем
                                нашего надёжного партнёра — avan.market. Здесь вы сможете выгодно и безопасно покупать,
                                продавать и обменивать скины CS2. Удобный интерфейс, быстрые сделки и честные цены
                                делают avan.market отличным выбором для геймеров, ценящих своё время и безопасность.
                                <br/>
                                <a id="ref" href="bit.ly/3WOXMXx">
                                    bit.ly/3WOXMXx - сайт avan.market
                                </a>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <hr/>

                    <div className="StaticFooter-mainFooterContainer-Bqa">
                        <div className="StaticFooter-behanceLinkContainer-qBT">
                            <a href="/" className="hidden-mobile logotype__link borderless">
                                <img src={CLlogo} width="32" height="32" alt="logotype"/>
                                <br/>
                                <span className="whitespan">
                                    © 2025. SUZUYA.<br/>Наша цель <br/> сделать ваши сделки <br/> выгодными и надёжными
                                </span>
                            </a>
                            <br/>
                        </div>
                        <div className="StaticFooter-sectionContainer-Kyo">
                            <div className="StaticFooter-footerSection-E69">
                                <div className="StaticFooter-footerSectionHeader-xFg">SUZUYA</div>
                                <div>
                                    <ul>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="/projects"><p
                                            className="FooterLinks-text-3wz">Где можно выгодно и надёжно покупать
                                            скины
                                            CS2?</p></a></li>

                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="/projects"><p
                                            className="FooterLinks-text-3wz">Где можно выгодно купить предметы DOTA
                                            2?</p></a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="StaticFooter-footerSection-E69">
                                <div className="StaticFooter-footerSectionHeader-xFg">Social</div>
                                <div>
                                    <ul>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="http://t.me/dieserpaniker" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Youtube
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://vk.com/ioannweb" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Rutube
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://wa.me/79628774982" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>VK video
                                            </p>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer