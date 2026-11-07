import * as React from 'react';

import { ListItemButton, ListItemDecorator } from '@mui/joy';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import { optimaToggleChromeless, useOptimaChromeless } from './useOptima';


// @uxid src/common/layout/optima/ChromelessItemButton::ChromelessItemButton
export function ChromelessItemButton() {
  const isChromeless = useOptimaChromeless();
  return (
    <ListItemButton onClick={optimaToggleChromeless}>
      <ListItemDecorator>{isChromeless ? <FullscreenExitIcon /> : <FullscreenIcon />}</ListItemDecorator>
      {isChromeless ? 'Exit Focus-mode' : 'Focus mode'}
    </ListItemButton>
  );
}
