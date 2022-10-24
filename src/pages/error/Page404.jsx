import "./Page404.css"
import { Link } from 'react-router-dom'


export default function Error() {
    return (
        <body className="main-404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <Link to="/" className="return-accueil">
            Retourner sur la page d'accueil
        </Link>
        </body>
    );
  }