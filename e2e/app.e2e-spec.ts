import { AgularRededitPage } from './app.po';

describe('agular-rededit App', function() {
  let page: AgularRededitPage;

  beforeEach(() => {
    page = new AgularRededitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
