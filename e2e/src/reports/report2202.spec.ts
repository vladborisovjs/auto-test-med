const url = require('../url');
describe('Print Report 2202', () => {
    it('navigate report module and print report2202', async () => {
        await browser.get(url.URL_AUTH);
        await element(by.css('[placeholder=\'Логин\']')).sendKeys('telda_borisov');
        await element(by.css('[placeholder=\'Пароль\']')).sendKeys('1');
        await element(by.cssContainingText('.btn','Вход')).click();
        await browser.waitForAngular();
        await browser.get(url.URL +'report2202?' + url.SUBDIVISION + url.DATE);
    });
});
