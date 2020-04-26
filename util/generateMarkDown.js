function generateMarkdown(data) {
    return `
    
# ${data.title}
    ${data.description}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
### table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
    ${data.installation}
## Usuage
    ${data.usage}
## License
    ${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Question
${data.email}
![profile image](${data.profileURL})

  `;
  }
  
  module.exports = generateMarkdown;
  