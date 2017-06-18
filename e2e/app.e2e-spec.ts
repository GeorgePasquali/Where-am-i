import { WhereAmIPage } from './app.po';

describe('where-am-i App', () => {
  let page: WhereAmIPage;

  beforeEach(() => {
    page = new WhereAmIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
