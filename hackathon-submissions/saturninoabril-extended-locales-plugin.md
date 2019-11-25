#### Mattermost plugin to extend client locales on top of built-in/supported locales
1. Additional locales can be from the plugin itself (difficult to maintain) or from a separate translation service
2. Additional locales will be added on top of built-in locales which can be selected as "Default Client Language" or one of the "Available Languages"
3. Each user will be able to select additional language via Account settings
4. On language change, the webapp propagates immediately while on mobile app, it needs to reload (can be improved later).

- Plugin repo - https://github.com/saturninoabril/mattermost-plugin-extended-locales
- Webapp changes - https://github.com/mattermost/mattermost-webapp/compare/master...saturninoabril:hackathon-2019
- Mobile changes - https://github.com/mattermost/mattermost-mobile/commit/f20c1f828a07f3a7be8f06c2e80ffca7d35e2c7a

Disclaimer: I've used Finnish, Indonesian, Norwegian, Swedish and Tagalog as an example to showcase the plugin.  I'm in no way expert or knowledgeable in those languages (except Tagalog) and I might translated the word incorrectly.  Forgive my ignorance in such case and feel free to correct.
