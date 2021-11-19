module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';

        const langDropdownSelector = '#lr_button';
        const langDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';    
        
        const resultsPageQuerySelector = '#searchform input[name="q"]';
        const resultsPageLangSelector =  'body';   //'"//div[contains(@class, 'KTBKoe') and text()=" Search Itaian pages"]';
        const resultsPageLastUpdateSelector = 'body';      //'div.KTBKoe[value="Past month"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(langDropdownSelector)
            .click(langDropdownValueSelector)
            .click(lastUpdateDropdownSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month')

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLangSelector, 'Search Italian pages', 'UI: Language is set to Italian');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');

        browser.saveScreenshot('tests_output/google.png')

    }
}