module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';

        const langDropdownSelector = '#lr_button';
        const langDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(langDropdownSelector)
            .click(langDropdownValueSelector)
            .saveScreenshot('tests_output/google.png')

    }
}