const getFaviconUrl = (domain: string, size: number) => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
};

export { getFaviconUrl };
