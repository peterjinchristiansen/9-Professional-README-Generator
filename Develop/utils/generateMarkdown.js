function renderTitle(data) {
    if(!data.title) {
        return "No Title Entered"
    } else {
        return `## ${data.title}`;
    }
}

function renderLicenseImage(data) {
    switch(data.license) {
        case 'Apache':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'Boost':
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        case 'Eclipse':
            return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        case 'IBM':
            return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        case 'ISC':
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'Mozilla':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case 'SIL':
            return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
        case 'Unlicense':
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        case 'WTFPL':
            return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
        case 'Zlib':
            return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
        case 'None':
            return "";
    }
}

function renderDescription(data) {
    if(!data.description) {
        return "";
    } else {
        return `
---
## Description

    ${data.description}

---
    `;
    }
}

function renderTableOfContents(data) {

    var installationTOC = "";
    var usageTOC = "";
    var contributingTOC = "";
    var testsTOC = "";
    var questionsTOC = "";
    var licenseTOC = "";
    var screenshotTOC = "";
    var walkthroughTOC = "";

    if(data.installation) {
        installationTOC = '[Installation](#installation)'
    }

    if(data.usage || data.link) {
        usageTOC = '[Usage](#usage)'
    }

    if(data.contributing) {
        contributingTOC = '[Contributing](#contributing)'
    }

    if(data.tests) {
        testsTOC = '[Tests](#tests)'
    }

    if(data.email || data.username) {
        questionsTOC = '[Questions](#questions)'
    }

    if(data.license !== "None") {
        licenseTOC = '[License](#license)'
    }

    if(data.screenshot) {
        screenshotTOC = '[Screenshot](#screenshot)'
    }

    if(data.walkthrough) {
        walkthroughTOC = '[Walkthrough](#walkthrough)'
    }

    return `
    
## Table of Contents

${installationTOC}

${usageTOC}

${contributingTOC}

${testsTOC}

${questionsTOC}

${licenseTOC}

${screenshotTOC}

${walkthroughTOC}

---

    `;
}

function renderInstallation(data) {
    if(!data.installation) {
        return "";
    } else {
        return `
## Installation

To install your dependencies, you will be using the following command:

    ${data.installation}

---

    `;
    }
}

function renderUsage(data) {

    var usageLink = "";
    var usageOther = "";

    if(data.link) {
        usageLink = `Link to deployed application: ${data.link}`;
    }

    if(data.usage) {
        usageOther = data.usage;
    }

    if(!data.link && !data.usage) {
        return "";
    } else {
        return `

## Usage
            
${usageLink}
        
${usageOther}
        
---
        
            `;
    }
}

function renderContributing(data) {
    if(!data.contributing) {
        return "";
    } else {
        return `

## Contributing

${data.contributing}

---
        `;
    }
}

function renderTests(data) {
    if(!data.tests) {
        return "";
    } else {
        return `

## Tests
        
To test the application, you will be using the following command:

    ${data.tests}

---

        `;
    }
}

function renderQuestions(data) {

    var emailBody = "";
    var githubBody = "";

    if(!data.email && !data.username) {
        return "";
    }

    if(data.email) {
        emailBody = `If you have any questions, you can email me at ${data.email}. `;
    }

    if(data.username) {
        githubBody = `You can access my other projects at https://github.com/${data.username}.`
    }

    return `
    
## Questions

${emailBody}${githubBody}


---
    `;

}

function renderScreenshot(data) {
    if(data.screenshot) {
        return `

## Screenshot

${data.screenshot}

---
        `;
    } else {
        return "";
    }
}

function renderWalkthrough(data) {
    if(data.walkthrough) {
        return `

## Walkthrough

${data.walkthrough}

---
        `;
    } else {
        return "";
    }
}

  
function renderLicense(data) {
    if(data.license === 'None') {
        return "";
    } else {
        return `

## License

This project has been licensed by ${data.license}.

---
        `;
    }
}
  
  
  
  
  
function generateMarkdown(data) {
    return `
${renderTitle(data)}${renderLicenseImage(data)}
${renderDescription(data)}
${renderTableOfContents(data)}
${renderInstallation(data)}
${renderUsage(data)}
${renderContributing(data)}
${renderTests(data)}
${renderQuestions(data)}
${renderLicense(data)}
${renderScreenshot(data)}
${renderWalkthrough(data)}
    `;
  }
  
  module.exports = generateMarkdown;