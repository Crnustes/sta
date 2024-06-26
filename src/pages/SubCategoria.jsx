import {useParams} from 'react-router-dom'
import { ListPosts } from "../components/ListPost";

const Subcategoria = () => {
  const {subcategoria} =useParams()

  return (
    <ListPosts url={ ` /post?subcategoria=${subcategoria}`} />
  )
}

export default Subcategoria