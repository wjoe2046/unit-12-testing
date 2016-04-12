import React, { PropTypes } from 'react';

const GameList = (props) => {
  const gameList = props.gameList;
  const listElements = gameList.map(game => (
    <li key={game.createdAt}>{game.winner} won at {game.createdAt}</li>
  ));
  return (
    <div>
      <ul>
        {listElements}
      </ul>
    </div>
  );
};

GameList.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default GameList;
