// scripts/updateChannels.js

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { fetchChannels } = require('../lib/fetchChannels');
const channelIds = require('../data/channelIds.json');

async function main() {
  const channels = await fetchChannels(channelIds);
  const outPath = path.join(process.cwd(), 'public', 'channels.json');
  fs.writeFileSync(outPath, JSON.stringify(channels, null, 2), 'utf-8');
  console.log('✅ public/channels.json を生成しました');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
