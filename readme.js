
   
function readme(data) {
return `# ${data.projectTitle}
## Description
${data.description}
![](https://img.shields.io/badge/license-${data.license}-blue)
## Table of Contents
- [Installation](#installation)
- [Contribution](#contribution)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Contact](#contact)
## Installation 
${data.installation}
## Contribution
${data.contributing}
## Usage
${data.usage}
## Tests
${data.tests}
## Questions
${data.questions}
 
## License
${data.license}
## Contact
Contact me at ${data.email} or on GitHub: [${data.userName}](https://github.com/${data.userName})
`
}

module.exports = readme