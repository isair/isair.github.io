<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Professional Experience</v-expansion-panel-header>
      <v-expansion-panel-content>
        <editor v-model="cv" mode="viewer" :outline="false" />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Other Experience</v-expansion-panel-header>
      <v-expansion-panel-content>
        <p>
          During my final year in high school I started working on my own <strong>simple operating system</strong> using
          <strong>C</strong> and <strong>x86 ASM</strong> for learning purposes. It did not have a GUI but supported
          memory pagination and had a very simple shell with colour support.
        </p>
        <p>
          While studying at <strong>Koç University</strong> I worked on some projects for the university itself. I have
          designed and developed <strong>KURadyo</strong>, the official radio application of my school's radio club, for
          Android and iOS using <strong>Titanium Mobile</strong>. I have also made the website of numerous other school
          clubs using mainly <strong>PHP</strong> and <strong>MySQL</strong> for server-side development.
        </p>
        <p>
          Between 2011 and 2012 I have developed and maintained two Mac apps for the <strong>Mac App Store</strong>. The
          first one, <strong>Code Minifier</strong>, automatically detected and minified html, css, and js files. The
          highest ranking it got was being the <strong>#3 top paid</strong> developer app in Turkey. My second Mac app
          was <strong>iMemoryCleaner</strong>, the first inactive memory cleaning app to hit the Mac App Store. It
          managed to enter the <strong>top 10</strong> paid apps list <strong>in several countries</strong>. After not
          having the time to release any kind of updates for these apps (as I worked on more important projects and on
          finishing my school) for a considerable amount of time, I decided not to renew my Mac developer license.
        </p>
        <p>
          In years 2012 and 2013 I have joined the <strong>game jams</strong> named <strong>TGJ</strong> and
          <strong>GGJ</strong> respectively. Acted as both the <strong>game designer</strong> and a
          <strong>programmer</strong> in the former; was the sole programmer in the latter.
        </p>
        <p>
          Another project of mine that is worth mentioning here is my <strong>Mac OS X port</strong> of the popular
          Nintendo DS &amp; GBA emulator named <strong>No$GBA</strong>. It has so far been
          <strong>downloaded more than 160 000 times</strong> and <strong>featured on</strong> sites like
          <strong>Reddit</strong>.
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Education</v-expansion-panel-header>
      <v-expansion-panel-content>
        <h2>Koç University - Istanbul, Turkey</h2>
        <p><strong>Bachelor of Engineering (BE), Computer Engineering</strong></p>
        <p>September 2009 - August 2013</p>
        <ul>
          <li>Turkish - Speech and Composition (TURK. 100)</li>
          <li>General Physics I (PHYS. 101)</li>
          <li>Calculus I (MATH. 106)</li>
          <li>Structure and Interpretation of Computer Programs (COMP. 101)</li>
          <li>Basic Academic Writing (COMM. 101)</li>
          <li>General Physics II (PHYS. 102)</li>
          <li>Multivariable Calculus (MATH. 203)</li>
          <li>Introduction to Engineering (ENGR. 100)</li>
          <li>Introduction to Programming (COMP. 131)</li>
          <li>Advanced Academic Writing (COMM. 102)</li>
          <li>Discrete Computational Structures (COMP. 201)</li>
          <li>General Chemistry (CHEM. 103)</li>
          <li>Probability and Random Variables for Engineers (ENGR. 200)</li>
          <li>Digital Systems Design (ELEC. 204)</li>
          <li>Algorithms and Data Structures (COMP. 202)</li>
          <li>World Civilizations (CIVL. 201)</li>
          <li>Introductory Biology (BIOL. 200)</li>
          <li>Summer Practice I (ENGR. 291)</li>
          <li>Signals and Systems (ELEC. 201)</li>
          <li>Computer Architecture (COMP. 303)</li>
          <li>Software Engineering (COMP. 302)</li>
          <li>Programming Language Concepts (COMP. 301)</li>
          <li>Principles of Economics (ECON. 200)</li>
          <li>Computer and Network Security (COMP. 434)</li>
          <li>Database Management Systems (COMP. 306)</li>
          <li>Operating Systems (COMP. 304)</li>
          <li>Film and the Visual (ASIU. 101)</li>
          <li>Summer Practice II (ENGR. 391)</li>
          <li>Interactive Web Design (MAVA. 220)</li>
          <li>The Turkish Revolution I (HIST. 301)</li>
          <li>The Turkish Revolution II (HIST. 302)</li>
          <li>Computer Engineering Design I (COMP. 491)</li>
          <li>Parallel Programming (COMP. 429)</li>
          <li>Drama (ARTS. 205)</li>
          <li>Cinematography and Editing (MAVA. 324)</li>
          <li>Creative Thinking in Design (MAVA. 205)</li>
          <li>Computer Engineering Design II (COMP. 492)</li>
          <li>The Ethical Dilemma in Literature (ASIU. 108)</li>
          <li>Mobile Device Programming (COMP. 319)</li>
          <li>Modern Cryptography (COMP. 443)</li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Languages</v-expansion-panel-header>
      <v-expansion-panel-content>
        <ul>
          <li>English</li>
          <li>Turkish</li>
          <li>Japanese</li>
          <li>German</li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Hobbies &amp; Interests</v-expansion-panel-header>
      <v-expansion-panel-content>
        <ul>
          <li>Digital Art</li>
          <li>Psychology</li>
          <li>Philosophy</li>
          <li>Science &amp; Technology</li>
          <li>Skiing</li>
          <li>Aikido</li>
          <li>Programming</li>
          <li>Acting</li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor } from 'vuetify-markdown-editor';

