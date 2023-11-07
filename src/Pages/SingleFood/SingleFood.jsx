import { useLoaderData } from "react-router-dom"

export default function SingleFood() {
    const food = useLoaderData();
    console.log(food)
  return (
    <div>
      
    </div>
  )
}
