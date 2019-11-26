Initial prototype for adding functionality for moving a post to a different channel. 

See https://mattermost.uservoice.com/forums/306457-general/suggestions/11080068-move-a-message-to-another-channel

PRs:
redux: https://github.com/mattermost/mattermost-redux/pull/993
webapp: https://github.com/mattermost/mattermost-webapp/pull/4339
server: https://github.com/mattermost/mattermost-server/pull/13215/files

(Main) things currently missing:
- permissions UX + plumbing
- Postgres SQL query for moving the posts
- RHS handling
- reusing the "more channels" component (we reuse the channel selection list component)
