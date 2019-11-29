#### Mattermost Go Vet extension

Created a go vet extension to be used with the mattermost code with specific
checks like the license at the top of the file or the usage of the structured
logging.

Link: https://github.com/mattermost/mattermost-govet

### Sample usage

While being in the mattermost-server directory:

`go get github.com/mattermost/mattermost-govet`
`go vet -vettool=$(which mmgovet) -license $(go list ./... | grep -v /vendor/)`
