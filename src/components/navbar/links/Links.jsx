'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLinks from './navLinks/NavLinks';
import Image from 'next/image';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ path: '/admin', title: 'Admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ path: '/login', title: 'Login' }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt=''
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ path: '/admin', title: 'Admin' }} />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLinks item={{ path: '/login', title: 'Login' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
