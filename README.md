# Swagger UI GitHub Pages Template 
This repository provides a template for setting up Swagger UI on GitHub Pages.
Swagger UI is a powerful tool for documenting and testing APIs, and with this template,
you can easily deploy it on GitHub Pages to share your API documentation with others.

## How to Use
You can [start a new repository from the template | fork this repository | integrate the files in your own repository]. Once you have your own repository, go to __Settings ► Actions ► General ► Workflow permissions__ and choose the option __Read and write permissions__.  

The Github Pages Environment can be set under __Settings ► Pages__, the GitHub Pages site is needs to be built from the `gh-pages` branch.  

The Swagger YML file is in the `/docs` folder, but can be placed in any other location and even be converted in JSON format with just some little adjustments to `src/index.js`.

## Local Development
A local environment can be started with the command:
```bash
npm start
```
## Accessing Swagger UI

Once you have deployed your Swagger UI documentation to GitHub Pages, you can access it by visiting the following URL:

```
https://your-github-username.github.io/your-repository-name/
```

Replace `your-github-username` with your actual GitHub username and `your-repository-name` with the name of your repository.

## Resources

- [Swagger UI](https://swagger.io/tools/swagger-ui/): Swagger UI is a collection of HTML, JavaScript,
and CSS assets that dynamically render Swagger-compliant documentation from an OpenAPI Specification.
- [GitHub Pages](https://pages.github.com/): GitHub Pages allows you to host static websites directly
from your GitHub repository, making it a convenient choice for hosting Swagger UI documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MIT License is a permissive open-source license that allows you to freely use, modify, and distribute the code. Feel free to customize this template according to your needs.

