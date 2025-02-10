const Track = ({ trackElement }) => {

  return trackElement && (
    <div className='Track'>
      <div>
        <img src={trackElement.album.images[2].url} />
      </div>
    </div>
  )
}

export default Track
