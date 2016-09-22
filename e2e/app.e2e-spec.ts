import { PlaniflyPage } from './app.po';

describe('planifly App', function() {
  let page: PlaniflyPage;

  beforeEach(() => {
    page = new PlaniflyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
