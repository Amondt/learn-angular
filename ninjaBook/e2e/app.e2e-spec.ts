import { NinjaBookPage } from './app.po';

describe('ninja-book App', function() {
  let page: NinjaBookPage;

  beforeEach(() => {
    page = new NinjaBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
