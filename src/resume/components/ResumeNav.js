// @flow
import React from 'react';
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { AButton } from 'theme/components/button';
import BreadCrumb from 'theme/components/BreadCrumb';

import styles from './ResumeNav.module.scss';

export default function ResumeNav() {
  return (
    <BreadCrumb>
      <AButton
        icon={faFilePdf}
        className={styles.navAction}
        download="thomas-welfley-resume.pdf"
        rel="alternate"
        href="/resume.pdf"
      >
        PDF
      </AButton>
      <AButton
        icon={faFileAlt}
        className={styles.navAction}
        download="thomas-welfley-resume.txt"
        rel="alternate"
        href="/resume.txt"
      >
        TXT
      </AButton>
    </BreadCrumb>
  );
}
