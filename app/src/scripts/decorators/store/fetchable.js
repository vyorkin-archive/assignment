const fetchable = (Store, Actions) => {
  return class Fetchable {
    constructor() {
      this.bindActions(Actions);
      this.data = [];
    }

    onFetch = () => this.setState({ data: [] })
    onLoad = (data) => this.setState({ data })
  }
};

export default (Actions) => {
  return (Store) => fetchable(Store, Actions);
};
