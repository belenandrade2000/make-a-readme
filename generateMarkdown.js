// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else
  return ``;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `## License 
    The license for this project is the ${license} license.`
  } else
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } else
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${badge(data.license)}

  ## Description 🔎
  ${data.description}

  ## Table of Contents 📖
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Test](#tests)
- [Questions](#questions)

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}
  
  ${section(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests 
  ${data.test}

  ## Questions 
  If there are any questions, contact me at my email at: ${data.email}
  Find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;
