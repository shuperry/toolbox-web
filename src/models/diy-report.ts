import { Effect, ImmerReducer } from 'umi'
import { v1 as uuidv1 } from 'uuid'
import { set, get, remove, toString } from 'lodash-es'

import type { ReportComponentType, ReportComponentDataType } from '@/container/diy-report/types'

export interface DiyReportState {
  name: string
  activeComponentId: string
  activeComponentIdx: number
  activeComponentType: string
  components: ReportComponentType[]
  currFormVal: ReportComponentDataType
  errorMsgsForArrField: { [key: string]: string }
}

export interface DiyReportModelType {
  namespace: 'diyReport'
  state: DiyReportState
  effects: {
    query: Effect
  }
  reducers: {
    [key: string]: ImmerReducer<DiyReportState>
  }
}

const DiyReport: DiyReportModelType = {
  namespace: 'diyReport',

  state: {
    name: '',
    activeComponentId: '',
    activeComponentIdx: 0,
    activeComponentType: '',
    components: [],
    currFormVal: {},
    errorMsgsForArrField: {},
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },

  reducers: {
    setActiveComponentIdAndIdx(state, action) {
      if (state.activeComponentId !== action.payload.id) {
        state.activeComponentId = action.payload.id
        state.activeComponentIdx = action.payload.idx
        state.currFormVal = state.components[action.payload.idx].data || {}
        state.errorMsgsForArrField = {}
      }
    },
    setComponents(state, action) {
      state.components = action.payload
    },
    addComponent(state, action) {
      state.components.push(action.payload)

      if (state.components.length === 1) {
        state.activeComponentId = action.payload.id
        state.activeComponentType = action.payload.type
        state.activeComponentIdx = 0
        state.currFormVal = action.payload.data
        state.errorMsgsForArrField = {}
      }
    },
    copyComponent(state, action) {
      state.components.splice(action.payload.idx + 1, 0, action.payload.component)
    },
    removeComponent(state, action) {
      state.components.splice(action.payload.idx, 1)

      // 删除的正好是当前选中的组件, 则默认选中后面的一个组件.
      if (state.activeComponentIdx === action.payload.idx) {
        if (action.payload.idx === state.components.length) {
          // 被删除的正好是最后一个.
          state.activeComponentIdx = state.components.length - 1 < 0 ? 0 : state.components.length - 1
        } else {
          state.activeComponentIdx = action.payload.idx
        }

        if (state.components[state.activeComponentIdx]) {
          state.activeComponentId = state.components[state.activeComponentIdx].id
          state.activeComponentType = state.components[state.activeComponentIdx].type
          state.currFormVal = state.components[state.activeComponentIdx].data
        } else {
          // 删除后没有组件了.
          state.activeComponentId = ''
          state.activeComponentType = ''
          state.currFormVal = {}
        }

        state.errorMsgsForArrField = {}
      } else if (action.payload.idx < state.activeComponentIdx) {
        state.activeComponentIdx -= 1
        state.activeComponentId = state.components[state.activeComponentIdx].id
        state.activeComponentType = state.components[state.activeComponentIdx].type
        state.currFormVal = state.components[state.activeComponentIdx].data
      }
    },
    changeCurrFormValByFieldPath(state, action) {
      set(
        state.currFormVal as {
          [key: string]: unknown
        },
        `${action.payload.fieldPath}`,
        action.payload.val,
      )
    },
    changeComponentDataByFieldPath(state, action) {
      set(state.components[state.activeComponentIdx], `data.${action.payload.fieldPath}`, action.payload.val)
    },
    setErrorMsgsForArrField(state, action) {
      set(state.errorMsgsForArrField, `${action.payload.idx}`, action.payload.msg)
    },
    addArrItemForArrField(state, action) {
      ;(
        (
          state.currFormVal as {
            [key: string]: unknown
          }
        )[action.payload.fieldPath] as Array<any>
      ).push(action.payload.val)
      ;(state.components[state.activeComponentIdx].data as Array<any>)[action.payload.fieldPath].push(
        action.payload.val,
      )
    },
    removeArrItemForArrField(state, action) {
      remove(
        get(
          state.currFormVal as {
            [key: string]: unknown
          },
          action.payload.fieldPath,
        ) as any[],
        (_, i) => i === action.payload.idx,
      )
      remove(
        get(
          state.components[state.activeComponentIdx].data as {
            [key: string]: unknown
          },
          action.payload.fieldPath,
        ) as any[],
        (_, i) => i === action.payload.idx,
      )
    },
    onSortEnd(state, action) {
      if (state.activeComponentIdx === action.payload.oldIndex) {
        state.activeComponentIdx = action.payload.newIndex
      } else if (state.activeComponentIdx === action.payload.newIndex) {
        state.activeComponentIdx = action.payload.oldIndex
      }

      state.components.splice(action.payload.newIndex, 0, state.components.splice(action.payload.oldIndex, 1)[0])
    },
    reStoreReport(state, action) {
      const ids: string[] = []

      state.components = []
      action.payload.val.forEach((item: { [key: string]: unknown }) => {
        item.id = toString(item.id)

        if (!item.id || ids.includes(item.id as string)) {
          item.id = uuidv1()
        }

        if (item.type) {
          state.components.push({
            id: item.id as string,
            type: item.type as string,
            name: (item.name || '') as string,
            data: item,
          })
        }
      })

      if (state.components.length > 0) {
        state.activeComponentIdx = 0
        state.activeComponentId = state.components[state.activeComponentIdx].id
        state.activeComponentType = state.components[state.activeComponentIdx].type
        state.currFormVal = state.components[state.activeComponentIdx].data
      }
    },
  },
}

export default DiyReport
