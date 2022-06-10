const dates = ['Past month', 'Past 3 months', 'Past 6 months', 'Past year']

const filterByDate = (k, dateSelected) => {
  debugger
  const created = new Date(k?.createdAt)
  if (dateSelected === dates[0]) {
    return new Date() - created < 60 * 60 * 24 * 30 * 1000
  }
  if (dateSelected === dates[1]) {
    return new Date() - created < 60 * 60 * 24 * 30 * 1000 * 3
  }
  if (dateSelected === dates[2]) {
    return new Date() - created < 60 * 60 * 24 * 30 * 1000 * 6
  }
  if (dateSelected === dates[3]) {
    return new Date() - created < 60 * 60 * 24 * 30 * 1000 * 12
  }
}

export { filterByDate };
export default dates