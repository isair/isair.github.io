<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-briefcase</v-icon>
          </v-col>
          <v-col class="ml-2"> Professional Experience </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="cv-viewer">
          <editor v-model="cv" mode="viewer" :outline="false" />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-col>
          <v-col class="ml-2"> Other Experience </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="cv-viewer">
          <editor :value="otherExperienceMd" mode="viewer" :outline="false" />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-school</v-icon>
          </v-col>
          <v-col class="ml-2"> Education </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="text-h6 mb-1">Koç University</div>
        <div class="text-subtitle-2 text--secondary mb-1">Istanbul, Turkey</div>
        <div class="text-body-1 font-weight-medium">Bachelor of Engineering (BE), Computer Engineering</div>
        <div class="text-body-2 text--secondary mb-3">September 2009 - August 2013</div>
        <ul class="text-body-2">
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
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-certificate-outline</v-icon>
          </v-col>
          <v-col class="ml-2"> Licenses &amp; Certifications </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list dense class="transparent">
          <v-list-item v-for="cert in certifications" :key="cert.name" class="px-0 mb-2">
            <v-list-item-content>
              <v-list-item-title class="text-wrap text-body-1">{{ cert.name }}</v-list-item-title>
              <v-list-item-subtitle class="text-body-2">{{ cert.issuer }} · {{ cert.date }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="cert.description" class="text-body-2 text--secondary mt-1">
                {{ cert.description }}
              </v-list-item-subtitle>
              <v-list-item-subtitle v-if="cert.credentialId" class="text-caption mt-1">
                Credential ID: {{ cert.credentialId }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action v-if="cert.credentialUrl">
              <v-btn icon small :href="cert.credentialUrl" target="_blank" rel="noopener noreferrer">
                <v-icon small>mdi-open-in-new</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-translate</v-icon>
          </v-col>
          <v-col class="ml-2"> Languages </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
          <v-chip class="ma-1" color="secondary" text-color="#1a1a1a">English</v-chip>
          <v-chip class="ma-1" color="secondary" text-color="#1a1a1a">Turkish</v-chip>
          <v-chip class="ma-1" color="secondary" text-color="#1a1a1a">Japanese</v-chip>
          <v-chip class="ma-1" color="secondary" text-color="#1a1a1a">German</v-chip>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #actions>
          <v-icon>$expand</v-icon>
        </template>
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon>mdi-heart-outline</v-icon>
          </v-col>
          <v-col class="ml-2"> Hobbies &amp; Interests </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
          <v-chip class="ma-1" color="accent">Acting</v-chip>
          <v-chip class="ma-1" color="accent">Digital Art</v-chip>
          <v-chip class="ma-1" color="accent">Music Theory</v-chip>
          <v-chip class="ma-1" color="accent">Saxophone</v-chip>
          <v-chip class="ma-1" color="accent">Psychology</v-chip>
          <v-chip class="ma-1" color="accent">Skiing</v-chip>
          <v-chip class="ma-1" color="accent">Boxing</v-chip>
          <v-chip class="ma-1" color="accent">Extreme Sports</v-chip>
          <v-chip class="ma-1" color="accent">Cosmology</v-chip>
          <v-chip class="ma-1" color="accent">Theoretical Physics</v-chip>
          <v-chip class="ma-1" color="accent">Computer Science</v-chip>
          <v-chip class="ma-1" color="accent">Machine Learning</v-chip>
        </div>
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
    certifications: [
      {
        name: 'Supervised Machine Learning: Regression and Classification',
        issuer: 'Stanford Online & DeepLearning.AI',
        date: 'Oct 2025',
        description: 'Part of the Machine Learning Specialization by Andrew Ng',
        credentialId: 'RN5D6OEJ4VY4',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/RN5D6OEJ4VY4',
      },
      {
        name: 'Digital Payments (Card & POS) Tools and Strategies',
        issuer: 'Udemy',
        date: 'Dec 2024',
        credentialUrl: 'https://www.udemy.com/certificate/UC-3c09d699-01f8-4f86-b34d-e604c781a97e/',
      },
      {
        name: 'Amazon Web Services Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Jan 2023',
        credentialUrl: 'https://www.credly.com/badges/683d5195-7caa-4f0d-95e5-f4c4de593464/public_url',
      },
      {
        name: 'Leadership & Management Training',
        issuer: 'Impellus',
        date: 'Oct 2022',
        description: 'Professional development for engineering leadership',
      },
      {
        name: 'Machine Learning with Javascript',
        issuer: 'Udemy',
        date: 'Mar 2021',
        credentialUrl: 'https://www.udemy.com/certificate/UC-1ed8ab72-0cfd-4237-8f60-d9822221f2dc/',
      },
      {
        name: 'AML and CTF Training',
        issuer: 'Equals',
        date: 'Sep 2019',
        description: 'Anti-Money Laundering and Counter-Terrorist Financing compliance',
      },
      {
        name: 'Secure Coding',
        issuer: 'Pen Test Partners',
        date: 'Jul 2019',
      },
      {
        name: 'Fire Warden Training and Fire Prevention Management',
        issuer: 'FSS South',
        date: 'Jan 2019',
      },
    ],
    cv: `## Equals Money

### Head of Product Engineering

#### Feb 2023 - ...

- Heading the product engineering department which owns the user-facing applications of all our brands under the Equals Group, and all our white labels.
- Driven the integration of Roqqett's offerings successfully into our products one month after buying the company, which beforehand was a product not ready for production yet.
- Lead the upgrade, which was a complete rewrite, of FairFX's legacy applications onto our new Equals Money platform, delivering the entire project within three months.
- Developed a homebrew AI that is capable of reviewing code for security vulnerabilities, best practices, and alignment with specs in linked tickets, which is now a part of our CI/CD pipeline.
- Worked with the design department to ensure we have a limited set of palette, contextual colours, size tokens, etc. - a reliable design system, which included a standardised way of defining icons and illustrations that get auto packaged.

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

Founder of Ilyssa Software, a UK based technology company delivering high quality mobile application development and server hosting services.

We have worked with MojiLaLa, Leo AR (gotten them featured a few times in the App Store), Cliqe, Tapp, and FairFX - which is the #1 holiday money company in the UK according to TrustPilot.


At the moment we are focusing on expanding our game server hosting business, available under [https://hosting.ilyssa.software](https://hosting.ilyssa.software).



**Languages:** Swift, Objective-C, Java, C#, JavaScript, TypeScript, Bash, PowerShell

**Major Libraries & Frameworks:** ARKit, ARCore, Unity, React Native, Firebase, Vue, Nuxt, Next.js




**Other Technologies:** NPM, PNPM, Yarn, Babel, ESLint, SwiftLint, CocoaPods, Fastlane, GitLab CI, GitHub Actions, Vercel, GraphQL, Relay

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
    otherExperienceMd: `During my final year in high school I started working on my own **simple operating system** using **C** and **x86 ASM** for learning purposes. It did not have a GUI but supported memory pagination and had a very simple shell with colour support.\n\nWhile studying at **Koç University** I worked on some projects for the university itself. I have designed and developed **KURadyo**, the official radio application of my school's radio club, for Android and iOS using **Titanium Mobile**. I have also made the website of numerous other school clubs using mainly **PHP** and **MySQL** for server-side development.\n\nBetween 2011 and 2012 I have developed and maintained two Mac apps for the **Mac App Store**. The first one, **Code Minifier**, automatically detected and minified html, css, and js files. The highest ranking it got was being the **#3 top paid** developer app in Turkey. My second Mac app was **iMemoryCleaner**, the first inactive memory cleaning app to hit the Mac App Store. It managed to enter the **top 10** paid apps list **in several countries**. After not having the time to release any kind of updates for these apps (as I worked on more important projects and on finishing my school) for a considerable amount of time, I decided not to renew my Mac developer license.\n\nIn years 2012 and 2013 I have joined the **game jams** named **TGJ** and **GGJ** respectively. Acted as both the **game designer** and a **programmer** in the former; was the sole programmer in the latter.\n\nAnother project of mine that is worth mentioning here is my **Mac OS X port** of the popular Nintendo DS & GBA emulator named **No$GBA**. It has so far been **downloaded more than 160 000 times** and **featured on** sites like **Reddit**.`,
  }),
  head() {
    return {
      title: 'About Me',
      script: [
        {
          hid: 'ld-json',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Baris Sencan',
            url: 'https://barissencan.com',
            sameAs: ['https://github.com/isair', 'https://www.linkedin.com/in/bsencan', 'https://medium.com/@isair'],
            jobTitle: 'Head of Product Engineering',
            worksFor: {
              '@type': 'Organization',
              name: 'Equals Money',
            },
          },
        },
      ],
    };
  },
});
</script>
