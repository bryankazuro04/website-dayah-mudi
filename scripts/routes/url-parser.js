const UrlParser = {
  parseUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase(),
      splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    return { resource: urlsSplits || null };
  },

  _urlCombiner(splitedUrl) {
    return splitedUrl.resource ? `/${splitedUrl.resource}` : "/";
  },
};

export default UrlParser;
