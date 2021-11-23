module.exports = {
    '@tags': ['google1'],
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            //.perform(() => { debugger; })
            .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month');

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLangSelector = 'body'; //'[aria-label="Search Italian pages"]'; 
        const resultsPageLastUpdateSelector = 'body'; //'[aria-label="Past month"]'; 

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLangSelector, 'Search Italian pages', 'UI: Language is set to Italian');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');

        browser.saveScreenshot('tests_output/google.png');

    }
};