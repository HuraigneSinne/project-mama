import { categoryColors } from "../../../constantes/colors";
import Link from "next/link";

const Footer = props => (
  <footer className="page-footer">
    <div className="footer__section footer__logo">
      <img className="responsive-img" src="static/images/logo-footer.png" />
    </div>

    <div className="footer__section footer__mission">
      <p className="grey-text text-lighten-4">
        LA SANTÉ DES ENTREPRISES ET DES SALARIÉS AU COEUR DE NOS PRÉOCCUPATIONS
        // Actions globales de prévention / Conseils sur la santé et la sécurité
        / Suivi de santé individuel / Indicateurs et traçabilité des expositions
      </p>
    </div>

    <div className="footer__section footer__linksContainer">
      <h5 className="white-text">LIENS</h5>
      <ul>
        <li>
          <Link href="https://www.polesantetravail.fr/wp-content/uploads/2017/09/Reglement-interieur-POLE-SANTE-TRAVAIL-2017.pdf">
            <a className="footer__link grey-text text-lighten-3">
              Réglement intérieur
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.polesantetravail.fr/wp-content/uploads/2017/09/Statuts-POLE-SANTE-TRAVAIL-2017.pdf">
            <a className="footer__link grey-text text-lighten-3">Status</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.polesantetravail.fr/conseil-dadministration/">
            <a className="footer__link grey-text text-lighten-3">
              Conseil d'administration
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.polesantetravail.fr/actualit%C3%A9s">
            <a className="footer__link grey-text text-lighten-3">
              Commission de contrôle
            </a>
          </Link>
        </li>
        <li>
          <Link href="http://www.pstformation.com/">
            <a className="footer__link grey-text text-lighten-3">
              PST Formation
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <div className="footer__section footer__buttonsContainer">
      <ul className="footer__buttons">
        <li>
          <a className="waves-effect btn-flat">
            <i className="material-icons left">message</i>
            Contact
          </a>
        </li>
        <li>
          <a className="waves-effect btn-flat">
            <i className="material-icons left">people</i>
            Votre agence
          </a>
        </li>
        <li>
          <a className="waves-effect btn-flat">
            <i className="material-icons left">cloud</i>
            Twitter
          </a>
        </li>
      </ul>
    </div>

    <div className="footer-copyright">© 2014 Copyright Text</div>
    <style jsx>{`
      .page-footer {
        background-color: ${categoryColors.blue};
        display: flex;
        flex-wrap: wrap;
      }

      @media only screen and (max-width: 992px) {
        .page-footer {
          align-items: center;
          flex-wrap: wrap;
        }
      }

      .footer__section {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .footer__logo {
        max-width: 150px;
        margin: auto;
      }

      @media only screen and (max-width: 992px) {
        .footer__logo {
          display: none;
        }
      }

      .footer__mission {
        font-size: 0.7rem;
        padding: 0 0.5rem;
      }

      @media only screen and (max-width: 992px) {
        .footer__mission {
          text-align: center;
        }
      }

      @media only screen and (max-width: 992px) {
        .footer__mission {
          flex-basis: 100%;
        }
      }

      @media only screen and (max-width: 992px) {
        .footer__linksContainer,
        .footer__buttonsContainer {
          flex-basis: 50%;
          text-align: center;
        }
      }

      @media only screen and (max-width: 992px) {
        .footer__linksContainer h5 {
          margin-bottom: 0;
        }
        .footer__linksContainer a {
          font-size: 1rem;
        }
      }

      .footer__buttons {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .btn-flat {
        color: whitesmoke;
        border: 1px solid whitesmoke;
        width: 12rem;
      }

      @media only screen and (max-width: 992px) {
        .btn-flat {
          font-size: 0.6rem;
          margin: 0.5rem 0;
          width: 10rem;
        }
      }

      .btn-flat:hover {
        border-color: ${categoryColors.orange} !important;
        color: ${categoryColors.orange} !important;
        transition: all 0.5s;
      }

      .footer-copyright {
        flex-basis: 100%;
        justify-content: center;
      }

      .footer__link:hover {
        color: ${categoryColors.orange} !important;
      }
    `}</style>
  </footer>
);

export default Footer;
