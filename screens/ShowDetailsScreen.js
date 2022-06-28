import {Text} from 'react-native'
import shows from '../data/allShows'
import { show } from '../data/show'
import { fetchShow } from '../Externals/http'

export default function ShowDetailsScreen({route}) {

  const showId = route.params.showId

  const selectedShow = shows.results.find((show) => showId === show.id)
  // const showSelected = fetchShow(showId)



  // console.log(showSelected);
  return (
    <Text>{show.title}</Text>
  )
}
