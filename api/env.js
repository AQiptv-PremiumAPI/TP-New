export default function handler(req, res) {
  res.json({
    token: process.env.TOKEN,
    user: process.env.USER,
    exp: process.env.EXP,
    status: process.env.STATUS
  });
}
