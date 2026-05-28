const oneDay = 24 * 60 * 60 * 1000 // 一天的 ms 数
const oneHour = 60 * 60 * 1000
const oneMinute = 60000

/**
 * 计算剩余时间
 *
 * @param timeTemp
 * @return {object} computeTimeReturn
 * @return {number} `computeTimeReturn.days`
 * @return {number} `computeTimeReturn.hours`
 * @return {number} `computeTimeReturn.minutes`
 * @return {number} `computeTimeReturn.seconds`
 */
export const computeTime = (timeTemp: number) => {
  const days = ~~(timeTemp / oneDay)
  let leftTime = timeTemp - days * oneDay
  const hours = ~~(leftTime / oneHour)
  leftTime -= hours * oneHour
  const minutes = ~~(leftTime / oneMinute)
  const seconds = ~~((leftTime - minutes * oneMinute) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
