import React from 'react'
import { Box, Container } from 'serverless-design-system'

export default ({ children }) => (
  <Container>
    <Box width={1} px={15}>
      { children }
    </Box>
  </Container>
)
