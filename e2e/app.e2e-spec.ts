import { RhFrontPage } from './app.po';

describe('rh-front App', function() {
  let page: RhFrontPage;

  beforeEach(() => {
    page = new RhFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
