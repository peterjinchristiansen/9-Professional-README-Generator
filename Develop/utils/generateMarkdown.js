function licenseImage(data) {
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
            return null;
    }
  }
  
  function renderLicenseSection(data) {
    if(data.license === 'None') {
        return "";
    } else {
        return `---
  ## License
  
  This project has been licensed by ${data.license}.
  
        `;
    }
  }
  
  
  
  
  
  function generateMarkdown(data) {
    return `# ${data.title}  ${licenseImage(data)}
  
  ## Description
  
    ${data.description}
  
  ## Table of Contents
  
  [Installation](#installation)
  
  [Usage](#usage)
  
  [Contributing](#contributing)
  
  [Tests](#tests)
  
  [Questions](#questions)
  
  ## Installation
  
  To install your dependencies, you will be using the command:
  
    ${data.installation}
  
  ---
  
  ## Usage
  
  ${data.usage}
  
  ---
  
  ## Contributing
  
  ${data.contribution}
  
  ---
  
  ## Tests
  
  To test the application, you will be using the command:
  
    ${data.tests}
  
  ---
  
  ## Questions
  
  If you have any questions, you can e-mail me at ${data.email}.
  You can also access my other projects at https://github.com/${data.username}
  
  ${renderLicenseSection(data)}
    `;
  }
  
  module.exports = generateMarkdown;