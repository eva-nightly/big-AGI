import * as React from 'react';

import type { DConversationId } from '~/common/stores/chat/chat.conversation';
import { ExternalDocsLink } from '~/common/components/ExternalDocsLink';
import { GoodModal } from '~/common/components/modals/GoodModal';

import { ExportChats, ExportConfig } from './ExportChats';
import { ImportChats, ImportConfig } from './ImportChats';

export type TradeConfig = ImportConfig | ExportConfig;

// @uxid src/modules/trade/TradeModal::TradeModal
export function TradeModal(props: { config: TradeConfig, onConversationActivate: (conversationId: DConversationId) => void, onClose: () => void }) {
  return (
    <GoodModal /* @uxid src/modules/trade/TradeModal::TradeModal.goodmodal */
      open onClose={props.onClose}
      dividers
      title={<>
        <b>{props.config.dir === 'import' ? 'Import ' : props.config.dir === 'export' ? 'Export ' : ''}</b> {(props.config.dir === 'export' && !props.config.exportAll) ? 'conversation' : 'conversations'}
      </>}
      startButton={<ExternalDocsLink level='body-sm' docPage='account-backup'>Learn more</ExternalDocsLink>}
    >

      {props.config.dir === 'import' && (
        <ImportChats /* @uxid src/modules/trade/TradeModal::TradeModal.importchats */ onConversationActivate={props.onConversationActivate} onClose={props.onClose} />
      )}

      {props.config.dir === 'export' && (
        <ExportChats /* @uxid src/modules/trade/TradeModal::TradeModal.exportchats */ config={props.config} onClose={props.onClose} />
      )}

    </GoodModal>
  );
}