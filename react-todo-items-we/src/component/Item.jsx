const Item = ({id, status, title, handleDelete, handleToggle}) => {
  return (
    <div>
      <span>{`${title} - ${status}`}</span>
      <button onClick={() => handleDelete(id)}>x</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  )
}

export default Item