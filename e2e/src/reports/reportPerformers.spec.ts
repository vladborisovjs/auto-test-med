const url = require('../url');
describe('Print Report EMPLOYEES', () => {
    it('navigate report module and print reportEMPLOYEES', async () => {
        await browser.get(url.URL_AUTH);
        await element(by.css('[placeholder=\'Логин\']')).sendKeys('telda_borisov');
        await element(by.css('[placeholder=\'Пароль\']')).sendKeys('1');
        await element(by.cssContainingText('.btn','Вход')).click();
        await browser.waitForAngular();
        await browser.get(url.URL +'jasperScheduleContainer?' + url.SUBDIVISION + url.DATE + '&type=EMPLOYEES');
    });
});
