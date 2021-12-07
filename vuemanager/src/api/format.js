const transformTime = (timestamp) => {
  const dayjs = require('dayjs');
  const utc = require('dayjs/plugin/utc');
  dayjs.extend(utc);
  return dayjs.utc(timestamp).format('YYYY/MM/DD HH:mm:ss');
}
// transformTime('2019-03-06T00:00:00Z') // 2019/03/06 00:00:00

export default transformTime
