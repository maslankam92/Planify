import { PlanifyPage } from './app.po';

describe('planify App', function() {
  let page: PlanifyPage;

  beforeEach(() => {
    page = new PlanifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
