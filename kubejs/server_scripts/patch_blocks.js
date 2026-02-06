BlockEvents.modification(event => {
  event.modify('drivebywire:tweaked_controller_hub', block => {
    block.destroySpeed = 0.1
    block.requiredTool = false
  })
})