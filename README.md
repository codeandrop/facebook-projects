# Facebook Projects

The app will list repositories owned by Facebook on Github sorted by watchers. It will also display basic repository details like name, description, last updated date and contributor list.

# Requirements
- Node: >= 8.x
- Yarn (optional)

## Installation Instructions
1. Clone the repository and `cd` into it.
2. Run `npm i` or `yarn`
3. Run `npm start`
4. Browse to `localhost:3010`

## Tests
You can run the tests with `npm test`

## Cool Features
- The `ProjectList` component can sort by any property returned by the github api. It will accept the props `sortField` which by can be any sortable field from the github api (date, numbers, etc) and `sortDirection` which can be `asc` or `desc`. The default values are `watchers` and `desc`.
- The `ProjectList` component is designed to render any type of details from the github api. Initially it will render `contributors` but you can use the prop `detailType` to specify which details you want to add such as forks, issues, tags, etc. A custom render for each one can be included in the `ProjectDetailItem` component.
- The github user used to get the repositories information (facebook) can be changed under `app/config.js`.

## Important notes
- I added the corresponding css to each component following the css modules approach.
- I designed the components as generic as possible to ensure reusability.
- I noticed a bug on the github api, the actual property to sort by watchers is called `subscribers_count`, and even though is defined the api docs, it's only returned when you call a single repo details.

  Compare these 2 api calls:

  https://api.github.com/users/facebook/repos?type=all (subscribers_count is not present)

  https://api.github.com/repos/facebook/draft-js (subscribers_count is present)

  I chose to use `watchers` for the purpose of the project and I built the component in such a way you can easily change the sort field.

  More details on the bug can be found here:

  https://github.com/octokit/octokit.net/issues/1510

  https://github.com/PyGithub/PyGithub/issues/367


- I left pagination out of scope both on projects and contributors, this can be implemented by reading the `Link` headers from the api response and creating a pagination component.
  A sample response to read is something like:

  `Link: <https://api.github.com/repositories/52113921/contributors?page=2>; rel="next", <https://api.github.com/repositories/52113921/contributors?page=6>; rel="last"`

## License
This app is [MIT licensed](/LICENSE).