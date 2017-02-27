import { browser, element, by } from 'protractor';

describe('App page', () => {

  it('should have a title of Club memberships', () => {
    browser.ignoreSynchronization = true;
    browser.get('/');
    let title = element(by.className('navbar-brand')).getText();
    expect(title).toEqual('Club memberships');
  });

  it('button should have a title of add new club member', () => {
    browser.ignoreSynchronization = true;
    browser.get('/');
    let title = element(by.css('.new-member > span')).getText();
    expect(title).toEqual('Add new club member');
  });

  it('footer copyright should have a title of club memberships', () => {
    browser.ignoreSynchronization = true;
    browser.get('/');
    let title = element(by.css('footer p')).getText();
    expect(title).toEqual('club memberships');
  });
});
