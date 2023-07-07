import { Drawer } from "@mui/material"

interface ISidebarProps {
  isOpen: boolean,
  onClose: () => void
}

export const Sidebar = (props: ISidebarProps) => {
  const { isOpen, onClose } = props
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={onClose}
      >
        Sidebar
      </Drawer>
    </>
  )
}
