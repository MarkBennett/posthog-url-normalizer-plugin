# posthog-url-normalizer-plugin

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A PostHog plugin to normalize the format of urls in your application allowing you to more easily compare them in insights.

Normalize the format of urls in your application allowing you to more easily compare them in insights. The normalized url is stored in a new property called `normalized_current_url`. By default this converts all urls to lowercase and strips the trailing slash.

Support PostHog and give it a try today. It's the best analytics platform for startups I've found. You won't regret it!

## Developing Locally

To develop this plugin locally, you'll need to clone it and then run specs. Please make sure you've got Node and Yarn installed. Pull requests welcome!

git clone https://github.com/MarkBennett/posthog-url-normalizer-plugin.git
yarn install
yarn test --watch

From there, edit away and enjoy!

## Installation

1. Open PostHog.
1. Go to the Plugins page from the sidebar.
1. Head to the Advanced tab.
1. "Install from GitHub, GitLab or npm" using this repository's URL.

## Roadmap

See the GitHub Project for a roadmap.

## Contributing

Contributions of code, issues, reviews and documentation are welcome. This is my first plugin so please be patient with me.

## Acknoledgements

Thanks to @Twixes and @marcushyett-ph for their help getting this plugin up and running, along with the awesome @posthog community!
