/**
 * Migration Script: Upload content.json to Vercel KV or Upstash Redis
 * 
 * Run this once after setting up your database:
 * node scripts/migrate-to-kv.js
 */

const fs = require('fs');
const path = require('path');

async function migrate() {
  try {
    let redis = null;
    let dbType = '';

    // Check for Upstash Redis first
    if (process.env.UPSTASH_REDIS_REST_URL) {
      console.log('📡 Detected Upstash Redis configuration');
      const { Redis } = require('@upstash/redis');
      redis = Redis.fromEnv();
      dbType = 'Upstash Redis';
    }
    // Then check for Vercel KV
    else if (process.env.KV_REST_API_URL) {
      console.log('📡 Detected Vercel KV configuration');
      const { kv } = require('@vercel/kv');
      redis = kv;
      dbType = 'Vercel KV';
    }
    else {
      console.error('❌ Error: No database configuration found');
      console.log('\nPlease set up one of the following:');
      console.log('1. Upstash Redis: UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN');
      console.log('2. Vercel KV: KV_REST_API_URL and KV_REST_API_TOKEN');
      console.log('\nAdd these to your .env.local file');
      process.exit(1);
    }

    // Read content.json
    const contentPath = path.join(__dirname, '..', 'data', 'content.json');
    
    if (!fs.existsSync(contentPath)) {
      console.error('❌ Error: data/content.json not found');
      process.exit(1);
    }

    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

    console.log(`📤 Uploading content to ${dbType}...`);
    
    // Upload to database
    await redis.set('portfolio-content', content);

    console.log('✅ Migration successful!');
    console.log('📊 Data uploaded:', Object.keys(content).join(', '));
    
    // Verify
    const stored = await redis.get('portfolio-content');
    if (stored) {
      console.log(`✅ Verification successful - data is stored in ${dbType}`);
    } else {
      console.log('⚠️  Warning: Could not verify stored data');
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  }
}

migrate();
