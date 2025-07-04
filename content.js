const domains = window.location.hostname;

fetch(chrome.runtime.getURL('updated_format_blocked.txt'))
    .then(response => response.text())
    .then(fileContent => {
        if(fileContent.includes(domains)){
            window.location.href = chrome.runtime.getURL("block.html");
        }
    });
// const fs = require('fs');
// const fileContent = fs.readFileSync('updated_format_blocked.txt', 'utf8');
// const siteToSearch = domains;
// if(fileContent.includes(siteToSearch)){
//     window.location.href = "block.html"
// }