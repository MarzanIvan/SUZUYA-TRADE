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
                                <a id="ref" href="https://bit.ly/suzuya-lis-skins">
                                    bit.ly/suzuya-lis-skins - сайт lis-skins
                                </a>
                            </div>
                        </div>
                    </div>
                <br/>
                    <div className="StaticFooter-mainFooterContainer-Bqa">
                        <div className="StaticFooter-behanceLinkContainer-qBT">
                            <div className="descdiv">lis-skins - партнёр для продажи и обмена скинов CS2<br/>
                                Мы также рекомендуем нашего надёжного партнёра — lis-skins. Здесь вы можете безопасно
                                покупать, продавать и обменивать скины CS2 с гарантией честных сделок. Удобный
                                интерфейс, выгодные цены и быстрая обработка транзакций делают lis-skins отличным
                                выбором для геймеров и трейдеров, ценящих своё время, безопасность и надёжность.
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
                                            href="https://www.youtube.com/@SUZUYATRADE" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Youtube
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://rutube.ru/channel/56297444/" target="_blank" tabIndex="-1">
                                            <p className="FooterLinks-text-3wz"><span
                                                className="FooterLinks-iconContainer-T6h StaticFooter-iconClass-JdV">
                                                </span>Rutube
                                            </p>
                                        </a></li>
                                        <li className="StaticFooter-footerSelectorItems-I6_"><a
                                            className="StaticFooter-footerSelectorLinks-HKF FooterLinks-link-SQa"
                                            href="https://vk.com/suzuyatrade" target="_blank" tabIndex="-1">
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