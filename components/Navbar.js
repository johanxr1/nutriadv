import Image from "next/image";
import campana from "/public/icon-campana.svg";
import campanaNoti from "/public/icon-campana-noti.svg";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid mt-1 mb-1 mb-lg-0">
        <ul id="navBar" className="nav nav-fill">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tu plan actual:
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Consultas:
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pacientes:
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image
                className="icon "
                src={campana}
                alt="Notificaciones"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hola Admin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
