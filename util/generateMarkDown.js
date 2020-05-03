function generateMarkdown(data) {
    return `
![${data.title}](https://img.shields.io/github/last-commit/${data.username}/${data.title})
# ${data.title}

## Description
${data.description}

### table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#questions)

## Installation
    ${data.installation}

## Usuage
    ${data.usage}

## License
    This project is under ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Question
![${data.username}](${data.image})


  `;
}

module.exports = generateMarkdown;
