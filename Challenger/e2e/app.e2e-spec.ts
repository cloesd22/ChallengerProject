import { ChallengerPage } from './app.po';

describe('challenger App', () => {
  let page: ChallengerPage;

  beforeEach(() => {
    page = new ChallengerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
