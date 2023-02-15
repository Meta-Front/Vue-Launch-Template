<template>
  <div :class="prefixCls">
    <span> {{ title }}</span>
    <AntSelect
      v-bind="getBindValue"
      :class="`${prefixCls}-select`"
      @change="handleChange"
      :disabled="disabled"
      size="small"
      :options="options"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'

  import { Select as AntSelect } from 'ant-design-vue'
  import { useDesign } from '/@/hooks/web/useDesign'
  import { baseHandler } from '../handler'
  import { HandlerEnum } from '../enum'
  import { SelectValue } from 'ant-design-vue/lib/select'

  export default defineComponent({
    name: 'SelectItem',
    components: { AntSelect },
    props: {
      event: {
        type: Number as PropType<HandlerEnum>
      },
      disabled: {
        type: Boolean
      },
      title: {
        type: String
      },
      def: {
        type: [String, Number] as PropType<string | number>
      },
      initValue: {
        type: [String, Number] as PropType<string | number>
      },
      options: {
        type: Array as PropType<LabelValueOptions>,
        default: () => []
      }
    },
    setup(props) {
      const { prefixCls } = useDesign('setting-select-item')
      const getBindValue = computed(() => {
        return props.def ? { value: props.def, defaultValue: props.initValue || props.def } : {}
      })

      function handleChange(e: SelectValue) {
        props.event && baseHandler(props.event, e)
      }
      return {
        prefixCls,
        handleChange,
        getBindValue
      }
    }
  })
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-setting-select-item';

  .@{prefix-cls} {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    &-select {
      width: 126px;
    }
  }
</style>
