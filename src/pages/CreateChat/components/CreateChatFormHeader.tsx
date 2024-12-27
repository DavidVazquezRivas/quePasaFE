import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { SectionTitle } from '@/components/SectionTitle'
import { ChatTypesEnum } from '@/types/models'

interface CreateChatFormHeaderProps {
  chatType: ChatTypesEnum
  onChatTypeChange: (newValue: ChatTypesEnum) => void
}

export const CreateChatFormHeader: React.FC<CreateChatFormHeaderProps> = ({
  chatType,
  onChatTypeChange,
}) => {
  return (
    <Box component="header" sx={{ width: '100%', marginBottom: 3 }}>
      <SectionTitle title="Create Chat" />
      <Tabs
        value={chatType}
        onChange={(_e, newValue) => onChatTypeChange(newValue)}
        variant="fullWidth"
        TabIndicatorProps={tabIndicatorProps}
        sx={tabsStyle}
      >
        <Tab label="Direct Chat" value={ChatTypesEnum.DIRECT} />
        <Tab label="Group Chat" value={ChatTypesEnum.GROUP} />
      </Tabs>
    </Box>
  )
}

const tabIndicatorProps = {
  style: {
    backgroundColor: 'var(--color-medium-purple)',
  },
}

const tabsStyle = {
  marginBottom: 3,
  '& .Mui-selected': {
    color: 'var(--color-medium-purple) !important',
  },
}
