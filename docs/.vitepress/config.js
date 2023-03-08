export default {
  base: '/',
  lang: 'en-US',
  title: 'The Bootcamp',
  description: 'Just playing around.',
  themeConfig: {
      nav: [
          { text: 'Reformatory', link: '/reformatory/' },
          { text: 'Editing', link: '/editing/' },
          { text: 'Marketing', link: '/marketing/' },
          {
              text: 'Sales',
              items: [
                  { text: 'Affiliate', link: '/sales/affiliate/' },
                  { text: 'Copywriting', link: '/professors/morpheus/' },
                  { text: 'EC0M', link: '/professors/oracle/' },
                  { text: 'Amazon FBA', link: '/professors/luckyluc/' },
              ]
          },
          {
              text: 'Wall Street',
              items: [
                  { text: 'Stocks', link: '/professors/morpheus/' },
                  { text: 'FX', link: '/professors/morpheus/' },
                  { text: 'Crypto', link: '/professors/oracle/' },
              ]
          },
          {
              text: 'PRO\'s',
              items: [
                  { text: '7 Step Catch-Up', link: '/professors/7-steps-catchup/' },
                  { text: 'Morpheus Tate', link: '/professors/morpheus/' },
                  { text: 'Prof. Oracle', link: '/professors/oracle/' },
                  { text: 'Lucky Luc', link: '/professors/luckyluc/' },
                  { text: 'AI', link: '/professors/ai/' },
                  { text: 'Messages From ZION', link: '/professors/luckyluc/' },
              ]
          } 
      ],
      sidebar: {
          // Reformatory
          '/reformatory/': [
              {
                  text: 'Financial Wizardry',
                  collapsible: true,
                  items: [
                      { text: 'CIA triad', link: '/lab/security/cia-triad' },
                      { text: 'Hacking modus operandi', link: '/lab/security/hacking-modus-operandi' },
                  ]
              },
              {
                  text: 'Business Mastery',
                  collapsible: true,
                  items: [
                      { text: 'CIA triad', link: '/lab/security/cia-triad' },
                      { text: 'Hacking modus operandi', link: '/lab/security/hacking-modus-operandi' },
                  ]
              },
              {
                  text: 'Peak Performance',
                  collapsible: true,
                  items: [
                      { text: 'CIA triad', link: '/lab/security/cia-triad' },
                      { text: 'Hacking modus operandi', link: '/lab/security/hacking-modus-operandi' },
                  ]
              }
          ],
          // Editing
          '/editing/': [
              {
                  text: 'Setup',
                  collapsible: true,
                  items: [
                      { text: 'The Setup', link: '/editing/setup/the-setup' },
                      { text: 'Sequences', link: '/editing/setup/sequences' },
                      { text: 'Importing A Clip', link: '/editing/setup/importing-a-clip' },
                      { text: 'Keybinds', link: '/editing/setup/keybinds' },
                      { text: 'Cuts', link: '/editing/setup/cuts' },
                  ]
              },
              {
                  text: 'Bugatti®',
                  collapsible: true,
                  items: [
                      { text: 'Clip Selection', link: '/editing/bugatti/clip-selection' },
                      { text: 'Placement Zones', link: '/editing/bugatti/placement-zones' },
                      { text: 'Subtitles', link: '/editing/bugatti/subtitles' },
                      { text: 'Transcribe', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Motion Tracking', link: '/editing/bugatti/motion-tracking' },
                      { text: 'Zoom', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Transitions', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Colour Correction', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Music', link: '/editing/bugatti/music' },
                      { text: 'The Checklist', link: '/editing/bugatti/the-checklist' },
                      { text: 'Wash Your Car', link: '/editing/bugatti/wash-your-car' },
                  ]
              },
              {
                  text: 'Format',
                  collapsible: true,
                  items: [
                      { text: 'Superformat', link: '/editing/formats/superformat' },
                      { text: 'Niche', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Viral Video', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Viral Lifestyle Video', link: '/editing/formats/viral-lifestyle-videos' },
                      { text: 'Stock Video', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                      { text: 'Splitscreen', link: '/editing/formats/splitscreen' },
                      { text: 'Banned', link: '/editing/formats/banned' },

                  ]
              },
              {
                  text: 'Recording 🎥',
                  collapsible: true,
                  items: [
                      { text: 'Save As MP4', link: '/editing/recording/save-output-as-mp4' },
                  ]
              },
          ],
          // Marketing
          '/marketing/': [
              {
                  text: 'Branding',
                  collapsible: true,
                  items: [
                      { text: 'The New Era', link: '/editing/ptes/ptes' },
                      { text: 'Rebranding', link: '/marketing/branding/rebranding' },
                      { text: 'Niche', link: '/editing/ptes/ptes' },
                      { text: 'Username', link: '/marketing/branding/username' },
                      { text: 'Bio', link: '/marketing/branding/bio' },
                      { text: 'Profile Picture', link: '/marketing/branding/profile-picture' },
                      { text: 'YouTube Banner', link: '/editing/ptes/ptes' },
                      { text: 'Twitter Banner', link: '/editing/ptes/ptes' },
                      { text: 'Reels Cover', link: '/editing/ptes/ptes' },
                      { text: 'Story Highlights', link: '/marketing/branding/story-highlights' },
                      { text: 'AI', link: '/editing/ptes/ptes' },
                  ]
              },  
              {
                  text: 'The Attack Plan',
                  collapsible: true,
                  items: [
                      { text: 'Diary', link: '/marketing/the-attack-plan/diary' },
                      { text: 'Fundamentals', link: '/marketing/the-attack-plan/fundamentals' },
                      { text: 'Hooks', link: '/marketing/the-attack-plan/hooks' },
                      { text: 'Description', link: '/marketing/the-attack-plan/descriptions' },
                      { text: 'Hashtags', link: '/marketing/the-attack-plan/hashtags' },
                      { text: 'Comment Fishing', link: '/marketing/the-attack-plan/comment-fishing' },
                      { text: 'Why', link: '/marketing/the-attack-plan/why' },
                      { text: 'Posting Rules', link: '/marketing/the-attack-plan/posting-rules' },
                      { text: 'The Attack Plan', link: '/marketing/the-attack-plan/the-attack-plan' },
                      { text: 'How The Algo Works', link: '/marketing/the-attack-plan/how-the-algo-works' },
                      { text: 'Fix Low Views', link: '/marketing/the-attack-plan/fix-low-views' },
                      { text: 'Decision Making', link: '/marketing/the-attack-plan/decision-making' },
                      { text: 'Positivity', link: '/marketing/the-attack-plan/positivity' },
                      { text: 'Creative Brainpower', link: '/marketing/the-attack-plan/creative-brainpower' },
                      { text: 'Mind Control Aikido', link: '/marketing/the-attack-plan/mind-control-aikido' },
                      { text: 'SEO Free Money Trick', link: '/marketing/the-attack-plan/SEO-money-trick' },
                      { text: 'Watermarks', link: '/marketing/the-attack-plan/watermarks' },
                  ]
              },          
              {
                  text: 'TikTok',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Create A TikTok', link: '/marketing/TikTok/create-a-tiktok' },
                      { text: 'Guidelines', link: '/marketing/TikTok/guidelines' },
                  ]
              },
              {
                  text: 'YouTube',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Pinned Comments', link: '/marketing/youtube/pinned-comments' },
                      { text: 'Community Posts', link: '/marketing/youtube/community-posts' },
                      { text: 'Banner', link: '/marketing/youtube/banner' },
                      { text: 'Hashtags', link: '/marketing/youtube/hashtags' },
                  ]
              },
              {
                  text: 'Instagram',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Story', link: '/marketing/instagram/stories' },
                      { text: 'Highlights', link: '/marketing/instagram/highlights' },
                      { text: 'Reels', link: '/marketing/instagram/reels' },
                      { text: 'Hashtags', link: '/marketing/instagram/hashtags' },
                  ]
              },
              {
                  text: 'Twitter',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Tweeting', link: '/marketing/twitter/tweeting' },
                  ]
              },
              {
                  text: 'Snap',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Cyber kill chain', link: '/editing/cyber-kill-chain/cyber-kill-chain' },
                  ]
              },
              {
                  text: 'Telegram',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Private Channel', link: '/editing/cyber-kill-chain/cyber-kill-chain' },

                  ]
              },
          ],
          // Sales
          '/sales/affiliate/': [
              {
                  text: 'Affiliate',
                  items: [
                      // This shows /professors/morpheus/index.md` page.
                      { text: '101', link: '/sales/affiliate/101' }, // /professors/morpheus/index.md
                      { text: 'Domains', link: '/sales/affiliate/domains' }, // /professors/morpheus/index.md
                      { text: 'Live Chat', link: '/sales/affiliate/live-chat' }, // /professors/morpheus/index.md
                      { text: 'Promo Videos', link: '/sales/affiliate/promo-videos' }, // /professors/morpheus/index.md
                      { text: 'CTA', link: '/sales/affiliate/cta' }, // /professors/morpheus/index.md
                      { text: 'The Sales Plan', link: '/sales/affiliate/the-sales-plan' }, // /professors/morpheus/index.md
                  ]
              }
          ],
          // Professors
          // This sidebar gets displayed when user is
          // under `/professors/morpheus/` directory.
          '/professors/7-steps-catchup/': [
              {
                  text: '1 Editing',
                  items: [
                      { text: 'Preface & First Task', link: '/professors/7-step-catchup/1/preface' },
                      { text: 'Video Fundementals', link: '/professors/7-step-catchup/1/video-fundementals' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                  ]
              },
              {
                  text: '2 Formats',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
              {
                  text: '3 Branding',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
              {
                  text: '4 Attack',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
              {
                  text: '5 Hooks',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
              {
                  text: '6 Algoritme',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
              {
                  text: '7 Affiliate',
                  collapsible: true,
                  collapsed: true,
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/development' },
                  ]
              },
          ],

          '/professors/morpheus/': [
              {
                  text: 'Morpheus',
                  items: [
                      // This shows /professors/morpheus/index.md` page.
                      { text: 'Index', link: '/professors/morpheus/' }, // /professors/morpheus/index.md
                  ]
              }
          ],
          '/professors/oracle/': [
              {
                  text: 'Prof. Oracle',
                  items: [
                      { text: 'Index', link: '/professors/oracle/' },
                  ]
              }
          ],
          '/professors/luckyluc/': [
              {
                  text: 'Lucky Luc',
                  items: [
                      { text: 'Index', link: '/professors/luckyluc' },
                  ]
              }
          ],
          '/professors/ai/': [
              {
                  text: 'ChatGPT',
                  items: [
                      { text: 'Installation', link: '/professors/ai/ChatGPT/installation' },
                      { text: 'Marketing', link: '/professors/ai/ChatGPT/marketing' },
                      { text: 'Copywriting', link: '/professors/luckyluc' },
                      { text: 'Development', link: '/professors/luckyluc' },
                  ]
              },
              {
                  text: 'Midjourney',
                  items: [
                      { text: 'Installation', link: '/professors/ai/midjourney/installation' },
                      { text: 'Styles', link: '/professors/ai/midjourney/styles' },
                      { text: 'Logo', link: '/professors/ai/midjourney/logo' },
                      { text: 'Web', link: '/professors/ai/midjourney/web' },
                  ]
              }
          ],
      }
  },
  markdown: {
      theme: 'material-palenight',
      lineNumbers: false
  }
}
