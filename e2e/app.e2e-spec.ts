import { UdonAppPage } from './app.po';

describe('udon-app App', () => {
  let page: UdonAppPage;

  beforeEach(() => {
    page = new UdonAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
