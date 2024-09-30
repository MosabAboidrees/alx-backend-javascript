export default function getNeighborhoodsList() {
  /* Initializing the sanFranciscoNeighborhoods array */
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  /* Using arrow function for addNeighborhood to automatically bind 'this' */
  this.addNeighborhood = (newNeighborhood) => {
    /* Adding the new neighborhood to the sanFranciscoNeighborhoods array */
    this.sanFranciscoNeighborhoods.push(newNeighborhood);

    /* Returning the updated sanFranciscoNeighborhoods array */
    return this.sanFranciscoNeighborhoods;
  };
}
