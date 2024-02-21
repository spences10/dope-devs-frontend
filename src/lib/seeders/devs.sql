-- Insert dope_devs into the dope_dev table with published set to true
INSERT INTO
  dope_dev (name, avatar, bio, country_id, published)
VALUES
  (
    'Wes Bos',
    'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg',
    'Fullstack Dev   ❯ JS⚛ CSS Node   ❯ http://BeginnerJavaScript.com   ❯ http://ReactForBeginners.com   ❯ http://JavaScript30.com   ❯  http://wesbos.com/courses   ❯ 🔥 Tips   ❯   ♥ @KaitBos   ❯ @SyntaxFM',
    'CA',
    1
  ),
  (
    'Rich Harris',
    'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
    'Cheese fan. I work on @sveltejs at @vercel',
    'US',
    1
  ),
  (
    'Scott Tolinski',
    'https://pbs.twimg.com/profile_images/1404817306031562756/5cHmpCuL_400x400.jpg',
    'Creator of @leveluptuts | Co-host of http://Syntax.fm | Youtuber: http://youtube.com/c/leveluptuts | Robotops Crew Bboy clips: http://instagram.com/stolinski/',
    'US',
    1
  );

-- Insert associations into the dev_technology table
INSERT INTO
  dev_technology (developer_id, technology_id)
VALUES
  (1, 88),
  (1, 143),
  (1, 77),
  (1, 117),
  (1, 175),
  (1, 176), -- Wes Bos technologies
  (2, 88),
  (2, 77),
  (2, 44),
  (2, 175),
  (2, 176), -- Rich Harris technologies
  (3, 88),
  (3, 187),
  (3, 73),
  (3, 77),
  (3, 44),
  (3, 175),
  (3, 176) -- Scott Tolinski technologies
;