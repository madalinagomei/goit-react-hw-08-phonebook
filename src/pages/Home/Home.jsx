import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
  return (
    <section className={style.section}>
      <h1 className={style.titleHome}>Welcome to Phonebook!</h1>
      <div>
        <h3 className={style.titleHome}>About Phonebook</h3>
        <p className={style.paragraph}>
          Phonebook is the ideal choice for anyone who wants to better organize
          their digital life.
        </p>
      </div>
      <div>
        <h3 className={style.titleHome}>Login or Register to get started!</h3>
        <div className={style.wrapperUser}>
          <div className={style.linkUser}>
            <p className={style.paragraph}>Already have an account?</p>
            <NavLink to="/login" className={style.link}>
              Connect here
            </NavLink>
          </div>
          <div className={style.linkUser}>
            <p className={style.paragraph}>Are you new here?</p>
            <NavLink to="/register" className={style.link}>
              Register now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
