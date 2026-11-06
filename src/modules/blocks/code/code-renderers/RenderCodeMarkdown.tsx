import * as React from 'react';

import { Box } from '@mui/joy';

import { RenderMarkdown } from '../../markdown/RenderMarkdown';


// @uxid src/modules/blocks/code/code-renderers/RenderCodeMarkdown::RenderCodeMarkdown
export function RenderCodeMarkdown(props: { mdCode: string }) {
  return (
    <Box className='code-container'>
      <RenderMarkdown content={props.mdCode} noGutter />
    </Box>
  );
}
