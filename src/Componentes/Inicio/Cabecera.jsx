import React from 'react'
import PropTypes from 'prop-types'
import './Stylo.css';
import esika from '../../img/esika3.png';
import lbel from '../../img/ebel.webp';
import cyzone from '../../img/cyzone.jpg';
function Cabecera(props) {
  return (
    <nav class="navbar navbar-expand-md colorbarrasuperior elemento">
        <a class="navbar-brand colornombrebarra" href="#">𝐃𝐞𝐨 𝐕𝐨𝐥𝐞𝐧𝐭𝐞</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link btn-outline-light " href="#"><img src={esika} className="tamañoimagenboton"/></a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-outline-light " href="#"><img src={lbel} className="tamañoimagenboton2"/></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link btn-outline-light " href="#"><img src={cyzone} className="tamañoimagenboton"/></a>
            </li>
        </ul>
    </div>
</nav>
  )
}

Cabecera.propTypes = {}

export default Cabecera
