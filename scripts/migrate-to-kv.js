/**
 * Migration Script: Upload content.json to Vercel KV
 * 
 * Run this once after setting up Vercel KV:
 * node scripts/migrate-to-kv.js
 */

const fs = require('fs');
const path = require('path');

async function migrate() {
  try {
    // Check if KV is configured
    if (!process.env.KV_REST_API_URL) {
      console.error('❌ Error: KV_REST_API_URL not found in environment variables');
      console.log('\nPlease:');
      console.log('1. Create a KV database in Vercel Dashboard');
      console.log('2. Copy the environment variables to your .env.local file');
      console.log('3. Run this script again');
      process.exit(1);
    }

    // Import KV
    const { kv } = require('@vercel/kv');

    // Read content.json
    const contentPath = path.join(__dirname, '..', 'data', 'content.json');
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

    console.log('📤 Uploading content to Vercel KV...');
    
    // Upload to KV
    await kv.set('portfolio-content', content);

    console.log('✅ Migration successful!');
    console.log('📊 Data uploaded:', Object.keys(content).join(', '));
    
    // Verify
    const stored = await kv.get('portfolio-content');
    if (stored) {
      console.log('✅ Verification successful - data is stored in KV');
    } else {
      console.log('⚠️  Warning: Could not verify stored data');
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

migrate();
