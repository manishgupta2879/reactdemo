export const Baseurl = 'https://dev.revaltronics.com';

export const LOCAL_USER = 'file';

export const setData = (name, data) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(name, data);
  }
};

export const getData = (name) => {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(name);
    return data || null;
  }
  return null;
};

export const removeData = (name) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(name);
  }
};
