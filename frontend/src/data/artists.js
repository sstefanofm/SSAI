const artistsIds = {
  deadmau5: '2CIMQHirSU0MQqyYHq0eOx',
  djBoring: '3MkIU5jhXTMK9pYQTRVI6p',
  avicii: '1vCWHaC5f2uS3yhpwWbIA6',
  yungLean: '67lytN32YpUxiSeWlKfHJ3',
  nirvana: '6olE6TJLqED3rqDCT0FyPh',
  fooFighters: '7jy3rLJdDQY21OgRLCZ9sD',
  theSmashingPumpKins: '40Yq4vzPs9VNUrIBG5Jr2i',
  blackSabbath: '5M52tdBnJaKSvOpJGz8mfZ',
  jimiHendrix: '776Uo845nYHJpNaStv1Ds4',
  burzum: '7L6u6TyhjuwubrcojPeNgf',
}

export const formatUrlEncodedIds = () => {
  const length = Object.keys(artistsIds).length

  let str = `${artistsIds[Object.keys(artistsIds)[0]]}%2C`

  for (let i = 1; i < length - 1; ++i)
    str = `${str}${artistsIds[Object.keys(artistsIds)[i]]}%2C`

  str = `${str}${artistsIds[Object.keys(artistsIds)[length - 1]]}`

  return str
}