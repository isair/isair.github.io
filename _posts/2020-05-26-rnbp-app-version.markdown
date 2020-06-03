---
title: React Native Best Practices: Single Source of App Version
date: 2020-05-26 15:38:00 00:00
categories:
- Mobile Development
tags:
- react native
- programming
---

![](https://cdn-images-1.medium.com/max/2892/1*DpNF2NnTKOmh9tksZkMWbA.jpeg)

_This is first in a series of posts aimed at improving the React Native development experience for everyone. I have been working with React Native since it was first announced, and led development on the first both Android and iOS compatible React Native application to be available on application stores. This app was later featured on Facebook’s showcase page. I am writing this series to share some of my experience and contribute back to the community._

---

Most of the React Native applications I have worked on and seen keep the same version across all platforms they release for. You have the definitions for your app version in your `package.json`, your iOS project, and your Android project. Most developers either update these by hand or in some cases have a script that sets the version number in all these places. But what if we had a solution where you only needed to set the version in `package.json`, and the rest was derived from it without having to run or commit anything else?

Having a single source of truth is a wonderful principle that I apply to every aspect of every project I work on. Mostly because I am astoundingly lazy and don’t like repeating myself but it makes the lives of everyone working on these projects much easier as it eliminates oversights, future issues, time sinks, and keeps things pleasant to work on. Applying this principle to many workflows that exist in developing, testing, building, and packaging a React Native mobile application, I have managed to make a lot of improvements over time. Simplest of these is to have the version only ever defined in your `package.json`.

Let’s start by creating a new React Native project. Feel free to skip this step if you want to implement this in an existing project.

```
npx react-native init SimpleProject
```

Now, open your project in your favourite code editor (which one do you prefer, and why is it Visual Studio Code?) and let’s edit our `android/build.gradle` to add the following method and subproject property definitions.

```
// add this import
import groovy.json.JsonSlurper

...

allprojects {
  ...
}

// and this method
def getNodePackageVersion() {
    def packageFile = new File("$rootDir/../package.json")
    def packageJson = new JsonSlurper().parseText(packageFile.text)
    return packageJson["version"]
}

subprojects {
    // then this block
    ext {
        nodePackageVersion = getNodePackageVersion()
    }
    ...
}
```

This allows us to pass a property named `nodePackageVersion` that holds the version defined in our `package.json` file to our Android subprojects. Let’s edit `android/app/build.gradle` to use this property.

```
...

android {
    ...
    defaultConfig {
        ...
        versionName nodePackageVersion
    }
}

...
```

That concludes our Android changes, so let’s move on to iOS. Open your iOS workspace in Xcode; if you already have the terminal open you can do `open ios/SimpleProject.xcworkspace`. Now, click on your project in the left sidebar, go to `Build Phases`, press the `+` button, select `New Run Script Phase` and add the following script. I tend to name this simply as `Set Version`.

```
NODE_PACKAGE_VERSION="$(grep -w 'version":' "${SRCROOT}"/../package.json | cut -d '"' -f4)"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${NODE_PACKAGE_VERSION}" "${TARGET_BUILD_DIR}/${INFOPLIST_PATH}"
```

This script edits the version string inside the `Info.plist` file of the built target at the end of every build, and doesn’t actually change any file that you’d normally commit to your repo. Making it work as cleanly as our Android solution.

If you have more than one iOS targets, make sure you add the script to all of them, and you’re done!

# What About Build Numbers?

There are a few solutions you can employ to simplify and automate the assigning of build numbers for both iOS and Android. This depends on preference and your team’s needs. My favourite solution is to assign unix timestamps as build numbers.

Build numbers:

- Need to identify a build uniquely.
- For any reported issue, you need to be able to quickly find out which commit that build was made from.

Unix timestamps easily satisfy the first condition and can be automated, completely removing the need to set the build number by hand in anywhere in your project.

As for the association requirement mentioned in the second item, you’ll need to do some extra work to satisfy this. I usually set up Slack messages for deployments which include a short log of changes, branch name, commit hash, version string, and build number. This reliably solves the association issue.

I use fastlane to set build numbers, build and distribute apps, and send Slack messages. Explaining this setup in detail would be outside of the scope of this post, so I’ll cover this in a new one if there is interest.

[View in Medium](https://medium.com/swlh/react-native-best-practices-single-source-of-app-version-eec818408c3)