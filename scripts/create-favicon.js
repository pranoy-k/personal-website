const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createFavicon() {
  try {
    const profilePath = path.join(__dirname, '../public/images/profile.jpg');
    
    // Create favicon.ico (multi-size ICO file)
    await sharp(profilePath)
      .resize(16, 16)
      .toBuffer()
      .then(async (data16) => {
        const buffer32 = await sharp(profilePath).resize(32, 32).toBuffer();
        const buffer48 = await sharp(profilePath).resize(48, 48).toBuffer();
        
        // Write to app/favicon.ico
        fs.writeFileSync(
          path.join(__dirname, '../app/favicon.ico'),
          Buffer.concat([data16, buffer32, buffer48])
        );
        
        // Write to public/favicon.ico
        fs.writeFileSync(
          path.join(__dirname, '../public/favicon.ico'),
          Buffer.concat([data16, buffer32, buffer48])
        );
        
        // Also create favicon.png at 32x32
        await sharp(profilePath)
          .resize(32, 32)
          .toFile(path.join(__dirname, '../public/favicon.png'));
        
        console.log('✅ Favicon created successfully!');
      });
  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

createFavicon();
