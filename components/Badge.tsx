import { PokemonType } from "../types/PokemonInfo.d";
import styles from '../styles/components/Badge.module.css';


const Badge = ({type}: {type: PokemonType}) => {

  return <div className={[styles.badge, styles[type.toLowerCase()]].join(' ')}>{type}</div>


}

export default Badge;