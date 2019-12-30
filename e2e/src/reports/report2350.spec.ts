const url = require('../url');
describe('Print Report 2350', () => {
    it('navigate report module and print report2350', async () => {
        await browser.get(url.URL_AUTH);
        await element(by.css('[placeholder=\'Логин\']')).sendKeys('telda_borisov');
        await element(by.css('[placeholder=\'Пароль\']')).sendKeys('1');
        await element(by.cssContainingText('.btn','Вход')).click();
        await browser.waitForAngular();
        await browser.get(url.URL +'report2350?' + url.SUBDIVISION + url.DATE);
    });
});
