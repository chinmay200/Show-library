

export async function fetchShow(id) {
  const showDetails = await fetch(
    `https://api.themoviedb.org/3/movie/453395?api_key=b2246780b69a660f1af2f464045f2b37&language=en-US`
  );


  console.log(showDetails);;
}
