import Alert from '../index';

describe('Unit test Alert rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('rerender successfully without props Alert component', () => {
    const alert = new Alert();
    expect(alert.rerender()).toBeUndefined();
  });
});