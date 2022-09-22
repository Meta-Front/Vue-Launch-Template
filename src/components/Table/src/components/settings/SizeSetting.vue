<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t('component.table.settingDens') }}</span>
    </template>

    <Dropdown placement="bottom" :trigger="['click']" :getPopupContainer="getPopupContainer">
      <ColumnHeightOutlined />
      <template #overlay>
        <AntMenu @click="handleTitleClick" selectable v-model:selectedKeys="selectedKeysRef">
          <MenuItem key="default">
            <span>{{ t('component.table.settingDensDefault') }}</span>
          </MenuItem>
          <MenuItem key="middle">
            <span>{{ t('component.table.settingDensMiddle') }}</span>
          </MenuItem>
          <MenuItem key="small">
            <span>{{ t('component.table.settingDensSmall') }}</span>
          </MenuItem>
        </AntMenu>
      </template>
    </Dropdown>
  </Tooltip>
</template>
<script lang="ts">
  import type { SizeType } from '../../types/table'
  import { defineComponent, ref } from 'vue'
  import { Tooltip, Dropdown, Menu as AntMenu } from 'ant-design-vue'
  import { ColumnHeightOutlined } from '@ant-design/icons-vue'
  import { useI18n } from '/@/hooks/web/useI18n'
  import { useTableContext } from '../../hooks/useTableContext'
  import { getPopupContainer } from '/@/utils'
  import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface'

  export default defineComponent({
    name: 'SizeSetting',
    components: {
      ColumnHeightOutlined,
      Tooltip,
      Dropdown,
      AntMenu,
      MenuItem: AntMenu.Item
    },
    setup() {
      const table = useTableContext()
      const { t } = useI18n()

      const selectedKeysRef = ref<SizeType[]>([table.getSize()])

      function handleTitleClick({ key }: MenuInfo) {
        const _key = key as SizeType
        selectedKeysRef.value = [_key]
        table.setProps({
          size: _key
        })
      }

      return {
        handleTitleClick,
        selectedKeysRef,
        getPopupContainer,
        t
      }
    }
  })
</script>
