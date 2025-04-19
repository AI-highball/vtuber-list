// pages/index.js
import { fetchChannels } from '../lib/fetchChannels';
import channelIds from '../data/channelIds.json';

export async function getStaticProps() {
  const channels = await fetchChannels(channelIds);
  return { props: { channels } };
}

export default function Home({ channels }) {
  return (
    <main style={{ padding: 20 }}>
      <h1>VTuber 一覧</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
        {channels.map(ch => (
          <a key={ch.id} href={ch.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10 }}>
              <img src={ch.thumbnail} alt={ch.title} />
              <h2>{ch.title}</h2>
              <p>登録者：{Number(ch.subscribers).toLocaleString()} 人</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
