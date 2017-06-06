import { NgGroupPage } from './app.po';

describe('ng-group App', () => {
  let page: NgGroupPage;

  beforeEach(() => {
    page = new NgGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng works!');
  });
});
