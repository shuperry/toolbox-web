import Img from '@/components/img'

import styles from './index.less'

/**
 * 图片组件
 *
 */
const sizeMap = {
  emoji_bad: 1,
  emoji_behind: 1,
  emoji_best: 1,
  emoji_good: 1,
  emoji_norm: 1,
  emoji_poor: 1,
  emoji_wonderful: 1,
  gender_female: 2,
  gender_male: 2,
  perceptual_reasoning: 3,
  processing_speed: 3,
  speech_comprehension: 3,
  work_memory: 3,
  evaluation_structure: 4,
  normal_distribution: 5,
  thinking_guide: 6,
  iceberg: 7,
  brain: 8,
  davinci: 9,
  music_level: 10,
  music_1: 11,
  music_2: 12,
  music_7: 13,
  music_3: 14,
  music_4: 15,
  music_5: 16,
  music_6: 17,
  albert_einstein: 18,
  career_anchor: 19, // 职业锚.
  career_anchor_independent_media: 20, // 职业锚-自主独立型-媒体.
  career_anchor_challenge_sportsman: 21, // 职业锚-挑战型-运动员.
  career_anchor_life_parents: 22, // 职业锚-生活型-父母.
  career_anchor_tech_function: 23, // 职业锚-技术职能型.
  career_anchor_manage_entrepreneur: 24, // 职业锚-管理型-企业家.
  career_anchor_manage_manager: 25, // 职业锚-管理型-管理者.
  career_anchor_service_doctor: 26, // 职业锚-服务奉献型-医生.
  career_anchor_stable_civil_servant: 27, // 职业锚-安全稳定型-公务员.
}

/**
 * 固定图片组件
 * @param {string} data 图片名称
 * 支持: emoji_best (非常优异), emoji_wonderful (优秀), emoji_good (良好), emoji_norm (正常), emoji_poor (欠佳)， emoji_bad (较差), emoji_behind (落后),
 * evaluation_structure（测评结构）, gender_female（性别女）, gender_male（性别男）,
 * normal_distribution（正太分布）, perceptual_reasoning（知觉推理）, processing_speed（架构速度）,
 * speech_comprehension（语言理解）, thinking_guide（思维导图）, work_memory (工作记忆), iceberg (冰山图).
 */
const ReportImg = ({ data = 'evaluation_structure' }) => {
  return (
    <div className={styles['common-img']}>
      <Img className={styles[`size-${sizeMap[data]}`]} src={`/images/report/${data}.png`} alt="图片" />
    </div>
  )
}

export default ReportImg
