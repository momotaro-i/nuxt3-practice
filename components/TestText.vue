
<script lang="tsx">

export default defineComponent({
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  setup(props:any) {
    return () => (
      <div>
        <div style={{
          fontSize: "24px",
          color: "aqua",
        }}>{props.pageTitle}</div>
      </div>
    )
  },
})
</script>