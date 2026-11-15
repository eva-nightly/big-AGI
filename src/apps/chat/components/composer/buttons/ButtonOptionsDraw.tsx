import * as React from 'react';

import { Button, IconButton } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import FormatPaintTwoToneIcon from '@mui/icons-material/FormatPaintTwoTone';

import { PhSlidersHorizontalIcon } from '~/common/components/icons/phosphor/PhSlidersHorizontalIcon';


// @uxid src/apps/chat/components/composer/buttons/ButtonOptionsDraw::ButtonOptionsDraw
export function ButtonOptionsDraw(props: { isMobile?: boolean, onClick: () => void, sx?: SxProps }) {
  return props.isMobile ? (
    <IconButton /* @uxid src/apps/chat/components/composer/buttons/ButtonOptionsDraw::ButtonOptionsDraw.iconbutton */ variant='soft' color='warning' onClick={props.onClick} sx={props.sx}>
      <FormatPaintTwoToneIcon />
    </IconButton>
  ) : (
    <Button /* @uxid src/apps/chat/components/composer/buttons/ButtonOptionsDraw::ButtonOptionsDraw.button */ variant='soft' color='warning' onClick={props.onClick} sx={props.sx} endDecorator={<PhSlidersHorizontalIcon />}>
      Image Settings
    </Button>
  );
}