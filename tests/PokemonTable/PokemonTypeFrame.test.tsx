import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonTypeFrame from '../../src/Components/PokemonTable/PokemonTypeFrame';

describe('PokemonTypeFrame', () => {
  it('should render', async () => {
    render(<PokemonTypeFrame type="water" />);
    await screen.findByText('water');
  });
});
