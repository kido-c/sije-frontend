// 서버에서 받아온 이미지 데이터 타입
export interface GetPhotoDTO {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: Exif;
  location: Location;
  current_user_collections: UserCollection[];
  urls: Urls;
  links: Links;
  user: User;
}

interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface UserCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: string | null;
  user: string | null;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: UserLinks;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface PhotoItem {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
