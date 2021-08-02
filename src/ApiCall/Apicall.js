export default async function getStories(selection) {
  const key = process.env.REACT_APP_NY_API_KEY
  try{
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=${key}`);
    const data = errorHandler(response);
    return data
  } catch (e) {
    throw Error(e.message)
  }
}

const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}