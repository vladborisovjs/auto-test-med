const url = require('../url');
describe('Print Report 2120', () => {
    it('navigate report module and print report2120', async () => {
        await browser.get(url.URL_AUTH);
        await element(by.css('[placeholder=\'Логин\']')).sendKeys('telda_borisov');
        await element(by.css('[placeholder=\'Пароль\']')).sendKeys('1');
        await element(by.cssContainingText('.btn','Вход')).click();
        await browser.waitForAngular();
        await browser.get(url.URL +'report2120?' + url.SUBDIVISION + url.DATE);
    });
});
