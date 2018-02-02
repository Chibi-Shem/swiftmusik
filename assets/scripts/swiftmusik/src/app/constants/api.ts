export const API_DOMAIN = (<any>window).base_url;
export const PUSHER_CHANNEL = (<any>window).pusher_channel;
export const API_PATH = 'api/'

export const VIDEO_API_PATH = (): string => `${API_PATH}videos/`;
export const VIDEO_API_URL = (): string => `${API_DOMAIN}${VIDEO_API_PATH()}`;

export const PLAYLIST_API_PATH = (): string => `${API_PATH}playlist/`;
export const PLAYLIST_LOG_API_PATH = (): string => `${PLAYLIST_API_PATH()}logs/`;