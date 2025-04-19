// lib/fetchChannels.js
import axios from 'axios';

export async function fetchChannels(channelIds) {
  const key = process.env.YOUTUBE_API_KEY;
  const ids = channelIds.join(',');
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ids}&key=${key}`;

  const res = await axios.get(url);
  return res.data.items.map(item => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
    subscribers: item.statistics.subscriberCount,
    url: `https://www.youtube.com/channel/${item.id}`,
  }));
}
