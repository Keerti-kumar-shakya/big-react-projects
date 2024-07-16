import { useGlobalContext } from "./Context";

export function PaginationData(pages) {
const {axiosData} = useGlobalContext()
//console.log(axiosData);
  const numberOfPages = Math.ceil(axiosData.length/pages);

  const newAxiosData = Array.from({length: numberOfPages}, (_,index) => {{
    const start = index * pages;
    return axiosData.slice(start, start + pages)
  }})


  return newAxiosData
}

