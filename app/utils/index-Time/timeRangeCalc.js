/**
 * 计算时间
 */
import moment from 'moment'

const timeStrategy = {
  timeStrategyByDay: (val) => {
    // 计算前n天-当前
    return [moment().subtract(val, 'days').format("YYYY-MM-DD"),moment().format("YYYY-MM-DD")]
  },
  timeStrategyByMonth: (val) => {
    // 计算不包括本月的前几个月的时间段
    let endDay = ''
    let endMonth = Number(moment().get('month'))
    let endYear = Number(moment().get('year'))

    if (endMonth <= 0) {
      endDay = `${endYear - 1}-12-${new Date(endYear, 12, 0).getDate()}`
    } else {
      endDay = `${endYear}-${endMonth}-${new Date(endYear, endMonth, 0).getDate()}`
    }
    // console.log(endDay);
    return [moment(endDay).subtract(val, 'month').subtract(-1, 'day').format("YYYY-MM-DD"),moment(endDay).format("YYYY-MM-DD")]
  },
}

const timeRelation = {
  '近30天': timeStrategy.timeStrategyByDay,
  '近3个月': timeStrategy.timeStrategyByMonth,
  '近6个月': timeStrategy.timeStrategyByMonth,
  '近12个月': timeStrategy.timeStrategyByMonth,
}

export const timeRangeCalc = (label) => {
  let num = label.match(/[1-9][0-9]*/g)[0]
  if (!timeRelation[label]) return ''
  return timeRelation[label](num)
}
