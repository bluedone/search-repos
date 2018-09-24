# gatsby-starter-hello-world
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## Running in development
`gatsby develop`

# Web Developer Intern Challenge

Build a web app to search Github repositories, favourite repos, manage favourites.

## Instructions
- **Reproduce the designs** provided in the [screenshots](screenshots/desktop.jpg)
- Must use Github API **v3 or v4**
- Typing in the search input field should **NOT** perform an API call
DONE- Hitting enter or clicking the "Search" button should perform an API call to Github
DONE- Performing a search should render a list of **10 repositories**
	- Each item should
		DONE- render the name with owner *(Ex. shopify/polaris)*
        DONE- and link to the repo's page on Github
		DONE- render the name of the primary language
		DONE- render the latest release tag **if present**
		DONE- render the "Add" button **if the repo is not already favourited**
		DONE- clicking the "Add" button should add the repo to the favourites list
        DONE- When the search input field is cleared, the list of results should cleared
        DONE- When the number of favourites is **more than one**
	    DONE- render a **list of favourited repositories**
		DONE- Each item should
		DONE	- render the name with owner *(Ex. shopify/polaris)* and link to the repo's page on Github
		Done	- render the name of the primary language
		Done	- render the latest release tag if present
		Done	- render the "Remove" button **if the repo has been favourited**
		Done	- clicking the "Remove" button should remove the repo from the favourites list

## Notes
- [Github Developer](https://developer.github.com/)
- [Docs on how to create a personal access token to make request to the Github API](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
