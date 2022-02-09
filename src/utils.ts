function fetchGet<T>(url:string, params?:Record<string, string>):Promise<T>{
  const urlObject = new URL(url);
  if(params){
    Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key]));
  }
  return fetch(urlObject.toString()).then(res=>{
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(data=>data.data);
}

export {
  fetchGet
};
