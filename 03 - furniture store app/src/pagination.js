
export function PaginationData(pages, axiosData) {

//console.log(axiosData);
  const numberOfPages = Math.ceil(axiosData.length/pages);

  const newAxiosData = Array.from({length: numberOfPages}, (_,index) => {{
    const start = index * pages;
    return axiosData.slice(start, start + pages)
  }})


  return newAxiosData;
}