export default Vue.extend({
  components: {
    Editor,
  },
  data: () => ({
    cv: `## Equals Money
    
### Head of Product Engineering

#### Feb 2023 - ...

- Built an AI code reviewer to help developers, further reducing the time from ideation to delivery.
- Leading the product engineering department and the various projects under it with a focus on optimising processes, improving user experience, and personal growth for our employees.

### Engineering Lead

#### Jan 2021 - Feb 2023

- Successfully pitched to the business the viability of going the PWA route for our new generation of products.
- Leading the various feature teams for building the front-end of Equals Money.
- Implemented a custom OpenAPI doc to TypeScript types and GraphQL fragments and decorators generator.
- Introduced bi-weekly code review meetings to uncover technical debt.
- Completely automated various pipelines from feature branch builds and OTA updates to releases on all front-end projects and some internal libraries.
- Significant contributions to the content and architecture of shared libraries. Components, hooks, analytics, build scripts, design system, etc.

## Ilyssa Software

### Managing Director

#### Aug 2018 - ...

We are a UK based mobile development agency specialising in providing affordable high quality services that utilise the newest technologies.

We have worked with MojiLaLa, Leo AR (got its app featured a few times in the App Store), Cliqe, Tapp, and FairFX - which is the #1 holiday money company in the UK according to TrustPilot.

At the moment we are focusing on expanding our game server hosting business which is currently in closed beta.

**Languages:** Swift, Objective-C, Java, C#, JavaScript, Bash, PowerShell

**Major Libraries & Frameworks:** ARKit, ARCore, Unity, React Native, Firebase, Vue, Nuxt

**Other Technologies:** NPM, Yarn, Babel, ESLint, SwiftLint, CocoaPods, Fastlane GitLab CI, GraphQL, Relay

## Leo

### VP of Engineering

#### June 2017 - January 2018

- Lead the development team and coded actively for one of the first cross platform AR applications in the mobile market, Leo AR, where you can create your own realities and share them with others.
- Ensured our development process is one that yields a predictable roadmap, little to no technical debt and fast development speed.
- Made sure our internationally spread team of engineers stayed motivated and in-sync all the time.
- Managed the hiring process of our engineers to make sure we found sufficiently experienced people with a passion and a high potential.

**Languages:** Swift, Objective-C, Java, C#, JavaScript, Bash, PowerShell

**Major Libraries & Frameworks:** ARKit, ARCore, Unity, Vision, CoreML, React Native, Fabric, Firebase

**Other Technologies:** NPM, Yarn, Babel, ESLint, SwiftLint, CocoaPods, Carthage, Fastlane, GitLab CI, GraphQL, Relay

## MojiLaLa

### Lead Mobile Engineer

#### August 2016 - January 2018

Lead the development efforts for MojiLaLa Unlimited and MojiLaLa, a sticker platform with an ever growing artist and user base.

**Languages:** Swift, Objective-C, JavaScript, Java, Bash

**Major Libraries & Frameworks:** React Native, Fabric

**Other Technologies:** NPM, Yarn, Babel, ESLint, Tailor, SwiftLint, CocoaPods, Gradle, Maven, GitLab CI, GraphQL, Relay

## MovieLaLa

### Lead Mobile Engineer & Advisory Board Member

#### June 2014 - January 2018

- Sole developer of the main [MovieLaLa](https://itunes.apple.com/app/id869901634) app up to and including version 2.0, lead a small development team afterwards.
- Architect and main developer of MobilePlayer. A powerful and completely customizable media player for iOS. Made a [short presentation](https://docs.google.com/presentation/d/1pioFxOyhqwhkZGYamGYS76H5pE_9kXklwrYsXfoFgPw/edit?usp=sharing) in Yahoo! Video developer conference in Jan 2016. ( [https://mobileplayer.io](https://mobileplayer.io))
- Sole developer of Movie Trailers by MovieLaLa on iOS and Android. One of the earliest react-native apps and among the first to release both for iOS and Android. Contributed heavily to react-native-video during its development which at the time only worked on iOS. Featured by Facebook. ([https://bit.ly/trailers_rn_featured](https://bit.ly/trailers_rn_featured))
- Introduced and helped integrate agile development methodology into the work place.
- Later the company has been sold to Gfycat. Some apps might still remain on the stores but they aren't maintained.

**Languages:** Swift, Objective-C, JavaScript, Java, Ruby, Bash

**Major Libraries & Frameworks:** React Native, Fabric, Appium, Rails

**Other Technologies:** NPM, Babel, ESLint, CocoaPods, Carthage, Gradle, Maven, AWS, Parse, MongoDB, PostgreSQL, Travis CI, GitLab CI, GraphQL

## BTdays Technology

### Software Engineer

#### December 2013 - April 2014

- Worked on building a modern customer loyalty system from ground-up with a team of 2.
- Assisted in project planning.
- Worked on both the backend and the web frontend.
- Built two iOS apps; one for customers, and the other for merchants.

**Languages:** Python, HTML, CSS, JavaScript, Objective-C

**Major Libraries & Frameworks:** Django, Foundation, Bootstrap, JQuery

**Other Technologies:** Bower, CocoaPods, PostgreSQL

## Asterboot

### Jr. Mobile Developer

#### July 2012 – April 2013

Developed a cross-platform mobile app for an online deals site.

**Languages:** HTML, CSS, JavaScript

**Major Libraries & Frameworks:** JQuery, JQuery Mobile, PhoneGap, Titanium Mobile

## KONTAKT

### Event Organizer

#### November 2011 - December 2015

KONTAKT was the biggest subculture event in Turkey which had, after its second event, managed to reach more than a thousand participants per event. Our events attracted people from all over the country who were interested in things such as cosplay, fantasy role-playing, science fiction, fantasy fiction, animes, mangas and comics. We were strictly non-profit.

- One of the event organizers since the first event.
- Sole developer of the event management software which handles ticket sales, cosplay contest registration, contest voting, achievement tracking, and reward tracking.

**Languages:** Python, PHP, SQL, HTML, CSS, JavaScript

**Major Libraries & Frameworks:** Django, CakePHP, CodeIgniter, Bootstrap, JQuery, PhoneGap

## Coats

### I.T. Intern

#### August 2011 – September 2011

Designed and developed a web based system for managing and displaying various kinds of information on LCD screens spread throughout the company.

**Languages:** PHP, SQL, HTML, CSS, JavaScript

**Major Libraries & Frameworks:** CodeIgniter, JQuery

**Other Technologies:** MySQL`,
  }),
  head() {
    return {
      title: 'About Me',
    };
  },
});
</script>
