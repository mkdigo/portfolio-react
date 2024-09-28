import html from '../../../assets/images/skills/html.png';
import css from '../../../assets/images/skills/css.png';
import js from '../../../assets/images/skills/js.png';
import ts from '../../../assets/images/skills/ts.png';
import react from '../../../assets/images/skills/react.png';
import php from '../../../assets/images/skills/php.png';
import laravel from '../../../assets/images/skills/laravel.png';
import mysql from '../../../assets/images/skills/mysql.png';
import node from '../../../assets/images/skills/node.png';
import docker from '../../../assets/images/skills/docker.webp';
import mongdb from '../../../assets/images/skills/mongdb.png';
import dart from '../../../assets/images/skills/dart.png';
import flutter from '../../../assets/images/skills/flutter.png';
import vuejs from '../../../assets/images/skills/vuejs.png';

import styles from './styles.module.scss';

export function Skills() {
  return (
    <section className={styles.skills}>
      <div className={`neumorphism ${styles.container}`}>
        <h2>Conhecimentos adquiridos</h2>
        <div>
          <img src={html} alt='Logo HTML' />
          <img src={css} alt='Logo CSS' />
          <img src={js} alt='Logo Javascript' />
          <img src={ts} alt='Logo Typescript' />
          <img src={react} alt='Logo React' />
          <img src={php} alt='Logo PHP' />
          <img src={laravel} alt='Logo Laravel' />
          <img src={mysql} alt='Logo Mysql' />
        </div>
      </div>
      <div className={`neumorphism ${styles.container}`}>
        <h2>Estudando no momento</h2>
        <div>
          <img src={node} alt='Logo Node' />
          <strong className={styles.reactNative}>React Navite</strong>
          <img src={docker} alt='Logo Node' />
        </div>
      </div>
      <div className={`neumorphism ${styles.container}`}>
        <h2>Interesses</h2>
        <div>
          <img src={mongdb} alt='Logo MongoDB' />
          <img src={dart} alt='Logo Dart' />
          <img src={flutter} alt='Logo Flutter' />
          <img src={vuejs} alt='Logo Vue' />
        </div>
      </div>
    </section>
  );
}
