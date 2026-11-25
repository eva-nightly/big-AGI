import * as React from 'react';

import { ChipExpander } from './ChipExpander';


export function useChipBoolean(text: React.ReactNode, initialExpand = false): [boolean, React.JSX.Element] {

  // state
  const [expanded, setExpanded] = React.useState(initialExpand);

  const component = React.useMemo(() => (
    <ChipExpander /* @uxid src/common/components/useChipBoolean::useChipBoolean.chipexpander */ text={text} expanded={expanded} onToggleExpanded={() => setExpanded(on => !on)} />
  ), [expanded, text]);

  return [expanded, component];
}