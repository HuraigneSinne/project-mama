import Link from 'next/link';
import CategoryLink from './CategoryLink';

class Sidebar extends React.Component {
  componentDidMount() {
    // Initialisation du js de la Sidenav via materialize.min.js
    M.Sidenav.init(document.querySelector('.sidenav'));
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">

          <Link href="/">
            <a><img className="logo center-align" src="static/images/logo.png" /></a>
          </Link>

          {
            this.props.categoryLinksTextContent.map(link =>
              <CategoryLink textContent={link} href={link} key={link} />
            )
          }

        </ul>

        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <style jsx>{`
          .logo {
            display: block;
            max-width: 13rem;
            margin: auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .sidenav-trigger {
            position: absolute;
            top: 1rem;
            left: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Sidebar;