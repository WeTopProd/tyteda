import React from "react";
import { Link } from "react-router-dom";

import f from "./Footer.module.scss";
import h from "../Header/Header.module.scss";

import Logo from "./image/logo.svg";
import Logo2 from "./image/HorizontalLogos.png";
import Logo3 from './image/logo (1).png'

import tel from "./image/tel.svg";
import Mail from "./image/mail.svg";
import Geol from "./image/bi_geo-alt-fill.svg";
import icon_time from "./image/icon_time.svg";

import img1 from "./image/footer__img1.png";
import img2 from "./image/footer__img2.png";
import img3 from "./image/footer__img3.png";
import img4 from "./image/footer__img4.png";
import img5 from "./image/footer__img5.png";
import img6 from "./image/footer__img6.png";
import img8 from "./image/footer__img8.png";
import img9 from "./image/footer__img9.png";
import img10 from "./image/footer__img10.png";
import jur from "./image/011.svg";

import dal from "./image/022.png";
import bill from "./image/033.svg";
import hleb from "./image/044.png";


function Footer() {
  return (
    <>
      <div className={f.section__footer}>
        <div className={h.container}>
          <div className={f.footer}>
            <div className={f.footer__logos}>
              <img src={img6} alt="logo" />
              <img src={Logo2} alt="logo" className={f.footer__logo} />
            </div>

            <div className={f.footer__info}>
              <div className={f.footer__info_item}>
                <p className={f.footer__info_item_title}>Контакты</p>

                <p className={f.footer__info_item_mode}>
                  <img src={icon_time} alt="icon" /> Режим работы с 11:00 до
                  23:00
                </p>

                <div className={f.footer__info_item_geo}>
                  <img src={Geol} alt="svg" />
                  <p className={f.footer__info_item_geo_text}>
                  г. Москва, ул. Сталеваров, д. 14, корпус 1
                  </p>
                </div>

                <div className={f.footer__info_item_contacts}>
                  <div className={f.footer__info_item_contacts_tel}>
                    <img src={tel} alt="svg" />
                    <Link to="tel:+7(495)139-64-44">+7(495)139-64-44</Link>
                  </div>
                </div>

                <div className={f.footer__info_item_mail}>
                  <img src={Mail} alt="svg" />
                  <Link
                    className={f.footer__info_item_mail_text}
                    to="mailto:info@tyteda.ru">
                    info@tyteda.ru
                  </Link>
                </div>

                
              </div>

              <div className={f.footer__info_port}>
                <p className={f.footer__info_item_title}>Наши проекты</p>

                <div className={f.footer__info_port_imgs}>
                  <Link to="https://frantsuz-club.ru/">
                    <img
                      src={img2}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://шашландия.рф/">
                    <img
                      src={img1}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://reiting.moscow/">
                    <img
                      src={Logo}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://corp-pitanie.tyteda.ru/">
                    <img
                      src={img8}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://poyuvsegda.ru/">
                    <img
                      src={img9}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://comicadze.ru/">
                    <img
                      src={img5}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://wetop.ru/">
                    <img
                      src={img4}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://pominki-dostavka.ru/">
                    <img
                      src={img10}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="https://frantsuz.ru/">
                    <img
                      src={img3}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={jur}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={dal}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={bill}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={hleb}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={f.footer__bottom} id="footer">
        <div className={h.container}>
          <div className={f.bottom}>
            <p className={f.bottom_left}>OOO "Экостар" ИНН: 5041214554 ОГРН: 1235000052330</p>

            <p className={f.bottom_right}>
              <Link to={'/policy'}> Политика конфиденциальности</Link>
              <span>Не является публичной офертой</span>
              <span>© Все права защищены</span>
            </p>

            <p className={f.bottom_center}>Сделано WeTop digital agency 2023</p>
          </div>
        </div>
      </div>

      <div className={f.footer__bottom} >
        <div className={h.container}>

          <div className={f.bottom}>


            <div className={f.bottom_text}>

              <Link to={'/oplataprav'}> Правила оплаты</Link>
              <Link to={'/oplatainfo'}> Оплата</Link>
              <Link to={'/returninfo'}> Возврат</Link>

            </div>

            
          </div>
        </div>
      </div>


    </>
  );
}

export default Footer;