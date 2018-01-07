import { AdminproPage } from './app.po';

describe('adminpro App', () => {
  let page: AdminproPage;

  beforeEach(() => {
    page = new AdminproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
