function toQueryString(params: { [key: string]: any }): string {
  const string = Object.keys(params)
    .map((key) => {
      if (Array.isArray(params[key])) {
        return params[key].map((i: string | number) => `${key}[]=${encodeURIComponent(i)}`);
      }
      if (typeof params[key] === 'object') {
        return Object.keys(params[key]).map(
          (i) => `${key}[${i}]=${encodeURIComponent(params[key][i])}`
        );
      }
      return `${key}=${encodeURIComponent(params[key])}`;
    })
    .flat()
    .join('&');
    
  return string ? `?${string}` : '';
}

export default toQueryString;
