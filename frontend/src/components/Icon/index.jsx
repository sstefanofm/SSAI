import Burger from './Burger'
import CaretRight from './CaretRight'
import Cover from './Cover'
import Explicit from './Explicit'
import Heart from './Heart'
import LifePreserver from './LifePreserver'
import List from './List'
import Pause from './Pause'
import Person from './Person'
import Play from './Play'
import Search from './Search'

export const IconBurger = ({ size = 30 }) => <Burger size={size} />
export const IconCaretRight = ({ size = 16, style = {} }) => <CaretRight size={size} style={style} />
export const IconCover = ({ size = 200 }) => <Cover size={size} />
export const IconExplicit = ({ size = 16 }) => <Explicit size={size} />
export const IconHeart = ({ size = 20, style = {} }) => <Heart size={size} style={style} />
export const IconLifePreserver = ({ size = 15, style = {} }) => <LifePreserver size={size} style={style} />
export const IconList = ({ size = 30 }) => <List size={size} />
export const IconPause = ({ size = 30 }) => <Pause size={size} />
export const IconPerson = ({ size = 200 }) => <Person size={size} />
export const IconPlay = ({ size = 30 }) => <Play size={size} />
export const IconSearch = ({ size = 20 }) => <Search size={size} />
