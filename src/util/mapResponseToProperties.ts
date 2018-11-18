const mapResponseToProperties = (response, parent) => {
  Object.entries(response).forEach(([key, value]) => parent[key] = value);
};

export default mapResponseToProperties;
