import React from 'react';

export default function ChildComponent(props) {
  return (
    <div>Dumb Component receiving Props
      <div>
        <input type="submit" onClick={ props.onClick } />
      </div>
    </div>
  );
}
