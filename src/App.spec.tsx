import { render } from '@testing-library/react'
import App from './App';

describe('App', () => {
  test("Teste Teste", () => {

    expect(1 + 1).toBe(2)
  })
  test('Teste page App', () => {
    const { getByText } = render(<App />)
    expect(getByText('HelloWord!')).toBeTruthy()
  });
}); 
