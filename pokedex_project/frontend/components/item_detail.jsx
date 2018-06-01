import React from 'react';

const ItemDetail = (props) => {
  if ( props.items === undefined ) {
    return (<h1> Now Loading </h1>);
  }

  return (
    <div className='items-container'>
      <ul>
        { props.items.map ((item) => {
          return (<li key={item.id}><img src={item.image_url}></img></li>);
        })}
      </ul>
    </div>
  );
};

export default ItemDetail;
