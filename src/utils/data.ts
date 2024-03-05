
type searchParams = {
  page: number,
  pageSize: number,
  searchTerm?: string,
}

export const postDetailQuery = (postId: string) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    _id,
    title,
    body,
    _createdAt
  }`;
  return query;
};

export const newsDetailMoreQuery = (id: string) => {
  if (id) {
    const query = `*[_type == "post" && _id != '${id}' && type == 'news' && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      subtitle,
      body
    }`;
    return query;
  } else {
    const query = `*[_type == "post" && type == 'news' && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      subtitle,
      body
    }`;
    return query;
  }
};

export const announcementQuery = () => {
  const query = `*[_type == "post" && type == 'announcements' && status == 'active'] | order(_createdAt desc){
    _id,
    title,
    subtitle,
    mainImageUrl,
    body
  }`;
  
  return query;
};

export const newsQuery = ({page, pageSize}: searchParams) => {  
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  
  const query = `*[_type == "post" && type == 'news' && status == 'active'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    subtitle,
    body
  }`;
  
  return query;
};

export const newSearchQuery = ({page, pageSize, searchTerm}: searchParams) => {
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  const query = `*[_type == "post" && status == 'active' && type == 'news' && title match '${searchTerm}*'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    subtitle,
    body
  }`;

  return query;
};