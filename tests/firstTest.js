module.exports = {
    'First test case'(browser) {
        browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('hnname')
        .assert.containsText('hnmain', 'Hacker News')
    }
}