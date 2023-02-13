import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoff from "/public/sidebar/logooff.png";
import nConbtn from "/public/sidebar/nueva-receta.svg";
import aMenu from "/public/sidebar/abrir-menu.svg";
import cMenu from "/public/sidebar/cerrar-menu.svg";
import iHomeA from "/public/sidebar/icon-home(white).svg";
import iAgendaO from "/public/sidebar/icon-agenda.svg";
import iPacientesO from "/public/sidebar/icon-pacientes.svg";
import iMensajeriaO from "/public/sidebar/icon-mensajeria.svg";
import iAlimentosO from "/public/sidebar/icon-alimentos.svg";
import iRecetasO from "/public/sidebar/icon-recetas.svg";
import iAcompanamientosO from "/public/sidebar/icon-acompanamientos.svg";

export default function Sidebar(props) {
  const [menu, setMenu] = useState(aMenu);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const abrirMenu = () => {
    if (document.getElementById("sidebarMenu").classList.contains("open")) {
      document.getElementById("sidebarMenu").classList.remove("open");
      document.getElementById("navBar").classList.remove("open");
      //document.getElementById("contenedor").classList.remove("open");
      setMenu((menu = aMenu));
    } else {
      document.getElementById("sidebarMenu").classList.add("open");
      document.getElementById("navBar").classList.add("open");
      //document.getElementById("contenedor").classList.add("open");
      setMenu((menu = cMenu));
    }
  };
  return (
    <>
      <div id="sidebarMenu" className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo-details">
          <i className="">
            <Image src={logoff} width={35} height={42} />
          </i>
          <div className="logo_name">NutriApp</div>
        </div>
        <ul className="nav-list">
          <li handleClick={handleClick}>
            <i className="iconMenu">
              <Image className="" src={menu} />
            </i>
          </li>
          <li>
            <a id="btnbarranc" href="#" className="">
              <i className="">
                <Image src={nConbtn} />
              </i>
              <span className="links_name">Nueva consulta</span>
            </a>
            <span className="tooltip">Nueva consulta</span>
          </li>
          <li>
            <Link href="./#">
              <a href="#" className={props.home}>
                <i className="">
                  <Image src={iHomeA} />
                </i>
                <span className="links_name">Inicio</span>
              </a>
            </Link>
            <span className="tooltip">Inicio</span>
          </li>
          <li>
            <a href="#" className={props.agenda}>
              <i className="">
                <Image src={iAgendaO} />
              </i>
              <span className="links_name">Agenda</span>
            </a>
            <span className="tooltip">Agenda</span>
          </li>
          <li>
            <a href="#" className="">
              <i className="">
                <Image src={iPacientesO} />
              </i>
              <span className="links_name">Pacientes</span>
            </a>
            <span className="tooltip">Pacientes</span>
          </li>
          <li>
            <a href="#" className="">
              <i className="">
                <Image src={iMensajeriaO} />
              </i>
              <span className="links_name">Mensajeria</span>
            </a>
            <span className="tooltip">Mensajeria</span>
          </li>
          <li>
            <a href="#" className="">
              <i className="">
                <Image src={iAlimentosO} />
              </i>
              <span className="links_name">Alimentos</span>
            </a>
            <span className="tooltip">Alimentos</span>
          </li>
          <li>
            <a href="#" className="">
              <i className="">
                <Image src={iRecetasO} />
              </i>
              <span className="links_name">Recetas</span>
            </a>
            <span className="tooltip">Recetas</span>
          </li>
          <li>
            <a href="#" className="">
              <i className="">
                <Image src={iAcompanamientosO} />
              </i>
              <span className="links_name">Modelos de Menú</span>
            </a>
            <span className="tooltip">Modelos de Menú</span>
          </li>
        </ul>
      </div>
    </>
  );
}
