-- Insert dope_devs into the dope_dev table with published set to true
INSERT INTO
  dope_dev (name, avatar, bio, country_id, likes, published)
VALUES
  (
    'Rich Harris',
    'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
    'Cheese fan. I work on @sveltejs at @vercel',
    'US',
    0,
    1
  ),
  (
    'Wes Bos',
    'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg',
    'Fullstack JS Dev ❯ http://BeginnerJavaScript.com ❯ http://JavaScript30.com ❯  http://wesbos.com/courses ❯ Posts 🔥 Tips ❯ Co-hosts @SyntaxFM',
    'CA',
    0,
    1
  ),
  (
    'Scott Tolinski',
    'https://pbs.twimg.com/profile_images/1404817306031562756/5cHmpCuL_400x400.jpg',
    'Co-host of http://Syntax.fm | @getsentry | Creator of @leveluptuts | Youtuber: http://youtube.com/c/leveluptuts',
    'US',
    0,
    1
  ),
  (
    'James Q Quick',
    'https://pbs.twimg.com/profile_images/1596308940794609664/ETIx-wHp_400x400.jpg',
    'Technical Content Creator, Keynote Speaker, and DevRel Consultant. Motto - #LearnBuildTeach',
    'US',
    0,
    1
  ),
  (
    'Jason Lengstorf',
    'https://pbs.twimg.com/profile_images/1757175915388583936/1E4wmnxX_400x400.jpg',
    'I team up with dev-focused companies to make video developers actually want to watch {...💜}',
    'US',
    0,
    1
  ),
  (
    'Tim Benniks',
    'https://pbs.twimg.com/profile_images/1692274401037762560/acc5ihTP_400x400.jpg',
    'Developer Relations lead at @hygraph, @nuxt_js ambassador. @machalliance tech council member. @supabase ambassador. @algolia ambassador.',
    'FR',
    0,
    1
  ),
  (
    'Florin Pop',
    'https://pbs.twimg.com/profile_images/1440624750808625171/7kSNddJC_400x400.jpg',
    'Helping developers learn faster @iCodeThis - 💻 YouTube: http://youtube.com/florinpop',
    'PL',
    0,
    1
  ),
  (
    'Sarah Shook',
    'https://pbs.twimg.com/profile_images/1565800825515130881/3N9B0m27_400x400.jpg',
    'Front end developer | designer | consultant. I create accessible and responsive web apps and streamline processes for a better user experience',
    'US',
    0,
    1
  ),
  (
    'Marc Backes',
    'https://pbs.twimg.com/profile_images/1693878258859700224/q45cX5zU_400x400.jpg',
    'Dev Team Lead ⭐️ / Full-Stack Engineer 🥞 / Vue, Nuxt, Node, TypeScript/ Student Pilot 👨‍✈️ / Co-organizing @BELVue_meetup 💚 / Public speaker, MC 🗣️',
    'LU',
    0,
    1
  ),
  (
    'Chris D',
    'https://pbs.twimg.com/profile_images/1750571156539633665/lvq_p42Q_400x400.jpg',
    '🥑 Senior Dev Advocate at @DigitalOcean',
    'US',
    0,
    1
  ),
  (
    'Ken Wheeler',
    'https://pbs.twimg.com/profile_images/1584343135076892683/3ngvuzH__400x400.jpg',
    'Made a jQuery plugin',
    'US',
    0,
    1
  ),
  (
    'Brittney',
    'https://pbs.twimg.com/profile_images/1599085654746562561/R8D3BpOT_400x400.jpg',
    'DS Eng @Provihq 🧜http://sveltesirens.dev 😺http://codingcat.dev',
    'US',
    0,
    1
  ),
  (
    'Jess Sachs',
    'https://pbs.twimg.com/profile_images/1725706546871521281/R2YP3yfw_400x400.jpg',
    'FOSS nerd - @ionicframework day job - @faker_js, @cypress_io alum, @vuejs ecosystem',
    'US',
    0,
    1
  );

-- add dev technologies
INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('JavaScript', 'Svelte', 'SvelteKit')
WHERE
  dd.name = 'Rich Harris';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN (
    'JavaScript',
    'CSS',
    'HTML',
    'TypeScript',
    'Node.js'
  )
WHERE
  dd.name = 'Wes Bos';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN (
    'JavaScript',
    'CSS',
    'SvelteKit',
    'TypeScript',
    'GraphQL'
  )
WHERE
  dd.name = 'Scott Tolinski';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('Astro', 'SvelteKit', 'JavaScript', 'Next.js')
WHERE
  dd.name = 'James Q Quick';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('HTML', 'CSS', 'JavaScript', 'Astro')
WHERE
  dd.name = 'Jason Lengstorf';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN (
    'Vue.js',
    'Nuxt.js',
    'JavaScript',
    'GraphQL',
    'TypeScript'
  )
WHERE
  dd.name = 'Tim Benniks';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN (
    'JavaScript',
    'React.js',
    'Next.js',
    'CSS',
    'HTML'
  )
WHERE
  dd.name = 'Florin Pop';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('JavaScript', 'React.js', 'CSS', 'HTML', 'a11y')
WHERE
  dd.name = 'Sarah Shook';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('Vue.js', 'Nuxt.js', 'Node.js')
WHERE
  dd.name = 'Marc Backes';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('a11y', 'HTML', 'CSS')
WHERE
  dd.name = 'Chris D';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('React.js', 'JavaScript', 'TypeScript', 'Node.js')
WHERE
  dd.name = 'Ken Wheeler';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('Svelte', 'SvelteKit', 'JavaScript')
WHERE
  dd.name = 'Brittney';

INSERT INTO
  dev_technology (developer_id, technology_id)
SELECT
  dd.id,
  t.id
FROM
  dope_dev dd
  JOIN technology t ON t.name IN ('Cypress', 'JavaScript', 'Vue.js', 'TypeScript')
WHERE
  dd.name = 'Jess Sachs';

-- Addy Osmani
-- Evan You
-- Jake Archibald
-- Paul Irish
-- Rachel Andrew
-- Ryan Dahl
-- Sara Soueidan
-- Sarah Drasner
-- Taylor Bryant