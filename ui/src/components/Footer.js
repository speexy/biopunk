import React from 'react';
import { Link } from 'gatsby';
import Map from '../../static/media/map3.png';
import BMBFLogo from '../../static/media/BMBF_gefördert vom_deutsch.jpg';
import styles from './footer.module.css';

const Footer = () => (
    <div className={styles.footer}>
        <a href="https://www.openstreetmap.de/karte.html?zoom=15&lat=52.38885&lon=13.07688&layers=B000" target="_black" style={{ backgroundImage: `url(${Map})` }}></a>
        <div>
          <div className={styles.adress}>
              <p>Wissenschaftsladen Potsdam e.V.</p>
              <p>Friedrich-Engels-Straße 22</p>
              <p>Haus1 freiLand Potsdam (machBar @Haus5) </p>
              <p>Germany - 14469 Potsdam </p>
              <p>Banc Account: DE61 1203 0000 1020 5274 02</p>
              <p>Contact: info@wissenschaftsladen-potsdam.de</p>
              <Link to={'/legal'} > >> Imprint & Privacy </Link>
          </div>
          <div className={styles.bmbf}>
            <img src={BMBFLogo}/>
            <p>Die Verantwortung für den Inhalt dieser Veröffentlichung liegt beim Autor.</p>
          </div>
        </div>
    </div>
);

export default Footer;
