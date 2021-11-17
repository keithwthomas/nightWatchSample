module.exports = {
    'First test case'(browser) {
        browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('body')
        .pause(1000)
        .assert.containsText('body', 'Hacker News')
        .end();
    }
}