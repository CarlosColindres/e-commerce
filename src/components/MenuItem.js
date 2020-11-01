const MenuItem = ({title, imgUrl, size}) => {
    return (
        <div style={
            {backgroundImage: `url(${imgUrl})`}
        } className={`${size} menu-item`}>
        <div
         className='background-image'
         style={
            {backgroundImage: `url(${imgUrl})`}
        }
        />
        <div className="content">
          <h1>{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    )
}

export default MenuItem
