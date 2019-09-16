import React from 'react';

import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map(c => <Character key={c.name} {...c} />)}
  </ul>
);

export default CharacterList;
