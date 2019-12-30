const url = require('../url');
describe('Print Report DAILY', () => {
    it('navigate report module and print reportDAILY', async () => {
        await browser.get(url.URL_AUTH);
        await element(by.css('[placeholder=\'Логин\']')).sendKeys('telda_borisov');
        await element(by.css('[placeholder=\'Пароль\']')).sendKeys('1');
        await element(by.cssContainingText('.btn','Вход')).click();
        await browser.waitForAngular();
        await browser.get(url.URL +'dailySummary?' + url.SUBDIVISION + url.DATE);
    });
});
