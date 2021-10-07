// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  faBriefcase,
  faGraduationCap,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import {
  LimitWidthNarrow,
  Columns,
  FlexColumns
} from 'theme/components/layout';
import Footer from 'theme/components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactInfo from '../components/ContactInfo';
import ResumeNav from '../components/ResumeNav';
import Lolipop from '../components/Lolipop';
import styles from './Resume.module.scss';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Thomas Welfley: Resume</title>
        <meta
          name="description"
          content="Thomas Welfley builds amazing engineering organizations and software. From Python and JS microservice architectures to SPAs, React Native, iOS, and Android mobile apps, he has extensive experience shipping software across all parts of the stack. Further, he defines and implements the hiring and management strategies required to scale. From inception to production, he makes software happen."
        />
        <meta
          name="keywords"
          content="engineer, software engineer, python developer, developer, web developer, engineering manager, vice president, CTO, director, San Francisco, California, Welfley, Thomas, portfolio, resume"
        />
      </Helmet>
      <ResumeNav />
      <div className={styles.resume}>
        <header>
          <LimitWidthNarrow>
            <FlexColumns>
              <div>
                <h1>Thomas welfley</h1>
                <h2>Engineering Leader</h2>
              </div>
              <ContactInfo />
            </FlexColumns>
          </LimitWidthNarrow>
        </header>
        <main>
          <section>
            <LimitWidthNarrow>
              <p>
                I build amazing <strong>engineering organizations</strong> and
                {' '}<strong>software</strong>. From <strong>microservice
                {' '}architectures</strong>, to <strong>developer
                {' '}platforms</strong>, and <strong>web</strong>,
                {' '}<strong>iOS</strong>, and <strong>Android</strong>
                {' '}frontends, I have extensive experience shipping software
                {' '}across all parts of the stack. Further, I define and 
                {' '}implement the <strong>hiring</strong> and
                {' '}<strong>management strategies</strong> required to
                {' '}<strong>scale</strong>. From inception to production, I
                {' '}make software and teams happen. Just say the word and
                {' '}<strong>let's start building</strong>.
              </p>
            </LimitWidthNarrow>
          </section>
          <section>
            <Lolipop icon={faBriefcase}>
              <FlexColumns>
                <div className={styles.timeRange}>
                  03.2020
                  <br />
                  Present
                </div>
                <div>
                  <h1>Google</h1>
                  <h2>Sr. Engineering Manager, Developer Programs</h2>
                  <p>
                    Led a cross-functional team of 20 to design and execute{' '}
                    <strong>developer experience</strong> for the Google
                    Assistant on speakers, Smart Displays, and Android devices.
                    Reported at the director level. Enabled 2x developer growth
                    and 4x end user growth for their integrations (tens of
                    millions of new monthly active users). Enabled integrations
                    with some of the top engineering companies in the world
                    (Twitter, Microsoft, Snap). Designed and{' '}
                    <strong>recruited teams</strong> to expand developer
                    platforms spanning multiple product areas (Search, Nest,
                    Android).
                  </p>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  09.2016
                  <br />
                  03.2020
                </div>
                <div>
                  <h1>HipHipGo</h1>
                  <h2>Founder</h2>
                  <p>
                    Principal engineer for a product that forecasts body weight
                    change based on automatically tracked fitness and food spend
                    data.
                  </p>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  10.2011
                  <br />
                  09.2016
                </div>
                <div>
                  <h1>Yola</h1>
                  <h2>VP of Engineering</h2>
                  <p>
                    Reorganized a <strong>global engineering team</strong>{' '}
                    supporting over 20 million monthly active users; enabled
                    onboarding 40 additional engineers. Transitioned company
                    from hiring full stack engineers to specialists; established
                    team-directed interview processes. Designed and executed
                    transition from monolithic to{' '}
                    <strong>microservice architecture</strong>, from 13 deployed
                    frontends and services to hundreds. Executed{' '}
                    <strong>frontend</strong> strategy for shipping decoupled
                    UIs with independent stacks. Architected and led the
                    execution of new partner <strong>APIs</strong> securing a
                    strategic partnership with Plesk and additional venture
                    capital.
                  </p>
                  <h2>Director of Engineering</h2>
                  <p>
                    Decreased time to first release for new engineers from 3
                    months to 1 day. Organized and led a project to make 9
                    million customer websites <strong>responsive</strong> by
                    default. Rebuilt UIs and purchase flows to support 8
                    currencies and 18 languages, securing strategic,
                    multinational partnerships with Google. Designed and secured
                    the adoption of an organization-wide{' '}
                    <strong>code review</strong> process, ensuring the quality
                    of 6,000 pull requests per year.
                  </p>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  09.2009
                  <br />
                  10.2011
                </div>
                <div>
                  <h1>Match Strike LLC</h1>
                  <h2>Cofounder; Principal Engineer</h2>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  05.2004
                  <br />
                  08.2009
                </div>
                <div>
                  <h1>University of Central Florida</h1>
                  <h2>Software Engineer; Manager</h2>
                </div>
              </FlexColumns>
              <p className={styles.moreLink}>
                <a href="https://www.linkedin.com/in/welfley/">
                  Full History via LinkedIn
                  <FontAwesomeIcon icon={faArrowCircleRight} fixedWidth />
                </a>
              </p>
            </Lolipop>
          </section>
          <section>
            <Lolipop icon={faGraduationCap}>
              <FlexColumns>
                <div className={styles.timeRange}>
                  08.2002
                  <br />
                  12.2006
                </div>
                <div>
                  <h1>Bachelor of Science in Computer Science</h1>
                  <h3>University of Central Florida</h3>
                  <Columns className={styles.subColumns}>
                    <p>Founding member of UCF Student IT Advisory Council</p>
                    <p>
                      3x AASCU presenter for leadership of colleges and
                      universities
                    </p>
                  </Columns>
                </div>
              </FlexColumns>
            </Lolipop>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
