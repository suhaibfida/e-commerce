class ApiFeatures {
  query: any;
  queryStr: any;
  constructor(query: string, queryStr: string) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    const removeItems = ["keyword", "page", "limit"];
    removeItems.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `${key}`);

    this.query = this.query.find.parse(queryStr);
    return this;
  }
}
export default ApiFeatures;
