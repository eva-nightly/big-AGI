# Components

Every row is an applied `// @uxid` identifier. Ids are path-derived and permanent.

| identifier | file | flow | type | description |
| --- | --- | --- | --- | --- |
| `pages/_app::Big_AGI_App` | pages/_app.tsx | all | component | Arrow function component. Props: Component, emotionCache, pageProps. Renders: title, meta, Head, ProviderTheming, ProviderSingleTab, ProviderBackendCapabilities, ErrorBoundary, ProviderBootstrapLogic. |
| `pages/_document::MyDocument` | pages/_document.tsx | all | component | Function component. Props: emotionStyleTags. Renders: meta, link, script, body, Html, Head, InitColorSchemeScript, Main, +1 more. |
| `pages/dev/debug::AppDebug` | pages/dev/debug.tsx | all | component | Function component. Hooks: useState, useCapabilityBrowserSpeechRecognition, useCapabilityTextToImage. Renders: AppPlaceholder, Box, Button, DownloadIcon, Card, CardContent. |
| `pages/dev/debug::DebugCard` | pages/dev/debug.tsx | all | component | Function component. Renders: Box, Typography. |
| `pages/dev/debug::DebugJsonCard` | pages/dev/debug.tsx | all | component | Function component. Renders: DebugCard, Typography. |
| `pages/link/callback_openrouter::CallbackOpenRouterPage` | pages/link/callback_openrouter.tsx | all | component | Function component. Hooks: useQuery, useEffect. Renders: Box, Typography, InlineError. |
| `pages/link/share_target::AppShareTarget` | pages/link/share_target.tsx | all | component | Function component. Hooks: useState, useRouterQuery, useCallback, useEffect. Renders: Box, LogoProgress, Typography, Alert, Button, ArrowBackIcon. |
| `public/closed.html::ClosedPage` | public/closed.html | all | component | Web page at /closed, titled "Closed". 1 interactive element. |
| `public/dev/index.html::DevPage` | public/dev/index.html | all | component | Web page at /dev, titled "big-AGI dev tools". 5 interactive elements. |
| `public/dev/inspect/doctor.html::DevInspectDoctorPage` | public/dev/inspect/doctor.html | all | component | Web page at /dev/inspect/doctor, titled "Inspect · Boot Doctor - big-AGI". 5 interactive elements. |
| `public/dev/inspect/heal.html::DevInspectHealPage` | public/dev/inspect/heal.html | all | component | Web page at /dev/inspect/heal, titled "Inspect · Heal - big-AGI". 7 interactive elements. |
| `public/dev/inspect/logs.html::DevInspectLogsPage` | public/dev/inspect/logs.html | all | component | Web page at /dev/inspect/logs, titled "Inspect · Logs - big-AGI". 6 interactive elements. |
| `public/dev/inspect/storage.html::DevInspectStoragePage` | public/dev/inspect/storage.html | all | component | Web page at /dev/inspect/storage, titled "Inspect · Storage - big-AGI". 3 interactive elements. |
| `src/apps/AppPlaceholder::AppPlaceholder` | src/apps/AppPlaceholder.tsx | all | component | Function component. Hooks: useRouterRoute. Renders: Box, Typography. |
| `src/apps/AppSmallContainer::AppSmallContainer` | src/apps/AppSmallContainer.tsx | all | component | Function component. Props: title, description, children. Renders: Box, Container, Typography. |
| `src/apps/beam/AppBeam::AppBeam` | src/apps/beam/AppBeam.tsx | all | component | Function component. Hooks: useState, useEffect, useIsMobile, useBeamStore, useShallow, useCallback, +1 more. Renders: Button, OptimaToolbarIn, Box, BeamView, Typography. |
| `src/apps/call/AppCall::AppCall` | src/apps/call/AppCall.tsx | all | component | Function component. Hooks: useState, useAppCallStore, useRouterQuery, useEffect. Renders: Sheet, Container, Contacts, CallWizard, Telephone. |
| `src/apps/call/CallWizard::CallWizard` | src/apps/call/CallWizard.tsx | all | component | Function component. Hooks: useState, useCapabilityBrowserSpeechRecognition, useSpeexGlobalEngine, useChatStore, useUICounter, useCallback. Renders: br, Box, Typography, StatusCard, ChatIcon, Button, MicIcon. |
| `src/apps/call/CallWizard::StatusCard` | src/apps/call/CallWizard.tsx | all | component | Function component. Renders: Card, CardContent, ListItemDecorator, Typography, WarningRoundedIcon, CheckRoundedIcon. |
| `src/apps/call/components/CallAvatar::CallAvatar` | src/apps/call/components/CallAvatar.tsx | all | component | Function component. Renders: Avatar, Box. |
| `src/apps/call/components/CallButton::CallButton` | src/apps/call/components/CallButton.tsx | all | component | Function component. Renders: props.Icon, FormControl, IconButton, Typography. |
| `src/apps/call/components/CallMessage::CallMessage` | src/apps/call/components/CallMessage.tsx | all | component | Function component. Renders: Chip. |
| `src/apps/call/components/CallStatus::CallStatus` | src/apps/call/components/CallStatus.tsx | all | component | Function component. Renders: b, Box, Typography, InlineError. |
| `src/apps/call/Contacts::CallContactCard` | src/apps/call/Contacts.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Box, Card, ContactCardAvatar, CardContent, Typography, ContactCardConversationCall. |
| `src/apps/call/Contacts::ContactCardAvatar` | src/apps/call/Contacts.tsx | all | component | Arrow function component. Renders: Avatar, Box. |
| `src/apps/call/Contacts::ContactCardConversationCall` | src/apps/call/Contacts.tsx | all | component | Arrow function component. Renders: Chip, CallIcon. |
| `src/apps/call/Contacts::Contacts` | src/apps/call/Contacts.tsx | all | component | Function component. Hooks: useMockPersonas, useAppCallStore, useConversationsByPersona. Renders: OptimaPanelIn, ContactsMenuItems, Box, IconButton, CallIcon, Typography. |
| `src/apps/call/Contacts::ContactsMenuItems` | src/apps/call/Contacts.tsx | all | component | Function component. Hooks: useAppCallStore. Renders: OptimaPanelGroupedList, MenuItem, ListItemDecorator, Checkbox. |
| `src/apps/call/Telephone::CallMenu` | src/apps/call/Telephone.tsx | all | component | Function component. Hooks: useAppCallStore, useChatMicTimeoutMsValue, useMemo. Renders: OptimaPanelGroupedList, MenuItem, ListItemDecorator, Checkbox, ListItem, FormChipGroupControl. |
| `src/apps/call/Telephone::Telephone` | src/apps/call/Telephone.tsx | all | component | Function component. Hooks: useState, useRef, useChatLLMDropdown, useChatStore, useShallow, useCallback, +7 more. Renders: i, br, OptimaToolbarIn, OptimaPanelIn, CallMenu, Box, Typography, CallAvatar. |
| `src/apps/chat/AppChat::AppChat` | src/apps/chat/AppChat.tsx | all | component | Function component. Hooks: useOverlayComponents, useState, useRef, useIsMobile, useIsTallScreen, useUIComplexityIsMinimal, +8 more. Renders: ConfirmationModal, ChatShortcutsMemo, OptimaToolbarIn, ChatToolbarMemo, OptimaDrawerIn, ChatDrawerMemo. |
| `src/apps/chat/components/ChatBeamWrapper::ChatBeamWrapper` | src/apps/chat/components/ChatBeamWrapper.tsx | all | component | Function component. Hooks: useBeamStore, useCallback, useMemo. Renders: BeamView, Modal, Box, ScrollToBottom, GoodTooltip, IconButton. |
| `src/apps/chat/components/ChatCleanupList::ChatCleanupControls` | src/apps/chat/components/ChatCleanupList.tsx | all | component | Function component. Hooks: useOverlayComponents, useMemo, useCallback. Renders: ConfirmationModal, MessagesSelectionHeader, CleanerMessage. |
| `src/apps/chat/components/ChatMessageList::ChatMessageList` | src/apps/chat/components/ChatMessageList.tsx | all | component | Function component. Hooks: useState, useUIContentScaling, useScrollToBottom, useChatShowSystemMessages, useChatMessageTimestampMode, useChatStore, +9 more. Renders: CMLZeroConversation, Box, PersonaSelector, WhatsNewEmptyChatLine, ERCDiffContextProvider, List. |
| `src/apps/chat/components/ChatPane::ChatPane` | src/apps/chat/components/ChatPane.tsx | all | component | Function component. Hooks: useTheme, useMemo, useIsBeamOpenForConversation, useCallback. Renders: WorkspaceIdProvider, ErrorBoundary, Panel, PaneTitleOverlayMemo, ScrollToBottom, RenderDecayZone. |
| `src/apps/chat/components/composer/actile/ActilePopup::ActilePopup` | src/apps/chat/components/composer/actile/ActilePopup.tsx | all | component | Function component. Hooks: useMemo. Renders: item.Icon, span, b, CloseablePopup, ListItem, Typography, React.Fragment, Sheet, +1 more. |
| `src/apps/chat/components/composer/buttons/ButtonBeam::ButtonBeam` | src/apps/chat/components/composer/buttons/ButtonBeam.tsx | all | component | Function component. Renders: IconButton, ChatBeamIcon, Tooltip, Button. |
| `src/apps/chat/components/composer/buttons/ButtonCall::ButtonCall` | src/apps/chat/components/composer/buttons/ButtonCall.tsx | all | component | Function component. Renders: IconButton, CallIcon, Tooltip, Button. |
| `src/apps/chat/components/composer/buttons/ButtonGroupDrawRepeat::ButtonGroupDrawRepeat` | src/apps/chat/components/composer/buttons/ButtonGroupDrawRepeat.tsx | all | component | Function component. Renders: FormControl, Box, IconButton. |
| `src/apps/chat/components/composer/buttons/ButtonMic::ButtonMic` | src/apps/chat/components/composer/buttons/ButtonMic.tsx | all | component | Function component. Renders: GoodTooltip, IconButton, MicIcon. |
| `src/apps/chat/components/composer/buttons/ButtonMicContinuation::ButtonMicContinuation` | src/apps/chat/components/composer/buttons/ButtonMicContinuation.tsx | all | component | Function component. Renders: Tooltip, IconButton, RepeatOnIcon, RepeatIcon. |
| `src/apps/chat/components/composer/buttons/ButtonMultiChat::ButtonMultiChat` | src/apps/chat/components/composer/buttons/ButtonMultiChat.tsx | all | component | Function component. Renders: IconButton, ChatMulticastOnIcon, FormControl, FormLabel, Box, ChatMulticastOffIcon. |
| `src/apps/chat/components/composer/buttons/ButtonOptionsDraw::ButtonOptionsDraw` | src/apps/chat/components/composer/buttons/ButtonOptionsDraw.tsx | all | component | Function component. Renders: IconButton, FormatPaintTwoToneIcon, Button, PhSlidersHorizontalIcon. |
| `src/apps/chat/components/composer/Composer::Composer` | src/apps/chat/components/composer/Composer.tsx | all | component | Function component. Hooks: useState, useChatExecuteMode, useRef, useOverlayComponents, useRouterQuery, useUXLabsStore, +30 more. Renders: span, ConfirmationModal, SendIcon, PsychologyIcon, ChatBeamIcon, PhPaintBrush, TelegramIcon. |
| `src/apps/chat/components/composer/composer.input-enhancers::VideoUrlDisabledHint` | src/apps/chat/components/composer/composer.input-enhancers.tsx | all | component | Function component. Props: props: AttachmentEnhancerHintItem. Hooks: useModelsStore. Renders: img, Box, PlayArrowRoundedIcon, Typography, Button, IconButton, CloseRoundedIcon. |
| `src/apps/chat/components/composer/composer.input-enhancers::VideoUrlPendingChip` | src/apps/chat/components/composer/composer.input-enhancers.tsx | all | component | Function component. Renders: img, Box, PlayArrowRoundedIcon, YouTubeIcon, Tooltip, Typography, IconButton. |
| `src/apps/chat/components/composer/ComposerDock::ComposerDock` | src/apps/chat/components/composer/ComposerDock.tsx | all | component | Function component. Hooks: useState, useIsBeamOpenForConversation, useLiveSvgStore, useOptimaChromeless, useComposerAutoHide, useMemo. Renders: div, Box. |
| `src/apps/chat/components/composer/llmattachments/ComposerAttachmentDraftsList::ComposerAttachmentDraftsList` | src/apps/chat/components/composer/llmattachments/ComposerAttachmentDraftsList.tsx | all | component | Function component. Hooks: useMemo, useCallback. Renders: LLMAttachmentsPromptsButtonMemo, MessageFragmentOrderControl, ListDivider, AttachmentDraftsList, Box. |
| `src/apps/chat/components/composer/llmattachments/LLMAttachmentsPromptsButton::LLMAttachmentsPromptsButton` | src/apps/chat/components/composer/llmattachments/LLMAttachmentsPromptsButton.tsx | all | component | Function component. Props: data. Renders: Box, BigAgiSquircleIcon, IconButton, CircularProgress, AutoFixHighIcon, GoodTooltip. |
| `src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl::MessageFragmentOrderControl` | src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl.tsx | all | component | Function component. Hooks: useDndDefaultSensors, useUserMessageFragmentPlacement, useMemo, useCallback. Renders: Box, Typography, Button, DndContext, SortableContext, SortableGroupRow. |
| `src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl::SortableGroupRow` | src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl.tsx | all | component | Function component. Hooks: useDndDragHandleSortable. Renders: Box, ListItemDecorator, Icon. |
| `src/apps/chat/components/composer/textarea/ComposerTextAreaActions::ComposerTextAreaActions` | src/apps/chat/components/composer/textarea/ComposerTextAreaActions.tsx | all | component | Function component. Renders: Box, Button. |
| `src/apps/chat/components/composer/textarea/ComposerTextAreaDrawActions::ComposerTextAreaDrawActions` | src/apps/chat/components/composer/textarea/ComposerTextAreaDrawActions.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Box, Button, AutoFixHighIcon. |
| `src/apps/chat/components/composer/tokens/TokenBadge::TokenBadge` | src/apps/chat/components/composer/tokens/TokenBadge.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: TokenTooltip, Badge. |
| `src/apps/chat/components/composer/tokens/TokenProgressbar::TokenProgressbar` | src/apps/chat/components/composer/tokens/TokenProgressbar.tsx | all | component | Function component. Hooks: useTheme. Renders: TokenTooltip, Box. |
| `src/apps/chat/components/composer/tokens/TokenTooltip::TokenTooltip` | src/apps/chat/components/composer/tokens/TokenTooltip.tsx | all | component | Function component. Hooks: useUIContentScaling. Renders: Tooltip, Box. |
| `src/apps/chat/components/Ephemerals::EphemeralItem` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Hooks: useCallback. Renders: Box, Typography, IconButton, VerticalSplitIcon, VerticalSplitOutlinedIcon, MaximizeIcon. |
| `src/apps/chat/components/Ephemerals::Ephemerals` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Hooks: useUIPreferencesStore. Renders: Sheet, EphemeralItem. |
| `src/apps/chat/components/Ephemerals::ListRenderer` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Props: name, list. Renders: b, StateLine. |
| `src/apps/chat/components/Ephemerals::ObjectRenderer` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Props: name. Renders: b, i, StateLine. |
| `src/apps/chat/components/Ephemerals::PrimitiveRender` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Props: name, value. Renders: b, i, StateLine. |
| `src/apps/chat/components/Ephemerals::StateRenderer` | src/apps/chat/components/Ephemerals.tsx | all | component | Function component. Renders: pre, Box, ScaledTextBlockRenderer, Typography, PrimitiveRender, ListRenderer, ObjectRenderer. |
| `src/apps/chat/components/layout-bar/ChatBarAltTitle::ChatBarAltTitle` | src/apps/chat/components/layout-bar/ChatBarAltTitle.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Box, Typography, FadeInButton, AutoFixHighIcon. |
| `src/apps/chat/components/layout-bar/ChatBarBeam::ChatBarBeam` | src/apps/chat/components/layout-bar/ChatBarBeam.tsx | all | component | Function component. Hooks: useState, useBeamStore, useShallow, useCallback, useGlobalShortcuts, useMemo. Renders: Box, GoodTooltip, IconButton, ChatBarBreadcrumbs, Typography, KeyStroke. |
| `src/apps/chat/components/layout-bar/ChatBarBreadcrumbs::ChatBarBreadcrumbs` | src/apps/chat/components/layout-bar/ChatBarBreadcrumbs.tsx | all | component | Function component. Hooks: useEditableConversationTitle. Renders: InlineTextarea, Box, TooltipOutlined, AppBreadcrumbs. |
| `src/apps/chat/components/layout-bar/ChatBarChat::ChatBarChat` | src/apps/chat/components/layout-bar/ChatBarChat.tsx | all | component | Function component. Hooks: useChatShowToolbarNavigation, useConversationTitle, useChatLLMDropdown, usePersonaIdDropdown, useFolderDropdown. Renders: ChatBarBreadcrumbs. |
| `src/apps/chat/components/layout-bar/ChatToolbar::ChatToolbar` | src/apps/chat/components/layout-bar/ChatToolbar.tsx | all | component | Function component. Hooks: useMemo, useConversationTitle, useIsBeamOpenForConversation. Renders: ChatBarBeam, ChatBarChat. |
| `src/apps/chat/components/layout-bar/useLLMDropdown::LLMDropdown` | src/apps/chat/components/layout-bar/useLLMDropdown.tsx | all | component | Function component. Hooks: useState, useUIComplexityMode, useCallback, useRef, useMemo. Renders: GoodTooltip, Box, KeyStroke, IconButton, PhGearSixIcon, DebouncedInputMemo. |
| `src/apps/chat/components/layout-bar/usePersonaDropdown::PersonaDropdown` | src/apps/chat/components/layout-bar/usePersonaDropdown.tsx | all | component | Function component. Hooks: usePurposeStore, useUIComplexityIsMinimal, useMemo, useCallback. Renders: OptimaBarDropdownMemo. |
| `src/apps/chat/components/layout-drawer/ChatDrawer::ChatDrawer` | src/apps/chat/components/layout-drawer/ChatDrawer.tsx | all | component | Function component. Hooks: useState, useChatDrawerFilters, useChatFolderActive, useChatDrawerRenderItems, useUIPreferencesStore, useShallow, +5 more. Renders: Dropdown, MenuButton, MoreVertIcon, Menu, ListItem, Typography. |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem::ChatDrawerItem` | src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback, useMemo. Renders: em, ListItemDecorator, ChatBeamIcon, Avatar, VisibilityOffIcon, TelegramIcon, Typography. |
| `src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning::ChatDrawerStorageWarning` | src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning.tsx | all | component | Function component. Hooks: useState, useChatStorageWarning, useCallback. Renders: Box, Typography, IconButton, CloseRoundedIcon, StorageWarningConfirmationModal. |
| `src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning::StorageWarningConfirmationModal` | src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning.tsx | all | component | Function component. Hooks: useState. Renders: b, GoodModal, ModalClose, Box, Typography, Input, Button. |
| `src/apps/chat/components/layout-drawer/folders/ChatFolderList::ChatFolderList` | src/apps/chat/components/layout-drawer/folders/ChatFolderList.tsx | all | component | Function component. Hooks: useState, useDndDefaultSensors, useMemo, useCallback. Renders: Box, List, ListItem, ListItemButton, CreateNewFolderOutlinedIcon, ListItemDecorator. |
| `src/apps/chat/components/layout-drawer/folders/FolderListItem::FolderListItem` | src/apps/chat/components/layout-drawer/folders/FolderListItem.tsx | all | component | Function component. Hooks: useState, useSortable, useCallback. Renders: span, ListItem, IconButton, MoreVertIcon, ListItemButton, ListItemDecorator, FolderIcon. |
| `src/apps/chat/components/layout-panel/ActionFolder::ActionFolder` | src/apps/chat/components/layout-panel/ActionFolder.tsx | all | component | Function component. Props: conversationId, disabled. Hooks: useState, useChatFoldersForConversation, useCallback. Renders: span, MenuItem, ListItemDecorator, ButtonIcon, FoldersSelectPopup. |
| `src/apps/chat/components/layout-panel/ChatPanel::ChatPanel` | src/apps/chat/components/layout-panel/ChatPanel.tsx | all | component | Function component. Hooks: useChatShowSystemMessages, useChatStore, useShallow, useCallback. Renders: b, OptimaPanelGroupedList, WindowSplitControls, ChromelessItemButton, Box, MenuItem, ListItemDecorator. |
| `src/apps/chat/components/layout-panel/ChatPanel::VariformPaneFrame` | src/apps/chat/components/layout-panel/ChatPanel.tsx | all | component | Function component. Renders: OptimaPanelGroupGutter, Typography, Box. |
| `src/apps/chat/components/layout-panel/WindowSplitControls::WindowSplitControls` | src/apps/chat/components/layout-panel/WindowSplitControls.tsx | all | component | Function component. Hooks: usePaneDuplicateOrClose, useCallback. Renders: ListItem, Tooltip, IconButton, AddIcon, ListItemButton, ListItemDecorator. |
| `src/apps/chat/components/live-svg/LiveSvgAnimator::LiveSvgAnimator` | src/apps/chat/components/live-svg/LiveSvgAnimator.tsx | all | component | Function component. Hooks: useLiveSvgStore, useShallow, useRef, useEffect, useState, useLLM, +2 more. Renders: Box, Typography, Textarea, Tooltip, Chip, Button. |
| `src/apps/chat/components/live-svg/LiveSvgAnimator::Stat` | src/apps/chat/components/live-svg/LiveSvgAnimator.tsx | all | component | Function component. Renders: Box, Typography. |
| `src/apps/chat/components/live-svg/LiveSvgAnimator::TpsSparkline` | src/apps/chat/components/live-svg/LiveSvgAnimator.tsx | all | component | Function component. Renders: Box, Typography. |
| `src/apps/chat/components/message/BlockOpContinue::BlockOpContinue` | src/apps/chat/components/message/BlockOpContinue.tsx | all | component | Function component. Renders: Box, ScaledTextBlockRenderer, Chip. |
| `src/apps/chat/components/message/BlockOpOptions::BlockOpOptions` | src/apps/chat/components/message/BlockOpOptions.tsx | all | component | Function component. Hooks: useMemo. Renders: Box, Button. |
| `src/apps/chat/components/message/BlockOpResolveVertexAILinks::BlockOpResolveVertexAILinks` | src/apps/chat/components/message/BlockOpResolveVertexAILinks.tsx | all | component | Function component. Hooks: useMutation. Renders: Box, Chip, CircularProgress, LinkIcon. |
| `src/apps/chat/components/message/BlockOpUpstreamResume::BlockOpUpstreamResume` | src/apps/chat/components/message/BlockOpUpstreamResume.tsx | all | component | Function component. Hooks: useState, useCallback, useEffect. Renders: Box, ButtonGroup, Tooltip, Button, PlayArrowRoundedIcon, DownloadIcon. |
| `src/apps/chat/components/message/ChatMessage::ChatMessage` | src/apps/chat/components/message/ChatMessage.tsx | all | component | Function component. Hooks: useRef, useState, useUIPreferencesStore, useShallow, useERCDiffActions, useUXLabsStore, +8 more. Renders: Box, CMMobileHeader, Button, CloseRoundedIcon, CheckRoundedIcon, CMDesktopAvatar. |
| `src/apps/chat/components/message/ChatMessage::CMDesktopAvatar` | src/apps/chat/components/message/ChatMessage.tsx | all | component | Wrapped component. Renders: Box, IconButton, MoreVertIcon, TooltipOutlined, Typography. |
| `src/apps/chat/components/message/ChatMessage::CMMobileHeader` | src/apps/chat/components/message/ChatMessage.tsx | all | component | Wrapped component. Renders: Box, Typography, TimeAgo, Button, CloseRoundedIcon, CheckRoundedIcon. |
| `src/apps/chat/components/message/ChatMessageBubble::ChatMessageBubble` | src/apps/chat/components/message/ChatMessageBubble.tsx | all | component | Function component. Hooks: useCallback. Renders: Popper, ClickAwayListener, Box, Tooltip, IconButton, ReplyAllRoundedIcon. |
| `src/apps/chat/components/message/ChatMessageInfoPopup::ChatMessageInfoPopup` | src/apps/chat/components/message/ChatMessageInfoPopup.tsx | all | component | Function component. Hooks: useLLMExists, useCallback. Renders: div, GoodModal, Box, VendorIcon, Typography, Link, TooltipOutlined. |
| `src/apps/chat/components/message/ChatMessageMenu::ChatMessageMenu` | src/apps/chat/components/message/ChatMessageMenu.tsx | all | component | Function component. Hooks: useUIPreferencesStore, useSubMenuHost, useCallback. Renders: span, SubMenuHost, CloseablePopup, ListItem, Typography, Box, TooltipOutlined. |
| `src/apps/chat/components/message/ChatMessageTimestamp::ChatMessageTimestamp` | src/apps/chat/components/message/ChatMessageTimestamp.tsx | all | component | Function component. Renders: time, span, Typography. |
| `src/apps/chat/components/message/CleanerMessage::CleanerMessage` | src/apps/chat/components/message/CleanerMessage.tsx | all | component | Function component. Hooks: useCallback, useMemo. Renders: span, ListItem, Box, Checkbox, TokenBadgeMemo, Chip, TextFieldsIcon. |
| `src/apps/chat/components/message/CleanerMessage::MessagesSelectionHeader` | src/apps/chat/components/message/CleanerMessage.tsx | all | component | Arrow function component. Renders: Sheet, Checkbox, Box, Button, VisibilityIcon, VisibilityOffIcon. |
| `src/apps/chat/components/message/CMEditAttach::CMEditAttach` | src/apps/chat/components/message/CMEditAttach.tsx | all | component | Function component. Hooks: useState, useEffect, useAttachmentDrafts, useBrowseCapability, useAttachHandler_Files, useAttachHandler_CameraOpen, +4 more. Renders: AttachmentSourcesMemo, AttachmentDraftsList, Button, CheckRoundedIcon, Divider, Box. |
| `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton::DocAttachmentDeleteButton` | src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton.tsx | all | component | Function component. Renders: Box, ConfirmIconButton. |
| `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton::DocAttachmentFragmentButton` | src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton.tsx | all | component | Function component. Hooks: useLiveFileMetadata, useCallback, useMemo. Renders: span, Box, Button, Icon, TooltipOutlined, LiveFileIcon, DocAttachmentDeleteButton. |
| `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentPane::DocAttachmentFragmentPane` | src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentPane.tsx | all | component | Wrapped component. Hooks: useState, useContextWorkspaceId, useScrollToBottom, useCallback, useLiveFileSync, useArmedConfirm, +1 more. Renders: div, Box, Switch, Tooltip, TitleIcon, Typography, InlineTextarea. |
| `src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments::DocumentAttachmentFragments` | src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments.tsx | all | component | Wrapped component. Hooks: useState, useDndDefaultSensors, useMemo, useCallback, useEffect. Renders: Box, DocAttachmentFragmentButton, Button, DndContext, SortableContext, SortableDocAttachmentButton. |
| `src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments::SortableDocAttachmentButton` | src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments.tsx | all | component | Function component. Hooks: useDndDragHandleSortable. Renders: Box, DocAttachmentFragmentButton. |
| `src/apps/chat/components/message/fragments-attachment-doc/livefile-sync/LiveFileControlButton::LiveFileControlButton` | src/apps/chat/components/message/fragments-attachment-doc/livefile-sync/LiveFileControlButton.tsx | all | component | Function component. Hooks: useCallback, useDragDropDataTransfer. Renders: Box, TooltipOutlined, Button, LiveFileIcon, LiveFileChooseIcon. |
| `src/apps/chat/components/message/fragments-attachment-edit/EditAttachmentFragments::EditAttachmentFragments` | src/apps/chat/components/message/fragments-attachment-edit/EditAttachmentFragments.tsx | all | component | Function component. Hooks: useState, useRef, useDndDefaultSensors, useMemo, useCallback. Renders: Sheet, Box, DndContext, SortableContext, SortableImageAttachmentCard, SortableDocAttachmentButton. |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageAttachmentCard` | src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx | all | component | Function component. Renders: strong, Box, RenderImageRefDBlob, ImageTitleEditorOverlay, Typography. |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageAttachmentFragments` | src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx | all | component | Function component. Hooks: useState, useDndDefaultSensors, useMemo, useCallback. Renders: Box, ImageAttachmentCard, DndContext, SortableContext, SortableImageAttachmentCard, ViewImageRefPartModal. |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageTitleEditorOverlay` | src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx | all | component | Function component. Hooks: useState, useRef, useCallback. Renders: Sheet, Input, Typography. |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::SortableImageAttachmentCard` | src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx | all | component | Function component. Hooks: useDndDragHandleSortable. Renders: Box, ImageAttachmentCard. |
| `src/apps/chat/components/message/fragments-content/BlockEdit_TextFragment::BlockEdit_TextFragment` | src/apps/chat/components/message/fragments-content/BlockEdit_TextFragment.tsx | all | component | Function component. Hooks: useState, useRef, useEffect, useUIPreferencesStore, useCallback, useGlobalShortcuts, +1 more. Renders: small, BlocksTextarea. |
| `src/apps/chat/components/message/fragments-content/BlockOpEmpty::BlockOpEmpty` | src/apps/chat/components/message/fragments-content/BlockOpEmpty.tsx | all | component | Function component. Hooks: useOverlayComponents, useCallback. Renders: ConfirmationModal, Box, ScaledTextBlockRenderer, Chip, DeleteForeverIcon. |
| `src/apps/chat/components/message/fragments-content/BlockPartError_NetDisconnected::BlockPartError_NetDisconnected` | src/apps/chat/components/message/fragments-content/BlockPartError_NetDisconnected.tsx | all | component | Function component. Hooks: useLLM, useModelServiceClientSideFetch. Renders: div, strong, li, Alert, Box, WifiOffRoundedIcon, FormHelperText, Switch. |
| `src/apps/chat/components/message/fragments-content/BlockPartError_RequestExceeded::BlockPartError_RequestExceeded` | src/apps/chat/components/message/fragments-content/BlockPartError_RequestExceeded.tsx | all | component | Function component. Hooks: useLLM, useModelServiceClientSideFetch. Renders: div, strong, li, Alert, WarningRoundedIcon, Box, FormHelperText, Switch. |
| `src/apps/chat/components/message/fragments-content/BlockPartError::BlockPartError` | src/apps/chat/components/message/fragments-content/BlockPartError.tsx | all | component | Function component. Renders: BlockPartError_NetDisconnected, BlockPartError_RequestExceeded, ScaledTextBlockRenderer. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::AnthropicFileChip` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Hooks: useState, useOverlayComponents, useAIPreferencesStore, useQuery, useCallback. Renders: br, b, div, ConfirmationModal, HostedFileChip, TimeAgo, MenuItem, ListItemDecorator, +1 more. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::BlockPartHostedResource` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Hooks: useCallback, useLlmServiceAccess. Renders: UrlVideoChip, AnthropicFileChip, OpenAIContainerFileChip, GeminiFileChip, NoAccessChip. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::GeminiFileChip` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Hooks: useState, useQuery, useCallback. Renders: HostedFileChip, TimeAgo, HostedFileChipButton, PlayArrowRoundedIcon. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::NoAccessChip` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Renders: Sheet, AttachFileRoundedIcon, Typography. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::OpenAIContainerFileChip` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Hooks: useState, useCallback, useQuery, useHostedLinkRegister, useEffect. Renders: span, HostedFileChip. |
| `src/apps/chat/components/message/fragments-content/BlockPartHostedResource::UrlVideoChip` | src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx | all | component | Function component. Renders: img, Sheet, PlayArrowRoundedIcon, GoodTooltip, Typography, IconButton, VisibilityOffOutlinedIcon. |
| `src/apps/chat/components/message/fragments-content/BlockPartImageRef::BlockPartImageRef` | src/apps/chat/components/message/fragments-content/BlockPartImageRef.tsx | all | component | Function component. Hooks: useState, useCallback, useMemo. Renders: BlocksContainer, RenderImageRefDBlob, RenderImageURL, ViewImageRefPartModal. |
| `src/apps/chat/components/message/fragments-content/BlockPartText_AutoBlocks::BlockPartText_AutoBlocks` | src/apps/chat/components/message/fragments-content/BlockPartText_AutoBlocks.tsx | all | component | Function component. Hooks: useCallback. Renders: AutoBlocksRenderer. |
| `src/apps/chat/components/message/fragments-content/BlockPartToolInvocation::BlockPartToolInvocation` | src/apps/chat/components/message/fragments-content/BlockPartToolInvocation.tsx | all | component | Function component. Hooks: useState, useScaledTypographySx, useMemo, useCallback. Renders: div, BlocksContainer, Box, Sheet, IconButton, KeyboardArrowDownIcon, KeyboardArrowRightIcon. |
| `src/apps/chat/components/message/fragments-content/BlockPartToolInvocation::KeyValueGrid` | src/apps/chat/components/message/fragments-content/BlockPartToolInvocation.tsx | all | component | Function component. Hooks: useMemo. Renders: div, Box, React.Fragment. |
| `src/apps/chat/components/message/fragments-content/BlockPartToolResponse::BlockPartToolResponse` | src/apps/chat/components/message/fragments-content/BlockPartToolResponse.tsx | all | component | Function component. Hooks: useState, useScaledTypographySx, useMemo, useCallback. Renders: BlocksContainer, Box, Sheet, IconButton, KeyboardArrowDownIcon, KeyboardArrowRightIcon. |
| `src/apps/chat/components/message/fragments-content/HostedFileChip::HostedFileChip` | src/apps/chat/components/message/fragments-content/HostedFileChip.tsx | all | component | Function component. Renders: span, div, Sheet, AttachFileRoundedIcon, Box, TooltipOutlined, GoodTooltip, IconButton. |
| `src/apps/chat/components/message/fragments-content/HostedFileChip::HostedFileChipButton` | src/apps/chat/components/message/fragments-content/HostedFileChip.tsx | all | component | Function component. Renders: GoodTooltip, IconButton, CircularProgress. |
| `src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations::BlockPartModelAnnotations` | src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations.tsx | all | component | Function component. Hooks: useState, useScaledTypographySx, useCallback, useRef, useMemo. Renders: span, div, Box, Button, TooltipOutlined, AvatarDomainFavicon, Chip, ContentCopyIcon. |
| `src/apps/chat/components/message/fragments-void/BlockPartModelAux::BlockPartModelAux` | src/apps/chat/components/message/fragments-void/BlockPartModelAux.tsx | all | component | Function component. Hooks: useState, useOverlayComponents, useRef, useMemo, useScaledTypographySx, useCallback. Renders: br, AutoBlocksRenderer, ConfirmationModal, Box, Chip, AllInclusiveIcon, TextFieldsIcon. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Props: placeholderPart, contentScaling, messagePendingIncomplete, showAsDataStreamViz, zenMode, showNotices, +2 more. Hooks: useState, useEffect. Renders: DataStreamViz, RenderChipFollowUp, RenderChipAixControl, RenderDividerNotice, RenderChipNotice, RenderChipListModelOps. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::ModelOperationChip` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Hooks: useState, useVertexLinksForDisplay, useEffect, useMemo. Renders: span, div, Chip, CloseRoundedIcon, CheckRoundedIcon, Icon, Tooltip, RenderCodeMemo. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::OperationsHarakiriChip` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Hooks: useCallback, useMemo. Renders: Chip, ClearAllIcon. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipAixControl` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Props: aixControl, text. Renders: div, Chip, Icon. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipFollowUp` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Renders: Chip, HourglassEmptyIcon. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipListModelOps` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Hooks: useMemo. Renders: div, BlocksContainer, Box, ModelOperationChip, OperationsHarakiriChip. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipNotice` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Props: text, detail, warn, fragmentId, onFragmentDelete. Renders: Chip, WarningRoundedIcon, InfoOutlinedIcon, ChipDelete, Tooltip, RenderNoticeDetail. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderDividerNotice` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Props: text, detail. Renders: div, Chip, PauseRoundedIcon, Box, Divider, TooltipOutlined. |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderNoticeDetail` | src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx | all | component | Function component. Props: detail. Renders: div, span, Box. |
| `src/apps/chat/components/message/in-reference-to/InReferenceToBubble::InReferenceToBubble` | src/apps/chat/components/message/in-reference-to/InReferenceToBubble.tsx | all | component | Function component. Hooks: useCallback. Renders: Box, Tooltip, ReplyRoundedIcon, Typography, IconButton, CloseRoundedIcon. |
| `src/apps/chat/components/message/in-reference-to/InReferenceToList::InReferenceToList` | src/apps/chat/components/message/in-reference-to/InReferenceToList.tsx | all | component | Function component. Renders: Box, InReferenceToBubble. |
| `src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMCitationsNode` | src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx | all | component | Wrapped component. Hooks: useMemo. Renders: BlockPartModelAnnotations. |
| `src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMReasoningNode` | src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx | all | component | Wrapped component. Hooks: useMemo, useCallback. Renders: BlockPartModelAuxMemo. |
| `src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMRenderTreeNodes` | src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx | all | component | Function component. Hooks: useMemo, useDndDefaultSensors, useCallback. Renders: CMEditAttach, BlockPartImageRef, BlockPartError, CMCitationsNode, ImageAttachmentFragments, DocumentAttachmentFragments. |
| `src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMSortableBlock` | src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx | all | component | Function component. Hooks: useDndDragHandleSortable, useOverlayComponents. Renders: IconButton, ConfirmationModal, DeleteOutlineIcon, Box. |
| `src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMTextNode` | src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx | all | component | Wrapped component. Renders: BlockPartText_AutoBlocksMemo. |
| `src/apps/chat/components/messages-list/CMLZeroConversation::CMLZeroConversation` | src/apps/chat/components/messages-list/CMLZeroConversation.tsx | all | component | Function component. Renders: Box, Sheet, Typography, Button, AddIcon. |
| `src/apps/chat/components/PaneTitleOverlay::PaneTitleOverlay` | src/apps/chat/components/PaneTitleOverlay.tsx | all | component | Function component. Hooks: useState, useConversationTitle, useCallback. Renders: Sheet, IconButton, OpenInFullIcon, InlineTextarea, Box, TooltipOutlined. |
| `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector` | src/apps/chat/components/persona-selector/PersonaSelector.tsx | all | component | Function component. Hooks: useState, useUIPreferencesStore, useShallow, useChipBoolean, useChatStore, usePurposeStore, +3 more. Renders: Box, Input, SearchIcon, IconButton, ClearIcon, Typography. |
| `src/apps/chat/components/persona-selector/PersonaSelector::Tile` | src/apps/chat/components/persona-selector/PersonaSelector.tsx | all | component | Function component. Renders: div, Button, Checkbox, Avatar. |
| `src/apps/chat/components/StatusBar::ShortcutItem` | src/apps/chat/components/StatusBar.tsx | all | component | Function component. Hooks: useCallback. Renders: span, props.shortcut.startDecoratorIcon, props.shortcut.endDecoratorIcon, Box, Typography. |
| `src/apps/chat/components/StatusBar::StatusBar` | src/apps/chat/components/StatusBar.tsx | all | component | Function component. Hooks: useOverlayComponents, useUXLabsStore, useGlobalShortcutsStore, useShallow, useCallback. Renders: ConfirmationModal, Box, GoodTooltip, IconButton, CloseRoundedIcon, ExpandLessIcon. |
| `src/apps/chat/execute-mode/ExecuteModeMenu::ExecuteModeMenu` | src/apps/chat/execute-mode/ExecuteModeMenu.tsx | all | component | Function component. Hooks: useUIPreferencesStore. Renders: CloseablePopup, MenuItem, Box, Radio, Typography, KeyStroke. |
| `src/apps/diff/AppDiff::AppDiff` | src/apps/diff/AppDiff.tsx | all | component | Function component. Hooks: useState, useIsMobile, useUIContentScaling, useWordsDifference, useCallback, useMemo. Renders: div, b, AppSmallContainer, Box, FormControl, FormLabelStart, ButtonAttachFilesMemo, Textarea. |
| `src/apps/draw/AppDraw::AppDraw` | src/apps/draw/AppDraw.tsx | all | component | Function component. Hooks: useState, useIsMobile, useProcessingQueue, useCapabilityTextToImage, useDrawSectionDropdown. Renders: OptimaToolbarIn, DrawCreate, DrawGallery. |
| `src/apps/draw/create/ButtonPromptFromIdea::ButtonPromptFromIdea` | src/apps/draw/create/ButtonPromptFromIdea.tsx | all | component | Function component. Hooks: useCallback. Renders: ButtonGroup, Tooltip, Button, LightbulbOutlinedIcon, IconButton, ArrowForwardRoundedIcon. |
| `src/apps/draw/create/ButtonPromptFromX::ButtonPromptFromX` | src/apps/draw/create/ButtonPromptFromX.tsx | all | component | Function component. Renders: Button, ChatOutlinedIcon, InsertPhotoOutlinedIcon. |
| `src/apps/draw/create/DrawProviderConfigure::DrawProviderConfigure` | src/apps/draw/create/DrawProviderConfigure.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Box, ExpanderControlledBox, Card, CardContent, T2IEngineProfileEditor, DrawProviderSelector. |
| `src/apps/draw/create/DrawProviderSelector::DrawProviderSelector` | src/apps/draw/create/DrawProviderSelector.tsx | all | component | Function component. Hooks: useMemo. Renders: option.Icon, FormControl, FormLabel, Select, KeyboardArrowDownIcon, Option, ListItemDecorator. |
| `src/apps/draw/create/DrawSectionHeading::DrawSectionHeading` | src/apps/draw/create/DrawSectionHeading.tsx | all | component | Function component. Renders: div, Card, CardOverflow, AspectRatio, FormatPaintTwoToneIcon, Box, Typography. |
| `src/apps/draw/create/PromptComposer::PromptComposer` | src/apps/draw/create/PromptComposer.tsx | all | component | Function component. Hooks: useState, useDrawIdeas, useUIPreferencesStore, useCallback, useMemo. Renders: Box, Button, AutoFixHighIcon, ButtonGroup, IconButton, RemoveIcon. |
| `src/apps/draw/create/ZeroDrawConfig::ZeroDrawConfig` | src/apps/draw/create/ZeroDrawConfig.tsx | all | component | Function component. Hooks: useCallback. Renders: strong, br, Card, CardContent, Typography, CardActions, Button. |
| `src/apps/draw/create/ZeroGenerations::ZeroGenerations` | src/apps/draw/create/ZeroGenerations.tsx | all | component | Function component. Renders: Card, Typography. |
| `src/apps/draw/DrawCreate::DrawCreate` | src/apps/draw/DrawCreate.tsx | all | component | Function component. Hooks: useState, useProcessingQueue, useCallback. Renders: Box, DrawSectionHeading, ScrollToBottom, ZeroGenerations, ZeroDrawConfig, ScrollToBottomButton. |
| `src/apps/draw/DrawGallery::DrawGallery` | src/apps/draw/DrawGallery.tsx | all | component | Function component. Hooks: useDBAssetsByScopeAndType. Renders: thead, tr, th, tbody, td, picture, Box, Table, +1 more. |
| `src/apps/draw/gallery/ZeroGallery::ZeroGallery` | src/apps/draw/gallery/ZeroGallery.tsx | all | component | Function component. Hooks: useIsMobile, useUIContentScaling. Renders: Card, ScaledTextBlockRenderer. |
| `src/apps/draw/useDrawSectionDropdown::DrawSectionDropdown` | src/apps/draw/useDrawSectionDropdown.tsx | all | component | Function component. Hooks: useCallback. Renders: OptimaBarDropdownMemo. |
| `src/apps/link-chat/AppLinkChat::AppLinkChat` | src/apps/link-chat/AppLinkChat.tsx | all | component | Function component. Hooks: useState, useSharedChatLinkItems, useQuery, useCallback. Renders: title, Head, OptimaDrawerIn, LinkChatDrawer, OptimaPanelIn, LinkChatAppMenuItems, ListPlaceholder. |
| `src/apps/link-chat/AppLinkChat::Centerer` | src/apps/link-chat/AppLinkChat.tsx | all | component | Arrow function component. Renders: Box. |
| `src/apps/link-chat/AppLinkChat::ListPlaceholder` | src/apps/link-chat/AppLinkChat.tsx | all | component | Arrow function component. Renders: Box, Card, CardContent, Typography. |
| `src/apps/link-chat/AppLinkChat::ShowError` | src/apps/link-chat/AppLinkChat.tsx | all | component | Arrow function component. Renders: Centerer, InlineError. |
| `src/apps/link-chat/AppLinkChat::ShowLoading` | src/apps/link-chat/AppLinkChat.tsx | all | component | Arrow function component. Renders: Centerer, LogoProgress, Typography. |
| `src/apps/link-chat/LinkChatAppMenuItems::LinkChatAppMenuItems` | src/apps/link-chat/LinkChatAppMenuItems.tsx | all | component | Function component. Hooks: useChatShowSystemMessages, useCallback. Renders: OptimaPanelGroupedList, MenuItem, Typography, Switch, SettingUIComplexity, SettingUIContentScaling. |
| `src/apps/link-chat/LinkChatDrawer::LinkChatDrawer` | src/apps/link-chat/LinkChatDrawer.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: OptimaDrawerHeader, OptimaDrawerList, ListItem, Typography, Box, ListItemButton. |
| `src/apps/link-chat/LinkChatViewer::LinkChatViewer` | src/apps/link-chat/LinkChatViewer.tsx | all | component | Function component. Hooks: useState, useRef, useIsMobile, useChatShowSystemMessages, useChatStore, useCallback. Renders: Box, Card, CardContent, Typography, TelegramIcon, TimeAgo. |
| `src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilities` | src/apps/llm-capabilities/AppLlmCapabilities.tsx | all | component | Function component. Renders: AppLlmCapabilitiesAllowed, AppLlmCapabilitiesDenied. |
| `src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilitiesAllowed` | src/apps/llm-capabilities/AppLlmCapabilities.tsx | all | component | Function component. Hooks: useState, useRef, useModelsStore, useLlmCapabilitiesStore, useMemo, useCallback, +1 more. Renders: AppPlaceholder, Box, Typography, Sheet, RunControls, ResultsTable. |
| `src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilitiesDenied` | src/apps/llm-capabilities/AppLlmCapabilities.tsx | all | component | Function component. Renders: AppPlaceholder, Alert, BlockIcon. |
| `src/apps/llm-capabilities/components/ResultsTable::ResultsTable` | src/apps/llm-capabilities/components/ResultsTable.tsx | all | component | Function component. Props: props: ResultsTableProps. Hooks: useLlmCapabilitiesStore. Renders: thead, tr, th, span, tbody, td, Sheet, Table, +4 more. |
| `src/apps/llm-capabilities/components/RunControls::RunControls` | src/apps/llm-capabilities/components/RunControls.tsx | all | component | Function component. Props: props: RunControlsProps. Renders: span, Stack, Typography, Select, Option, Button, Tooltip. |
| `src/apps/news/AppNews::AppNews` | src/apps/news/AppNews.tsx | all | component | Function component. Hooks: useState, useIsMobile. Renders: br, Box, Typography, Button, ArrowForwardRoundedIcon, ArrowOutwardRoundedIcon, Container. |
| `src/apps/news/AppNews::AppNewsModuleScope` | src/apps/news/AppNews.tsx | all | component | Module-scope markup (interactive elements not inside a detected component). |
| `src/apps/news/AppNews::BuildInfoCard` | src/apps/news/AppNews.tsx | all | component | Function component. Renders: Card, Typography, BuildInfoSheet. |
| `src/apps/news/AppNews::BuildInfoSheet` | src/apps/news/AppNews.tsx | all | component | Function component. Hooks: useMemo. Renders: strong, br, i, Sheet, TimeAgo, React.Fragment. |
| `src/apps/news/AppNews::NewsCard` | src/apps/news/AppNews.tsx | all | component | Function component. Renders: b, ul, li, item.icon, Card, CardContent, Box, Typography, +2 more. |
| `src/apps/news/bigAgiPro.data::BigAgiProNewsCallout` | src/apps/news/bigAgiPro.data.tsx | all | component | Function component. Renders: b, Card, CardContent, Typography, Grid, Button, RocketLaunchRounded. |
| `src/apps/news/news.data::B` | src/apps/news/news.data.tsx | all | component | Function component. Renders: Typography, ExternalLink. |
| `src/apps/news/news.data::NewsData` | src/apps/news/news.data.tsx | all | component | Module-scope markup (interactive elements not inside a detected component). |
| `src/apps/personas/AppPersonas::AppPersonas` | src/apps/personas/AppPersonas.tsx | all | component | Function component. Hooks: useState. Renders: OptimaDrawerIn, CreatorDrawer, Box, Container, Typography, ListDivider. |
| `src/apps/personas/creator/Creator::Creator` | src/apps/personas/creator/Creator.tsx | all | component | Function component. Hooks: useToggleableBoolean, useState, useUIContentScaling, useLLMSelectLocalState, useLLMSelect, useMemo, +4 more. Renders: em, Typography, Tabs, TabList, Tab, TabPanel, FromYouTube. |
| `src/apps/personas/creator/Creator::PersonaPromptCard` | src/apps/personas/creator/Creator.tsx | all | component | Arrow function component. Renders: Card, Box, Typography, SettingsAccessibilityIcon, GoodTooltip, Button. |
| `src/apps/personas/creator/CreatorDrawer::CreatorDrawer` | src/apps/personas/creator/CreatorDrawer.tsx | all | component | Function component. Hooks: useState, useSimplePersonas, useCallback. Renders: OptimaDrawerHeader, Tooltip, IconButton, DoneIcon, CheckBoxOutlineBlankIcon, OptimaDrawerList. |
| `src/apps/personas/creator/CreatorDrawerItem::CreatorDrawerItem` | src/apps/personas/creator/CreatorDrawerItem.tsx | all | component | Function component. Hooks: useState. Renders: picture, img, TextFieldsIcon, YouTubeIcon, ListItemButton, ListItemDecorator, Checkbox, Box. |
| `src/apps/personas/creator/FromText::FromText` | src/apps/personas/creator/FromText.tsx | all | component | Function component. Hooks: useState. Renders: b, form, Typography, TextFieldsIcon, Textarea, Box, Button. |
| `src/apps/personas/creator/FromYouTube::FromYouTube` | src/apps/personas/creator/FromYouTube.tsx | all | component | Function component. Hooks: useState, useCallback, useYouTubeTranscript. Renders: form, Typography, YouTubeIcon, YouTubeDisabledCard, Input, Box, Button. |
| `src/apps/personas/creator/FromYouTube::YouTubeDisabledCard` | src/apps/personas/creator/FromYouTube.tsx | all | component | Function component. Renders: Card, Typography. |
| `src/apps/personas/creator/FromYouTube::YouTubeVideoTranscriptCard` | src/apps/personas/creator/FromYouTube.tsx | all | component | Function component. Renders: picture, img, Card, Box, Typography, IconButton, CloseRoundedIcon. |
| `src/apps/personas/creator/Viewer::Viewer` | src/apps/personas/creator/Viewer.tsx | all | component | Function component. Hooks: useUIContentScaling, useSimplePersona. Renders: em, strong, Typography, TimeAgo, PersonaPromptCard, Link. |
| `src/apps/settings-modal/AppChatSettingsAI::AppChatSettingsAI` | src/apps/settings-modal/AppChatSettingsAI.tsx | all | component | Function component. Hooks: useChatAutoAI, useAIPreferencesStore. Renders: b, ul, li, hr, div, FormControlDomainModel, CodeIcon, EditRoundedIcon, +3 more. |
| `src/apps/settings-modal/AppChatSettingsAI::FormControlDomainModel` | src/apps/settings-modal/AppChatSettingsAI.tsx | all | component | Function component. Hooks: useModelDomain, useModelDomainAutoModelLabel, useLLMSelect. Renders: FormControl, FormLabelStart. |
| `src/apps/settings-modal/settings-ui/AppChatSettingsUI::AppChatSettingsUI` | src/apps/settings-modal/settings-ui/AppChatSettingsUI.tsx | all | component | Function component. Hooks: useIsMobile, useModelsZeroState, useUIPreferencesStore, useShallow. Renders: FormControl, FormLabelStart, Box, ModelsRefreshIconButton, ModelsSetupButton, ModelsRefreshAlert. |
| `src/apps/settings-modal/settings-ui/AppChatSettingsUI::ModelsSetupButton` | src/apps/settings-modal/settings-ui/AppChatSettingsUI.tsx | all | component | Function component. Renders: Button, BuildCircleIcon. |
| `src/apps/settings-modal/settings-ui/SettingUIComplexity::SettingUIComplexity` | src/apps/settings-modal/settings-ui/SettingUIComplexity.tsx | all | component | Function component. Hooks: useUIPreferencesStore, useShallow. Renders: FormSelectControl. |
| `src/apps/settings-modal/settings-ui/SettingUIComposerQuickButton::SettingUIComposerQuickButton` | src/apps/settings-modal/settings-ui/SettingUIComposerQuickButton.tsx | all | component | Function component. Hooks: useUIPreferencesStore, useShallow. Renders: FormSelectControl. |
| `src/apps/settings-modal/settings-ui/SettingUIContentScaling::SettingUIContentScaling` | src/apps/settings-modal/settings-ui/SettingUIContentScaling.tsx | all | component | Function component. Hooks: useUIPreferencesStore, useShallow. Renders: FormControl, FormLabelStart, Stepper, Step, IconButton. |
| `src/apps/settings-modal/settings-ui/SettingUIMessageTimestamps::SettingUIMessageTimestamps` | src/apps/settings-modal/settings-ui/SettingUIMessageTimestamps.tsx | all | component | Function component. Hooks: useChatMessageTimestampMode. Renders: FormSelectControl. |
| `src/apps/settings-modal/SettingsContent::ChildNav` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: List, ListItem, ListItemButton, ListItemDecorator, ListItemContent, Typography. |
| `src/apps/settings-modal/SettingsContent::SectionHeader` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: ListDivider. |
| `src/apps/settings-modal/SettingsContent::SettingsContent` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: Box. |
| `src/apps/settings-modal/SettingsContent::ToolsDiagnostics` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: SectionHeader, List, ListItem, ListItemButton, ListItemDecorator, TerminalOutlinedIcon. |
| `src/apps/settings-modal/SettingsContent::ToolsSearchBanner` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: Box, Button, SearchIcon, Typography. |
| `src/apps/settings-modal/SettingsContent::VoiceInputBlock` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: Box, VoiceInSettings, ASRxConfigureEngines. |
| `src/apps/settings-modal/SettingsContent::VoiceOutputBlock` | src/apps/settings-modal/SettingsContent.tsx | all | component | Function component. Renders: Box, VoiceOutSettings. |
| `src/apps/settings-modal/SettingsModal::SettingsModal` | src/apps/settings-modal/SettingsModal.tsx | all | component | Function component. Hooks: useIsMobile. Renders: b, GoodModal, AppBreadcrumbs, AppBreadcrumbs.Leaf, Box, DarkModeToggleButton, Button. |
| `src/apps/settings-modal/SettingsNavList::SettingsNavList` | src/apps/settings-modal/SettingsNavList.tsx | all | component | Function component. Renders: List, React.Fragment, ListItem, ListItemButton, ListItemContent. |
| `src/apps/settings-modal/SettingsNavSelect::SettingsNavSelect` | src/apps/settings-modal/SettingsNavSelect.tsx | all | component | Function component. Hooks: useCallback. Renders: Box, IconButton, KeyboardArrowLeftIcon, Select, KeyboardArrowDownIcon, Option. |
| `src/apps/settings-modal/ShortcutsModal::ShortcutKeyCombo` | src/apps/settings-modal/ShortcutsModal.tsx | all | component | Function component. Renders: Box, Chip. |
| `src/apps/settings-modal/ShortcutsModal::ShortcutsModal` | src/apps/settings-modal/ShortcutsModal.tsx | all | component | Function component. Hooks: useIsMobile, useMemo. Renders: GoodModal, Box, React.Fragment, Divider, Typography, ShortcutKeyCombo. |
| `src/apps/settings-modal/UxLabsSettings::UxLabsSettings` | src/apps/settings-modal/UxLabsSettings.tsx | all | component | Function component. Hooks: useIsMobile, useUXLabsStore, useUIPreferencesStore, useShallow. Renders: hr, code, FormSelectControl, SpeedIcon, FormSwitchControl, PhImageSquare, ShortcutIcon, TextFieldsIcon. |
| `src/apps/settings-modal/VoiceInSettings::VoiceInSettings` | src/apps/settings-modal/VoiceInSettings.tsx | all | component | Function component. Hooks: useChatMicTimeoutMs, useCallback. Renders: FormControl, FormLabelStart, LanguageSelect, FormChipControl. |
| `src/apps/settings-modal/VoiceOutSettings::VoiceOutSettings` | src/apps/settings-modal/VoiceOutSettings.tsx | all | component | Function component. Hooks: useChatAutoAI, useSpeexTtsCharLimit, useSpeexEngines. Renders: FormChipControl, FormSwitchControl, SpeexConfigureEngines. |
| `src/apps/tokens/AppTokens::AppTokens` | src/apps/tokens/AppTokens.tsx | all | component | Function component. Hooks: useState, useTokenizerSelect, useEffect. Renders: div, b, span, AppSmallContainer, Box, FormControl, FormLabelStart, Textarea, +1 more. |
| `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::AttachmentDraftButton` | src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx | all | component | Function component. Hooks: useCallback. Renders: span, InputLoadingPlaceholder, Typography, Button, InputErrorIndicator, TooltipOutlined, CircularProgress. |
| `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::InputErrorIndicator` | src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx | all | component | Function component. Renders: WarningRoundedIcon. |
| `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::InputLoadingPlaceholder` | src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx | all | component | Function component. Renders: Sheet, CircularProgress, Typography. |
| `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftMenu::AttachmentDraftMenu` | src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftMenu.tsx | all | component | Function component. Hooks: useState, useUIPreferencesStore, useCallback. Renders: div, span, CloseablePopup, Box, MenuItem, KeyboardArrowLeftIcon, KeyboardArrowRightIcon, ListItem. |
| `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftsList::AttachmentDraftsList` | src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftsList.tsx | all | component | Function component. Hooks: useIsMobile, useOverlayComponents, useState, useRef, useCallback. Renders: span, ConfirmationModal, Box, AttachmentDraftButtonMemo, IconButton, MoreVertIcon, ViewImageRefPartModal. |
| `src/common/attachment-drafts/attachment-sources/AttachmentSources::AttachmentSources` | src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: ButtonAttachFilesMemo, ButtonAttachWebMemo, ButtonAttachGoogleDriveMemo, ButtonAttachClipboardMemo, ButtonAttachScreenCaptureMemo, ButtonAttachCameraMemo. |
| `src/common/attachment-drafts/attachment-sources/AttachmentSources::AutoDownloadToggle` | src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx | all | component | Function component. Hooks: useBrowseStore, useCallback. Renders: ListDivider, ListItem, ListItemDecorator, Checkbox, Box. |
| `src/common/attachment-drafts/attachment-sources/AttachmentSources::LiveFeedButton` | src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx | all | component | Function component. Renders: TooltipOutlined, IconButton, FiberManualRecordIcon. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachCamera::ButtonAttachCamera` | src/common/attachment-drafts/attachment-sources/ButtonAttachCamera.tsx | all | component | Function component. Renders: b, br, IconButton, AddAPhotoIcon, Tooltip, Box, Button, CameraAltOutlinedIcon. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachClipboard::ButtonAttachClipboard` | src/common/attachment-drafts/attachment-sources/ButtonAttachClipboard.tsx | all | component | Function component. Renders: b, br, IconButton, ContentPasteGoIcon, Tooltip, Box, KeyStroke, Button. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachGoogleDrive::ButtonAttachGoogleDrive` | src/common/attachment-drafts/attachment-sources/ButtonAttachGoogleDrive.tsx | all | component | Function component. Renders: b, br, IconButton, AddToDriveRoundedIcon, Button, Tooltip, Box. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachNewDoc::ButtonAttachNew` | src/common/attachment-drafts/attachment-sources/ButtonAttachNewDoc.tsx | all | component | Function component. Renders: b, br, IconButton, AddRoundedIcon, Tooltip, Box, Button. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachScreenCapture::ButtonAttachScreenCapture` | src/common/attachment-drafts/attachment-sources/ButtonAttachScreenCapture.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: b, br, IconButton, ScreenshotMonitorIcon, Tooltip, Box, Button. |
| `src/common/attachment-drafts/attachment-sources/ButtonAttachWeb::ButtonAttachWeb` | src/common/attachment-drafts/attachment-sources/ButtonAttachWeb.tsx | all | component | Function component. Renders: b, br, IconButton, LanguageRoundedIcon, Button, Tooltip, Box, KeyStroke. |
| `src/common/attachment-drafts/attachment-sources/useWebAttachmentModal::WebInputModal` | src/common/attachment-drafts/attachment-sources/useWebAttachmentModal.tsx | all | component | Function component. Hooks: useForm, useFieldArray, useRef, useEffect, useMemo, useCallback. Renders: form, GoodModal, LanguageRoundedIcon, Box, Typography, BrowserUpdatedOutlinedIcon, Chip. |
| `src/common/components/3rdparty/GoogleAnalytics::NextGoogleAnalytics` | src/common/components/3rdparty/GoogleAnalytics.tsx | all | component | Function component. Renders: Script. |
| `src/common/components/3rdparty/GoogleAnalytics::OptionalGoogleAnalytics` | src/common/components/3rdparty/GoogleAnalytics.tsx | all | component | Function component. Renders: NextGoogleAnalytics. |
| `src/common/components/AlreadySet::AlreadySet` | src/common/components/AlreadySet.tsx | all | component | Function component. Renders: Typography, CheckRoundedIcon. |
| `src/common/components/AppBreadcrumbs::AppBreadcrumbs` | src/common/components/AppBreadcrumbs.tsx | all | component | Function component. Hooks: useCallback. Renders: Breadcrumbs, KeyboardArrowRightIcon, AppBreadcrumbs.Link, Typography. |
| `src/common/components/AvatarDomainFavicon::AvatarDomainFavicon` | src/common/components/AvatarDomainFavicon.tsx | all | component | Function component. Renders: Avatar. |
| `src/common/components/ButtonAttachFiles::ButtonAttachFiles` | src/common/components/ButtonAttachFiles.tsx | all | component | Function component. Hooks: useCallback. Renders: b, br, IconButton, AttachFileRoundedIcon, Tooltip, Box, KeyStroke, Button. |
| `src/common/components/ButtonServiceAdd::ButtonServiceAdd` | src/common/components/ButtonServiceAdd.tsx | all | component | Function component. Renders: IconButton, AddIcon, Tooltip, Button. |
| `src/common/components/camera/CameraCaptureModal::CameraCaptureModal` | src/common/components/camera/CameraCaptureModal.tsx | all | component | Function component. Hooks: useState, useRef, useCameraCapture, useCallback, useMemo. Renders: video, Button, FiberManualRecordIcon, CameraEnhanceIcon, Tooltip, IconButton, AddRoundedIcon. |
| `src/common/components/ChipExpander::ChipExpander` | src/common/components/ChipExpander.tsx | all | component | Function component. Renders: Chip, KeyboardArrowDownIcon. |
| `src/common/components/ChipToggleButton::ChipToggleButton` | src/common/components/ChipToggleButton.tsx | all | component | Function component. Renders: Chip, KeyboardArrowDownIcon. |
| `src/common/components/CloseablePopup::CloseablePopup` | src/common/components/CloseablePopup.tsx | all | component | Function component. Hooks: useCallback, useMemo. Renders: Portal, Box, Popup, ClickAwayListener, MenuList. |
| `src/common/components/ConfirmIconButton::ConfirmIconButton` | src/common/components/ConfirmIconButton.tsx | all | component | Function component. Hooks: useArmedConfirm. Renders: Box, TooltipOutlined, IconButton, CloseRoundedIcon, Icon, ConfirmIcon. |
| `src/common/components/ConfirmMenuItem::ConfirmMenuItem` | src/common/components/ConfirmMenuItem.tsx | all | component | Function component. Hooks: useArmedConfirm. Renders: MenuItem, ListItemDecorator, CloseRoundedIcon, Icon, ConfirmIcon. |
| `src/common/components/DarkModeToggleButton::DarkModeToggleButton` | src/common/components/DarkModeToggleButton.tsx | all | component | Function component. Hooks: useColorScheme. Renders: GoodTooltip, Button, IconButton. |
| `src/common/components/DataStreamViz::DataStreamViz` | src/common/components/DataStreamViz.tsx | all | component | Function component. Hooks: useRef, useCallback, useEffect. Renders: canvas, Box. |
| `src/common/components/DebouncedInput::DebouncedInput` | src/common/components/DebouncedInput.tsx | all | component | Arrow function component. Props: props: DebounceInputProps. Hooks: useState, useRef, useCallback, useEffect. Renders: Input, SearchIcon, Box, IconButton, ClearIcon. |
| `src/common/components/diff/DiffViewer::DiffViewer` | src/common/components/diff/DiffViewer.tsx | all | component | Function component. Hooks: useState, useRef, useFullscreenElement, useMemo, useScaledCodeSx, useCallback. Renders: span, div, br, strong, Dropdown, MenuButton, MoreVertIcon, Menu, +2 more. |
| `src/common/components/dnd-dt/GlobalDragOverlay::GlobalDragOverlay` | src/common/components/dnd-dt/GlobalDragOverlay.tsx | all | component | Function component. Hooks: useGlobalDragStore, useEffect. Renders: Box. |
| `src/common/components/dnd-window/DraggableWindowTitle::DraggableWindowTitle` | src/common/components/dnd-window/DraggableWindowTitle.tsx | all | component | Function component. Props: props: DraggableWindowTitleProps. Hooks: useMemo. Renders: Box, DragIndicatorIcon, Typography, IconButton, CloseRoundedIcon. |
| `src/common/components/dnd-window/JoyFloatingWindow::JoyFloatingWindow` | src/common/components/dnd-window/JoyFloatingWindow.tsx | all | component | Function component. Hooks: useState, useRef, useEffect, useCallback. Renders: Portal, Box. |
| `src/common/components/ErrorBoundary::ErrorBoundary` | src/common/components/ErrorBoundary.tsx | all | component | Class component. Renders: div, h2, p, a, details, summary. |
| `src/common/components/ExpanderAccordion::ExpanderAccordion` | src/common/components/ExpanderAccordion.tsx | all | component | Function component. Hooks: useState. Renders: AccordionGroup, Accordion, AccordionSummary, KeyboardArrowDownIcon, AccordionDetails. |
| `src/common/components/ExpanderControlledBox::ExpanderControlledBox` | src/common/components/ExpanderControlledBox.tsx | all | component | Function component. Props: expanded, noContain, children, ...rest. Hooks: useRef, useLayoutEffect. Renders: BoxCollapser, BoxCollapsee. |
| `src/common/components/ExpanderSection::ExpanderSection` | src/common/components/ExpanderSection.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback. Renders: Box, Typography, FormHelperText, UnfoldMoreIcon, KeyboardArrowDownIcon, ExpanderControlledBox. |
| `src/common/components/ExplainerCarousel::AllStepsStepper` | src/common/components/ExplainerCarousel.tsx | all | component | Function component. Renders: Stepper, Step, StepIndicator, CheckRoundedIcon, KeyboardArrowDownIcon, Typography. |
| `src/common/components/ExplainerCarousel::ExplainerCarousel` | src/common/components/ExplainerCarousel.tsx | all | component | Function component. Hooks: useState, useIsMobile, useUIContentScaling, useCallback, useEffect, useGlobalShortcuts, +1 more. Renders: Box, Typography, BigAgiSquircleIcon, ScaledTextBlockRenderer, Button, ChatBeamIcon. |
| `src/common/components/ExternalDocsLink::ExternalDocsLink` | src/common/components/ExternalDocsLink.tsx | all | component | Function component. Renders: ExternalLink. |
| `src/common/components/ExternalLink::ExternalLink` | src/common/components/ExternalLink.tsx | all | component | Function component. Renders: Link, PhBookOpenText, LaunchIcon. |
| `src/common/components/FeatureBadge::FeatureBadge` | src/common/components/FeatureBadge.tsx | all | component | Function component. Hooks: useUIIsDismissed, useEffect. Renders: Badge. |
| `src/common/components/folders/FoldersAddButton::FoldersAddButton` | src/common/components/folders/FoldersAddButton.tsx | all | component | Function component. Props: isAddingFolder, setIsAddingFolder, onFolderCreated. Hooks: useState, useCallback. Renders: ListItem, ListItemDecorator, FolderIcon, InlineTextarea, ListItemButton, AddIcon. |
| `src/common/components/folders/FoldersSelectPopup::FoldersSelectPopup` | src/common/components/folders/FoldersSelectPopup.tsx | all | component | Function component. Props: allFolders, request, onClose. Hooks: useState, useCallback. Renders: span, CloseablePopup, ListItem, ListItemButton, ListItemDecorator, ClearIcon, FolderIcon. |
| `src/common/components/forms/FormChipControl::FormChipControl` | src/common/components/forms/FormChipControl.tsx | all | component | Arrow function component. Hooks: useCallback. Renders: FormControl, FormLabelStart, Box, Chip. |
| `src/common/components/forms/FormChipGroupControl::FormChipGroupControl` | src/common/components/forms/FormChipGroupControl.tsx | all | component | Arrow function component. Renders: FormControl, FormLabelStart, ButtonGroup, Button. |
| `src/common/components/forms/FormChipModelControl::FormChipModelControl` | src/common/components/forms/FormChipModelControl.tsx | all | component | Function component. Hooks: useMemo. Renders: FormChipControl. |
| `src/common/components/forms/FormInputKey::FormInputKey` | src/common/components/forms/FormInputKey.tsx | all | component | Function component. Hooks: useState, useMemo. Renders: input, IconButton, VisibilityOutlinedIcon, VisibilityOffOutlinedIcon, FormControl, Box, TooltipOutlined. |
| `src/common/components/forms/FormLabelStart::FormLabelStart` | src/common/components/forms/FormLabelStart.tsx | all | component | Function component. Renders: div, FormLabel, GoodTooltip, WarningRoundedIcon, InfoOutlinedIcon, FormHelperText. |
| `src/common/components/forms/FormNumberInput::FormNumberInput` | src/common/components/forms/FormNumberInput.tsx | all | component | Function component. Hooks: useCallback. Renders: FormControl, FormLabelStart, Box, Input, Tooltip, IconButton. |
| `src/common/components/forms/FormRadioControl::FormRadioControl` | src/common/components/forms/FormRadioControl.tsx | all | component | Arrow function component. Renders: FormControl, FormLabelStart, RadioGroup, Radio. |
| `src/common/components/forms/FormSelectControl::FormSelectControl` | src/common/components/forms/FormSelectControl.tsx | all | component | Arrow function component. Renders: FormControl, FormLabelStart, Select, Option. |
| `src/common/components/forms/FormSliderControl::FormSliderControl` | src/common/components/forms/FormSliderControl.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback. Renders: FormControl, FormLabelStart, Slider. |
| `src/common/components/forms/FormSwitchControl::FormSwitchControl` | src/common/components/forms/FormSwitchControl.tsx | all | component | Function component. Renders: FormControl, FormLabelStart, Switch. |
| `src/common/components/forms/FormTextField::FormTextField` | src/common/components/forms/FormTextField.tsx | all | component | Function component. Renders: FormControl, FormLabelStart, Input. |
| `src/common/components/forms/SetupFormClientSideToggle::SetupFormClientSideToggle` | src/common/components/forms/SetupFormClientSideToggle.tsx | all | component | Function component. Renders: div, FormControl, FormLabelStart, Tooltip, Switch. |
| `src/common/components/forms/SetupFormCorsHint::SetupFormCorsHint` | src/common/components/forms/SetupFormCorsHint.tsx | all | component | Function component. Renders: Alert, Typography. |
| `src/common/components/forms/SetupFormRefetchButton::SetupFormRefetchButton` | src/common/components/forms/SetupFormRefetchButton.tsx | all | component | Function component. Renders: Box, FormLabel, Button, RefreshIcon. |
| `src/common/components/GitHubProjectIssueCard::GitHubProjectIssueCard` | src/common/components/GitHubProjectIssueCard.tsx | all | component | Arrow function component. Renders: Card, Box, GitHubIcon, Typography, MuiLink. |
| `src/common/components/GoodBadge::GoodBadge` | src/common/components/GoodBadge.tsx | all | component | Function component. Renders: Chip. |
| `src/common/components/GoodTooltip::GoodTooltip` | src/common/components/GoodTooltip.tsx | all | component | Arrow function component. Renders: Tooltip. |
| `src/common/components/icons/3rdparty/AuthGitHubIcon::AuthGitHubIcon` | src/common/components/icons/3rdparty/AuthGitHubIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/3rdparty/AuthGoogleIcon::AuthGoogleIcon` | src/common/components/icons/3rdparty/AuthGoogleIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/3rdparty/DiscordIcon::DiscordIcon` | src/common/components/icons/3rdparty/DiscordIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/big-agi/BigAgiCircleIcon::BigAgiCircleIcon` | src/common/components/icons/big-agi/BigAgiCircleIcon.tsx | all | component | Function component. Renders: circle, path, SvgIcon. |
| `src/common/components/icons/big-agi/BigAgiCircleInnerIcon::BigAgiCircleInnerIcon` | src/common/components/icons/big-agi/BigAgiCircleInnerIcon.tsx | all | component | Function component. Renders: circle, path, SvgIcon. |
| `src/common/components/icons/big-agi/BigAgiSquircleIcon::BigAgiSquircleIcon` | src/common/components/icons/big-agi/BigAgiSquircleIcon.tsx | all | component | Function component. Renders: g, rect, path, SvgIcon. |
| `src/common/components/icons/CalloutTopRightIcon::CalloutTopRightIcon` | src/common/components/icons/CalloutTopRightIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/ChatBeamIcon::ChatBeamIcon` | src/common/components/icons/ChatBeamIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, rect, SvgIcon. |
| `src/common/components/icons/ChatMulticastOffIcon::ChatMulticastOffIcon` | src/common/components/icons/ChatMulticastOffIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/ChatMulticastOnIcon::ChatMulticastOnIcon` | src/common/components/icons/ChatMulticastOnIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/CodiconSplitHorizontal::CodiconSplitHorizontal` | src/common/components/icons/CodiconSplitHorizontal.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/CodiconSplitHorizontalRemove::CodiconSplitHorizontalRemove` | src/common/components/icons/CodiconSplitHorizontalRemove.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/CodiconSplitVertical::CodiconSplitVertical` | src/common/components/icons/CodiconSplitVertical.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/CodiconSplitVerticalRemove::CodiconSplitVerticalRemove` | src/common/components/icons/CodiconSplitVerticalRemove.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/CodiconUnsplit::CodiconUnsplit` | src/common/components/icons/CodiconUnsplit.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/DeviceSymbols::DeviceFormChip` | src/common/components/icons/DeviceSymbols.tsx | all | component | Function component. Renders: Chip. |
| `src/common/components/icons/DeviceSymbols::DeviceFormFactorIcon` | src/common/components/icons/DeviceSymbols.tsx | all | component | Function component. Renders: Icon. |
| `src/common/components/icons/FoldersToggleOff::FoldersToggleOff` | src/common/components/icons/FoldersToggleOff.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/FoldersToggleOn::FoldersToggleOn` | src/common/components/icons/FoldersToggleOn.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/LayoutSidebarRight::LayoutSidebarRight` | src/common/components/icons/LayoutSidebarRight.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/LiveFilePatchIcon::LiveFilePatchIcon` | src/common/components/icons/LiveFilePatchIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/MarkHighlightIcon::MarkHighlightIcon` | src/common/components/icons/MarkHighlightIcon.tsx | all | component | Function component. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhBookOpenText::PhBookOpenText` | src/common/components/icons/phosphor/PhBookOpenText.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhChats::PhChats` | src/common/components/icons/phosphor/PhChats.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhChatsDuotone::PhChatsDuotone` | src/common/components/icons/phosphor/PhChatsDuotone.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhDesktop::PhDesktop` | src/common/components/icons/phosphor/PhDesktop.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhDeviceMobile::PhDeviceMobile` | src/common/components/icons/phosphor/PhDeviceMobile.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhDeviceTablet::PhDeviceTablet` | src/common/components/icons/phosphor/PhDeviceTablet.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhGearSixIcon::PhGearSixIcon` | src/common/components/icons/phosphor/PhGearSixIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhGift::PhGift` | src/common/components/icons/phosphor/PhGift.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhHouse::PhHouse` | src/common/components/icons/phosphor/PhHouse.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhImageSquare::PhImageSquare` | src/common/components/icons/phosphor/PhImageSquare.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhKey::PhKey` | src/common/components/icons/phosphor/PhKey.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhListChecks::PhListChecks` | src/common/components/icons/phosphor/PhListChecks.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhMegaphone::PhMegaphone` | src/common/components/icons/phosphor/PhMegaphone.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhPaintBrush::PhPaintBrush` | src/common/components/icons/phosphor/PhPaintBrush.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhPencilSimple::PhPencilSimple` | src/common/components/icons/phosphor/PhPencilSimple.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhRamble::PhRamble` | src/common/components/icons/phosphor/PhRamble.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhRobot::PhRobot` | src/common/components/icons/phosphor/PhRobot.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhSlidersHorizontalIcon::PhSlidersHorizontalIcon` | src/common/components/icons/phosphor/PhSlidersHorizontalIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhSlidersIcon::PhSlidersIcon` | src/common/components/icons/phosphor/PhSlidersIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhSquaresFour::PhSquaresFour` | src/common/components/icons/phosphor/PhSquaresFour.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhTerminal::PhTerminal` | src/common/components/icons/phosphor/PhTerminal.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhTreeStructure::PhTreeStructure` | src/common/components/icons/phosphor/PhTreeStructure.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhUsers::PhUsers` | src/common/components/icons/phosphor/PhUsers.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhVoice::PhVoice` | src/common/components/icons/phosphor/PhVoice.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/phosphor/PhWrench::PhWrench` | src/common/components/icons/phosphor/PhWrench.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/AlibabaCloudIcon::AlibabaCloudIcon` | src/common/components/icons/vendors/AlibabaCloudIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/AnthropicIcon::AnthropicIcon` | src/common/components/icons/vendors/AnthropicIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ArceeAIIcon::ArceeAIIcon` | src/common/components/icons/vendors/ArceeAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/AzureIcon::AzureIcon` | src/common/components/icons/vendors/AzureIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/BasetenIcon::BasetenIcon` | src/common/components/icons/vendors/BasetenIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/BedrockIcon::BedrockIcon` | src/common/components/icons/vendors/BedrockIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/CerebrasIcon::CerebrasIcon` | src/common/components/icons/vendors/CerebrasIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ChutesAIIcon::ChutesAIIcon` | src/common/components/icons/vendors/ChutesAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ClaudeCrabIcon::ClaudeCrabIcon` | src/common/components/icons/vendors/ClaudeCrabIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, rect, SvgIcon. |
| `src/common/components/icons/vendors/CloudflareIcon::CloudflareIcon` | src/common/components/icons/vendors/CloudflareIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/CohereIcon::CohereIcon` | src/common/components/icons/vendors/CohereIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/DeepseekIcon::DeepseekIcon` | src/common/components/icons/vendors/DeepseekIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ElevenLabsIcon::ElevenLabsIcon` | src/common/components/icons/vendors/ElevenLabsIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/FireworksAIIcon::FireworksAIIcon` | src/common/components/icons/vendors/FireworksAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/GeminiIcon::GeminiIcon` | src/common/components/icons/vendors/GeminiIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: g, path, SvgIcon. |
| `src/common/components/icons/vendors/GroqIcon::GroqIcon` | src/common/components/icons/vendors/GroqIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/InworldIcon::InworldIcon` | src/common/components/icons/vendors/InworldIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/LMStudioIcon::LMStudioIcon` | src/common/components/icons/vendors/LMStudioIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: rect, SvgIcon. |
| `src/common/components/icons/vendors/LocalAIIcon::LocalAIIcon` | src/common/components/icons/vendors/LocalAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/MetaAIIcon::MetaAIIcon` | src/common/components/icons/vendors/MetaAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/MiniMaxIcon::MiniMaxIcon` | src/common/components/icons/vendors/MiniMaxIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/MistralIcon::MistralIcon` | src/common/components/icons/vendors/MistralIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ModularIcon::ModularIcon` | src/common/components/icons/vendors/ModularIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/MoonshotIcon::MoonshotIcon` | src/common/components/icons/vendors/MoonshotIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/NousResearchIcon::NousResearchIcon` | src/common/components/icons/vendors/NousResearchIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/NovitaAIIcon::NovitaAIIcon` | src/common/components/icons/vendors/NovitaAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/NvidiaIcon::NvidiaIcon` | src/common/components/icons/vendors/NvidiaIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/OllamaIcon::OllamaIcon` | src/common/components/icons/vendors/OllamaIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/OpenAIIcon::OpenAIIcon` | src/common/components/icons/vendors/OpenAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/OpenRouterIcon::OpenRouterIcon` | src/common/components/icons/vendors/OpenRouterIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/PerplexityIcon::PerplexityIcon` | src/common/components/icons/vendors/PerplexityIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/SakanaAIIcon::SakanaAIIcon` | src/common/components/icons/vendors/SakanaAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/TogetherIcon::TogetherIcon` | src/common/components/icons/vendors/TogetherIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/XAIIcon::XAIIcon` | src/common/components/icons/vendors/XAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/vendors/ZAIIcon::ZAIIcon` | src/common/components/icons/vendors/ZAIIcon.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/icons/WindowPaneRightOpen::WindowPaneRightOpen` | src/common/components/icons/WindowPaneRightOpen.tsx | all | component | Function component. Props: props: SvgIconProps. Renders: path, SvgIcon. |
| `src/common/components/InlineError::InlineError` | src/common/components/InlineError.tsx | all | component | Function component. Renders: Alert, Typography. |
| `src/common/components/InlineTextarea::InlineTextarea` | src/common/components/InlineTextarea.tsx | all | component | Function component. Hooks: useState, useUIPreferencesStore, useRef, useEffect, useCallback. Renders: Textarea, Box, Button. |
| `src/common/components/InlineTextareaEditable::InlineTextareaEditable` | src/common/components/InlineTextareaEditable.tsx | all | component | Function component. Hooks: useState, useRef, useCallback. Renders: InlineTextarea. |
| `src/common/components/KeyStroke::KeyStroke` | src/common/components/KeyStroke.tsx | all | component | Function component. Renders: Chip. |
| `src/common/components/LanguageSelect::LanguageSelect` | src/common/components/LanguageSelect.tsx | all | component | Function component. Hooks: useUIPreferencesStore, useMemo. Renders: Option, Select, KeyboardArrowDownIcon. |
| `src/common/components/Link::Link` | src/common/components/Link.tsx | all | component | Wrapped component. Hooks: useRouter. Renders: ExternalAnchor, MuiLink, InternalAnchor. |
| `src/common/components/ListItemGroupCollapser::ListItemGroupCollapser` | src/common/components/ListItemGroupCollapser.tsx | all | component | Function component. Hooks: useCallback. Renders: div, ListItem, ListItemButton, IconButton, KeyboardArrowLeftIcon, ExpandMoreIcon. |
| `src/common/components/LiteVideoEmbed::LiteVideoEmbed` | src/common/components/LiteVideoEmbed.tsx | all | component | Function component. Props: props: LiteVideoEmbedProps. Hooks: useRef, useState, useEffect, useCallback. Renders: svg, path, Box. |
| `src/common/components/LogoProgress::LogoProgress` | src/common/components/LogoProgress.tsx | all | component | Function component. Renders: Box, Image, CircularProgress. |
| `src/common/components/MediaStreamPreview::MediaStreamPreview` | src/common/components/MediaStreamPreview.tsx | all | component | Function component. Hooks: useRef, useLayoutEffect. Renders: VideoPreview. |
| `src/common/components/modals/ConfirmationModal::ConfirmationModal` | src/common/components/modals/ConfirmationModal.tsx | all | component | Function component. Renders: GoodModal, WarningRoundedIcon, Divider, Typography, Box, Button. |
| `src/common/components/modals/GoodModal::GoodModal` | src/common/components/modals/GoodModal.tsx | all | component | Function component. Hooks: useState, useCallback, useMemo, useRef. Renders: Modal, ModalOverflow, ModalDialog, Box, Typography, IconButton. |
| `src/common/components/modals/SherpaModal::SherpaModal` | src/common/components/modals/SherpaModal.tsx | all | component | Function component. Hooks: useMemo. Renders: Modal, ModalOverflow, ModalClose. |
| `src/common/components/modals/ViewDocPartModal::ViewDocPartModal` | src/common/components/modals/ViewDocPartModal.tsx | all | component | Function component. Hooks: useIsMobile. Renders: div, GoodModal, Box, ScaledTextBlockRenderer. |
| `src/common/components/modals/ViewImageRefPartModal::ViewImageRefPartModal` | src/common/components/modals/ViewImageRefPartModal.tsx | all | component | Function component. Hooks: useState, useIsMobile, useCallback. Renders: b, GoodModal, AppBreadcrumbs, AppBreadcrumbs.Leaf, Box, Button, FileDownloadOutlinedIcon. |
| `src/common/components/RichMenu::RichMenu` | src/common/components/RichMenu.tsx | all | component | Function component. Renders: Portal, Box, Menu. |
| `src/common/components/RichMenu::RichMenuButton` | src/common/components/RichMenu.tsx | all | component | Function component. Renders: MenuButton. |
| `src/common/components/RichMenu::RichMenuItem` | src/common/components/RichMenu.tsx | all | component | Function component. Renders: props.Icon, MenuItem, ListItemDecorator, Box. |
| `src/common/components/Section::Section` | src/common/components/Section.tsx | all | component | Function component. Hooks: useState. Renders: Box, Stack, FormLabel, IconButton, KeyboardArrowDownIcon, FormHelperText. |
| `src/common/components/snackbar/SnackbarInsert::SnackbarInsert` | src/common/components/snackbar/SnackbarInsert.tsx | all | component | Function component. Hooks: useSnackbarsStore, useMemo. Renders: Snackbar, IconButton, CloseRoundedIcon. |
| `src/common/components/StackedBarBreakdown::StackedBarBreakdown` | src/common/components/StackedBarBreakdown.tsx | all | component | Function component. Props: segments, title, showValues, valueFormatter, description. Renders: Box, Typography. |
| `src/common/components/StarIcons::StarIconUnstyled` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Props: isStarred. Renders: StarIcon, StarBorderIcon. |
| `src/common/components/StarIcons::Starred` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Renders: StarIcon. |
| `src/common/components/StarIcons::StarredNoXL2` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Renders: StarIcon. |
| `src/common/components/StarIcons::StarredState` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Props: isStarred. Renders: Starred, UnStarredNoXL2. |
| `src/common/components/StarIcons::StarredToggle` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Props: isStarred. Renders: StarIcon, StarBorderIcon. |
| `src/common/components/StarIcons::UnStarredNoXL2` | src/common/components/StarIcons.tsx | all | component | Wrapped component. Renders: StarBorderIcon. |
| `src/common/components/SubMenu::SubMenuHost` | src/common/components/SubMenu.tsx | all | component | Function component. Hooks: useSyncExternalStore. Renders: SubMenuHostContext.Provider, CloseablePopup, SubMenuParentIdContext.Provider. |
| `src/common/components/SubMenu::SubMenuItem` | src/common/components/SubMenu.tsx | all | component | Function component. Hooks: useState, useContext, useRef, useCallback, useEffect. Renders: MenuItem, ListItemDecorator, KeyboardArrowRightIcon. |
| `src/common/components/TooltipOutlined::TooltipOutlined` | src/common/components/TooltipOutlined.tsx | all | component | Function component. Renders: Tooltip. |
| `src/common/components/VideoPlayerVimeo::VideoPlayerVimeo` | src/common/components/VideoPlayerVimeo.tsx | all | component | Function component. Renders: LiteVideoEmbed. |
| `src/common/components/VideoPlayerYouTube::VideoPlayerYouTube` | src/common/components/VideoPlayerYouTube.tsx | all | component | Function component. Renders: LiteVideoEmbed. |
| `src/common/from-v1/FromV1ImportBanner::FromV1ImportBanner` | src/common/from-v1/FromV1ImportBanner.tsx | all | component | Function component. Hooks: useState, useUIIsDismissed, useEffect, useCallback. Renders: strong, Sheet, Chip, Typography, Button, FileUploadOutlinedIcon, IconButton. |
| `src/common/layout/container/ContainerLayout::ContainerLayout` | src/common/layout/container/ContainerLayout.tsx | all | component | Function component. Renders: Container, Box. |
| `src/common/layout/optima/bar/OptimaBar::CenterItemsFallback` | src/common/layout/optima/bar/OptimaBar.tsx | all | component | Function component. Renders: Box, Link, BigAgiSquircleIcon, Typography. |
| `src/common/layout/optima/bar/OptimaBar::CenterItemsPortal` | src/common/layout/optima/bar/OptimaBar.tsx | all | component | Function component. Hooks: useOptimaPortalOutRef, useOptimaPortalHasInputs. Renders: Box, CenterItemsFallback. |
| `src/common/layout/optima/bar/OptimaBar::OptimaBar` | src/common/layout/optima/bar/OptimaBar.tsx | all | component | Function component. Hooks: useRef, useOptimaPortalHasInputs, useOptimaPanelOpen. Renders: InvertedBar, InvertedBarCornerItem, IconButton, MenuIcon, ArrowBackIcon, CenterItemsPortal. |
| `src/common/layout/optima/bar/OptimaBarDropdown::OptimaBarDropdown` | src/common/layout/optima/bar/OptimaBarDropdown.tsx | all | component | Function component. Hooks: useState, useImperativeHandle, useCallback, useMemo. Renders: div, Starred, ListItemGroupCollapser, Box, Option, ListItemDecorator, Select. |
| `src/common/layout/optima/ChromelessFloatingButtons::ChromelessFloatingButtons` | src/common/layout/optima/ChromelessFloatingButtons.tsx | all | component | Function component. Renders: IconButton, MenuIcon, FullscreenExitIcon, LayoutSidebarRight. |
| `src/common/layout/optima/ChromelessItemButton::ChromelessItemButton` | src/common/layout/optima/ChromelessItemButton.tsx | all | component | Function component. Hooks: useOptimaChromeless. Renders: ListItemButton, ListItemDecorator, FullscreenExitIcon, FullscreenIcon. |
| `src/common/layout/optima/drawer/DesktopDrawer::DesktopDrawer` | src/common/layout/optima/drawer/DesktopDrawer.tsx | all | component | Function component. Hooks: useOptimaPortalOutRef, useOptimaDrawerOpen, useOptimaDrawerPeeking, useEffect. Renders: DesktopDrawerFixRoot, DesktopDrawerTranslatingSheet. |
| `src/common/layout/optima/drawer/MobileDrawer::DrawerContentPortal` | src/common/layout/optima/drawer/MobileDrawer.tsx | all | component | Function component. Hooks: useOptimaPortalOutRef. Renders: Box. |
| `src/common/layout/optima/drawer/MobileDrawer::MobileDrawer` | src/common/layout/optima/drawer/MobileDrawer.tsx | all | component | Function component. Hooks: useOptimaDrawerOpen. Renders: Drawer, DrawerContentPortal, MobileNavItems. |
| `src/common/layout/optima/drawer/OptimaDrawerHeader::OptimaDrawerHeader` | src/common/layout/optima/drawer/OptimaDrawerHeader.tsx | all | component | Arrow function component. Renders: Box, IconButton, Link, Typography, CloseRoundedIcon. |
| `src/common/layout/optima/drawer/OptimaDrawerList::OptimaDrawerList` | src/common/layout/optima/drawer/OptimaDrawerList.tsx | all | component | Function component. Hooks: useMemo. Renders: List. |
| `src/common/layout/optima/InvertedBar::InvertedBar` | src/common/layout/optima/InvertedBar.tsx | all | component | Arrow function component. Hooks: useTheme, useMemo. Renders: StyledSheet. |
| `src/common/layout/optima/Modals::Modals` | src/common/layout/optima/Modals.tsx | all | component | Function component. Hooks: useOptimaModals, useModelsZeroState, useEffect. Renders: React.Suspense, SettingsModalLazy, ModelsModalsLazy, LogViewerDialog, NewsModals, AixDebuggerDialog. |
| `src/common/layout/optima/nav/BringTheLove::BringTheLove` | src/common/layout/optima/nav/BringTheLove.tsx | all | component | Function component. Hooks: useState, useEffect. Renders: props.icon, Tooltip, DesktopNavIcon, Button. |
| `src/common/layout/optima/nav/DesktopNav::DesktopNav` | src/common/layout/optima/nav/DesktopNav.tsx | all | component | Function component. Hooks: useOptimaDrawerOpen, useOptimaDrawerPeeking, useOverlayComponents, useOptimaModals, useScratchClipVisibility, useHasLLMs, +2 more. Renders: app.iconActive, app.icon, item.iconActive, item.icon, GoodModal, BuildInfoCard, Divider, Tooltip, +2 more. |
| `src/common/layout/optima/nav/MobileNav::MobileNav` | src/common/layout/optima/nav/MobileNav.tsx | all | component | Function component. Hooks: useMemo. Renders: app.icon, MobileNavIcon, InvertedBar, MobileNavGroupBox. |
| `src/common/layout/optima/nav/MobileNavItems::MobileNavItems` | src/common/layout/optima/nav/MobileNavItems.tsx | all | component | Function component. Hooks: useCallback. Renders: app.iconActive, app.icon, Sheet, ButtonGroup, Button, Box, BringTheLove. |
| `src/common/layout/optima/OptimaLayout::OptimaLayout` | src/common/layout/optima/OptimaLayout.tsx | all | component | Function component. Hooks: useRouter, useIsMobile, useGlobalClipboardSaver, useBrowserTranslationWarning, usePWADesktopModeWarning, useGlobalShortcuts, +1 more. Renders: PanelGroup, DesktopNav, DesktopDrawer, PageWrapper, DesktopPanel, MobileDrawer. |
| `src/common/layout/optima/OptimaMOTD::OptimaMOTD` | src/common/layout/optima/OptimaMOTD.tsx | all | component | Function component. Hooks: useMemo, useUIIsDismissed. Renders: TimeAgo, Sheet, Typography, IconButton, CloseRoundedIcon, Box. |
| `src/common/layout/optima/page/OptimaAppPageHeading::OptimaAppPageHeading` | src/common/layout/optima/page/OptimaAppPageHeading.tsx | all | component | Function component. Hooks: useIsMobile. Renders: span, Box, Typography, ListDivider. |
| `src/common/layout/optima/PageCore::PageCore` | src/common/layout/optima/PageCore.tsx | all | component | Arrow function component. Hooks: useOptimaChromeless. Renders: Box, OptimaMOTD, FromV1ImportBanner, ExpanderControlledBox, OptimaBar, ChromelessFloatingButtons. |
| `src/common/layout/optima/PageWrapper::PageWrapper` | src/common/layout/optima/PageWrapper.tsx | all | component | Function component. Hooks: useOptimaDrawerOpen, useOptimaPanelOpen, useUIPreferencesStore. Renders: Box, Container, PageCore. |
| `src/common/layout/optima/panel/DesktopPanel::DesktopPanel` | src/common/layout/optima/panel/DesktopPanel.tsx | all | component | Function component. Hooks: useIsMobile, useUIContentScaling, useOptimaPanelOpen, useEffect. Renders: DesktopPanelFixRoot, DesktopPanelTranslatingSheet, List, PanelContentPortal, WhatsNewPanelRow. |
| `src/common/layout/optima/panel/items/PreferencesListItem::PreferencesListItem` | src/common/layout/optima/panel/items/PreferencesListItem.tsx | all | component | Function component. Hooks: useCallback. Renders: ListItem, DarkModeToggleButton, ListItemButton, ListItemDecorator, SettingsIcon. |
| `src/common/layout/optima/panel/MobilePanel::MobilePanel` | src/common/layout/optima/panel/MobilePanel.tsx | all | component | Function component. Hooks: useOptimaPanelOpen. Renders: Drawer, Box, OptimaPanelGroupedList, PreferencesListItem, PanelContentPortal, WhatsNewPanelRow. |
| `src/common/layout/optima/panel/OptimaPanelGroupedList::OptimaPanelGroupedList` | src/common/layout/optima/panel/OptimaPanelGroupedList.tsx | all | component | Function component. Hooks: useState, useIsMobile, useUIContentScaling, useUIPanelGroupCollapsed, useCallback. Renders: Box, UnfoldMoreIcon, Checkbox, ExpanderControlledBox, MenuList. |
| `src/common/layout/optima/panel/OptimaPanelGroupedList::OptimaPanelGroupGutter` | src/common/layout/optima/panel/OptimaPanelGroupedList.tsx | all | component | Function component. Renders: Box. |
| `src/common/layout/optima/panel/PanelContentPortal::PanelContentPortal` | src/common/layout/optima/panel/PanelContentPortal.tsx | all | component | Function component. Hooks: useOptimaPortalOutRef. Renders: Box. |
| `src/common/layout/optima/panel/PopupPanel::PopupPanel` | src/common/layout/optima/panel/PopupPanel.tsx | all | component | Function component. Renders: CloseablePopup, PanelContentPortal. |
| `src/common/layout/optima/portals/OptimaPortalsIn::OptimaDrawerIn` | src/common/layout/optima/portals/OptimaPortalsIn.tsx | all | component | Function component. Hooks: useOptimaPortalTargetElement. Renders: div. |
| `src/common/layout/optima/portals/OptimaPortalsIn::OptimaPanelIn` | src/common/layout/optima/portals/OptimaPortalsIn.tsx | all | component | Function component. Hooks: useOptimaPortalTargetElement. Renders: div. |
| `src/common/layout/optima/scratchclip/ScratchClip::ScratchClip` | src/common/layout/optima/scratchclip/ScratchClip.tsx | all | component | Function component. Hooks: useScratchClipHistory, useCallback. Renders: GoodModal, HistoryIcon, Box, Typography, Tooltip, IconButton. |
| `src/common/layout/overlays/OverlaysInsert::OverlaysInsert` | src/common/layout/overlays/OverlaysInsert.tsx | all | component | Arrow function component. Hooks: useLayoutOverlaysStore. Renders: React.Fragment. |
| `src/common/logger/viewer/LogEntryDetails::LogEntryDetails` | src/common/logger/viewer/LogEntryDetails.tsx | all | component | Function component. Hooks: useState. Renders: div, Card, Box, Typography, Button, CloseRoundedIcon, Divider. |
| `src/common/logger/viewer/LoggerViewerDialog::LogViewerDialog` | src/common/logger/viewer/LoggerViewerDialog.tsx | all | component | Function component. Hooks: useState, useIsMobile, useLoggerStore, useMemo, useCallback. Renders: thead, tr, th, tbody, td, GoodModal, Box, FormControl, +3 more. |
| `src/common/providers/ProviderBackendCapabilities::ProviderBackendCapabilities` | src/common/providers/ProviderBackendCapabilities.tsx | all | component | Function component. Hooks: useState, useKnowledgeOfBackendCaps, useQuery, useEffect. Renders: div, h2, button, br. |
| `src/common/providers/ProviderTheming::ProviderTheming` | src/common/providers/ProviderTheming.tsx | all | component | Arrow function component. Hooks: useUIComplexityIsMinimal, useMemo. Renders: CacheProvider, CssVarsProvider, CssBaseline, VendorIconSpriteMemo. |
| `src/common/providers/single-tab/ProviderSingleTab::ProviderSingleTab` | src/common/providers/single-tab/ProviderSingleTab.tsx | all | component | Arrow function component. Hooks: useInstanceLock, useState, useRevealEffect, useMemo. Renders: div, p, br, b, strong, span, SherpaLoading. |
| `src/common/providers/single-tab/ProviderSingleTab::SherpaLoading` | src/common/providers/single-tab/ProviderSingleTab.tsx | all | component | Function component. Renders: div, p, span, svg, path. |
| `src/common/render-decay/RenderDecayZone::RenderDecayZone` | src/common/render-decay/RenderDecayZone.tsx | all | component | Function component. Hooks: useLabsAdaptiveRendering, useMemo. Renders: RenderDecayContext.Provider. |
| `src/common/scroll-to-bottom/ScrollToBottom::DebugBorderBox` | src/common/scroll-to-bottom/ScrollToBottom.tsx | all | component | Function component. Renders: Box. |
| `src/common/scroll-to-bottom/ScrollToBottom::ScrollToBottom` | src/common/scroll-to-bottom/ScrollToBottom.tsx | all | component | Function component. Hooks: useState, useRef, useCallback, useEffect, useMemo. Renders: UseScrollToBottomProvider, Box, DebugBorderBox. |
| `src/common/scroll-to-bottom/ScrollToBottomButton::ScrollToBottomButton` | src/common/scroll-to-bottom/ScrollToBottomButton.tsx | all | component | Function component. Hooks: useScrollToBottom, useCallback. Renders: IconButton, KeyboardDoubleArrowDownIcon. |
| `src/common/stores/llms/components/LLMSearchFilterInput::LLMSearchFilterInput` | src/common/stores/llms/components/LLMSearchFilterInput.tsx | all | component | Wrapped component. Hooks: useEffect, useMemo. Renders: IconButton, StarredState, DebouncedInputMemo. |
| `src/common/stores/workspace/WorkspaceIdProvider::WorkspaceIdProvider` | src/common/stores/workspace/WorkspaceIdProvider.tsx | all | component | Function component. Hooks: useMemo. Renders: WorkspaceContext.Provider. |
| `src/common/stores/workspace/WorkspaceLiveFilePicker::WorkspaceLiveFilePicker` | src/common/stores/workspace/WorkspaceLiveFilePicker.tsx | all | component | Function component. Hooks: useState, useContextWorkspaceId, useWorkspaceContentsMetadata, useEffect, useCallback, useDragDropDataTransfer, +1 more. Renders: Box, TooltipOutlined, Button, LiveFileChooseIcon, IconButton, LiveFileIcon. |
| `src/modules/aifn/digrams/DiagramsModal::DiagramsModal` | src/modules/aifn/digrams/DiagramsModal.tsx | all | component | Function component. Hooks: useState, useFormRadio, useIsMobile, useUIContentScaling, useModelDomain, useFormRadioLlmType, +2 more. Renders: b, GoodModal, Box, AppBreadcrumbs, AppBreadcrumbs.Leaf, ChipToggleButton, Grid. |
| `src/modules/aifn/flatten/FlattenerModal::FlattenerModal` | src/modules/aifn/flatten/FlattenerModal.tsx | all | component | Function component. Hooks: useState, useModelDomain, useFormRadioLlmType, useStreamChatText, useCallback. Renders: GoodModal, FormControl, FormLabel, StylesList, FlatteningProgress, Box. |
| `src/modules/aifn/flatten/FlattenerModal::FlatteningProgress` | src/modules/aifn/flatten/FlattenerModal.tsx | all | component | Function component. Renders: Box, CircularProgress, Typography. |
| `src/modules/aifn/flatten/FlattenerModal::StylesList` | src/modules/aifn/flatten/FlattenerModal.tsx | all | component | Function component. Renders: List, React.Fragment, ListItem, ListItemButton, ListItemDecorator, ListItemContent. |
| `src/modules/aix/client/debugger/AixDebuggerDialog::AixDebuggerDialog` | src/modules/aix/client/debugger/AixDebuggerDialog.tsx | all | component | Function component. Hooks: useIsMobile, useUIPreferencesStore, useAixClientDebuggerStore, useDebouncedAixDebuggerStore, useState, useEffect, +1 more. Renders: div, GoodModal, Switch, Box, KeyStroke, Button, KeyboardDoubleArrowDownIcon. |
| `src/modules/aix/client/debugger/AixDebuggerFrame::AixDebuggerFrame` | src/modules/aix/client/debugger/AixDebuggerFrame.tsx | all | component | Function component. Hooks: useAixClientDebuggerStore, useShallow, useCallback. Renders: div, span, Box, Chip, Sheet, Typography, ExpanderControlledBox, Divider. |
| `src/modules/aix/client/debugger/AixDebuggerMeasurementsTable::AixDebuggerMeasurementsTable` | src/modules/aix/client/debugger/AixDebuggerMeasurementsTable.tsx | all | component | Function component. Renders: thead, tr, th, tbody, td, Typography, Table. |
| `src/modules/aix/client/debugger/DebugAdvancedOptions::DebugAdvancedOptions` | src/modules/aix/client/debugger/DebugAdvancedOptions.tsx | all | component | Function component. Hooks: useAixClientDebuggerStore, useUXLabsStore, useShallow. Renders: div, FormControl, Typography, FormHelperText, Switch. |
| `src/modules/aix/client/debugger/DebugPayloadOverride::DebugPayloadOverride` | src/modules/aix/client/debugger/DebugPayloadOverride.tsx | all | component | Function component. Hooks: useIsMobile, useAixClientDebuggerStore, useState, useMemo, useEffect, useCallback. Renders: Box, Chip, Textarea, Button, Typography. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::ASRxConfigureEngineFull` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Hooks: useToggleableBoolean. Renders: div, LinkIcon, KeyIcon, ExpanderSection, Box, DeepgramParameters, GeminiParameters. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::DeepgramParameters` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate. Hooks: useToggleableBoolean, useCallback. Renders: FormChipModelControl, FormTextField, Link, FormSwitchControl, PersonalDictionaryRow, PanelFooter. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::DictionaryModal` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: GoodModal, Typography, Textarea, Box, Button. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::GeminiParameters` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useToggleableBoolean, useCallback. Renders: FormChipControl, FormTextField, PersonalDictionaryRow, PanelFooter. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::ManualCredentials` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: engine, credentials, onUpdate, advancedOn. Hooks: useCallback. Renders: FormSecretField, FormTextField. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::OpenAIParameters` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useToggleableBoolean, useCallback. Renders: FormChipModelControl, FormTextField, FormSliderControl, FormSwitchControl, PersonalDictionaryRow, PanelFooter. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::PanelFooter` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: advanced, showReset, onReset. Renders: Box, Typography, Link. |
| `src/modules/asrx/components/ASRxConfigureEngineFull::PersonalDictionaryRow` | src/modules/asrx/components/ASRxConfigureEngineFull.tsx | all | component | Function component. Props: show, terms, description, onSave. Hooks: useState. Renders: FormControl, FormLabelStart, Button, DictionaryModal. |
| `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines` | src/modules/asrx/components/ASRxConfigureEngines.tsx | all | component | Function component. Hooks: useState, useASRxEngines, useASRxGlobalEngine, useCallback. Renders: Box, FormLabelStart, ConfirmIconButton, Select, VendorIcon, SourceIcon. |
| `src/modules/beam/BeamExplainer::BeamExplainer` | src/modules/beam/BeamExplainer.tsx | all | component | Function component. Renders: Box, ExplainerCarousel. |
| `src/modules/beam/BeamUpstreamResume::BeamUpstreamResume` | src/modules/beam/BeamUpstreamResume.tsx | all | component | Function component. Hooks: useCallback. Renders: BlockOpUpstreamResume. |
| `src/modules/beam/BeamView::BeamView` | src/modules/beam/BeamView.tsx | all | component | Function component. Hooks: useState, useUICounter, useModuleBeamStore, useShallow, useBeamStore, useCallback, +3 more. Renders: BeamExplainer, Box, Alert, BeamScatterInput, BeamScatterPane, RenderDecayZone. |
| `src/modules/beam/components/BeamCardNotice::BeamCardNotice` | src/modules/beam/components/BeamCardNotice.tsx | all | component | Function component. Hooks: useMemo. Renders: span, Chip. |
| `src/modules/beam/components/BeamCardNotice::BeamModelUnavailable` | src/modules/beam/components/BeamCardNotice.tsx | all | component | Function component. Renders: span, BeamCardNotice. |
| `src/modules/beam/gather/BeamFusionGrid::BeamFusionGrid` | src/modules/beam/gather/BeamFusionGrid.tsx | all | component | Function component. Hooks: useBeamStore, useShallow, useTheme. Renders: Box, Fusion, BeamCard, FusionAddButton, Typography, Alert. |
| `src/modules/beam/gather/BeamFusionGrid::FusionAddButton` | src/modules/beam/gather/BeamFusionGrid.tsx | all | component | Function component. Renders: props.currentFactory.Icon, Button, AddCircleOutlineRoundedIcon. |
| `src/modules/beam/gather/BeamGatherPane::BeamGatherPane` | src/modules/beam/gather/BeamGatherPane.tsx | all | component | Function component. Hooks: useBeamStore, useShallow, useModuleBeamStore, useLLMSelect, useCallback. Renders: Box, Typography, MainLlmIcon, FormControl, ButtonGroup, Button. |
| `src/modules/beam/gather/Fusion::Fusion` | src/modules/beam/gather/Fusion.tsx | all | component | Function component. Hooks: useState, useBeamStore, useBeamCardScrolling, useMessageAvatarLabel, useCallback, useLLMSelect, +1 more. Renders: BeamCard, FusionControlsMemo, FusionInstructionsEditor, BeamModelUnavailable, InlineError, BeamCardNotice. |
| `src/modules/beam/gather/FusionControls::FusionControls` | src/modules/beam/gather/FusionControls.tsx | all | component | Function component. Renders: props.factory.Icon, em, Box, TooltipOutlined, IconButton, LLMVendorIconSprite, BuildCircleIcon, Sheet. |
| `src/modules/beam/gather/FusionInputsWait::FusionInputsWait` | src/modules/beam/gather/FusionInputsWait.tsx | all | component | Function component. Hooks: useBeamStore, useShallow. Renders: Alert, Typography, Box, Button, PlayArrowRoundedIcon. |
| `src/modules/beam/gather/FusionInstructionsEditor::EditableChatInstructionPrompt` | src/modules/beam/gather/FusionInstructionsEditor.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Typography, InlineTextarea, Box. |
| `src/modules/beam/gather/FusionInstructionsEditor::EditableInstruction` | src/modules/beam/gather/FusionInstructionsEditor.tsx | all | component | Function component. Hooks: useModuleBeamStore, useCallback. Renders: EditableChatInstructionPrompt, Typography. |
| `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor` | src/modules/beam/gather/FusionInstructionsEditor.tsx | all | component | Function component. Hooks: useCallback, useMemo. Renders: Divider, EditableInstruction, Box, Typography. |
| `src/modules/beam/gather/instructions/UserInputChecklistComponent::UserInputChecklistComponent` | src/modules/beam/gather/instructions/UserInputChecklistComponent.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: Box, Checkbox, Button. |
| `src/modules/beam/scatter/BeamRay::BeamRay` | src/modules/beam/scatter/BeamRay.tsx | all | component | Function component. Hooks: useBeamStore, useBeamCardScrolling, useBeamScatterShowLettering, useMessageAvatarLabel, useCallback, useLLMSelect. Renders: BeamCard, RayControlsMemo, BeamModelUnavailable, InlineError, BeamCardNotice, Box. |
| `src/modules/beam/scatter/BeamRay::RayControls` | src/modules/beam/scatter/BeamRay.tsx | all | component | Function component. Renders: div, Box, DragIndicatorIcon, TooltipOutlined, Typography, LLMVendorIconSprite, GoodTooltip. |
| `src/modules/beam/scatter/BeamRayGrid::BeamRayGrid` | src/modules/beam/scatter/BeamRayGrid.tsx | all | component | Function component. Renders: Box, BeamRay, BeamCard, Button, AddCircleOutlineRoundedIcon. |
| `src/modules/beam/scatter/BeamScatterInput::BeamScatterInput` | src/modules/beam/scatter/BeamScatterInput.tsx | all | component | Function component. Hooks: useTheme, useModuleBeamStore, useMemo. Renders: Typography, Box, ChatMessageMemo. |
| `src/modules/beam/scatter/BeamScatterPane::BeamScatterPane` | src/modules/beam/scatter/BeamScatterPane.tsx | all | component | Function component. Hooks: useMemo, useCallback. Renders: BeamScatterDropdown, Box, Typography, AutoAwesomeIcon, AutoAwesomeOutlinedIcon, FormControl. |
| `src/modules/beam/scatter/BeamScatterPaneDropdown::BeamScatterDropdown` | src/modules/beam/scatter/BeamScatterPaneDropdown.tsx | all | component | Function component. Hooks: useState, useModuleBeamStore, useCallback. Renders: span, Dropdown, MenuButton, MoreVertIcon, Menu, ListItem, Typography. |
| `src/modules/beam/scatter/BeamScatterPaneDropdown::DialogNamePreset` | src/modules/beam/scatter/BeamScatterPaneDropdown.tsx | all | component | Function component. Hooks: useState. Renders: form, Modal, ModalDialog, ModalClose, DialogTitle, DialogContent, Box. |
| `src/modules/blocks/AutoBlocksRenderer::AutoBlocksRenderer` | src/modules/blocks/AutoBlocksRenderer.tsx | all | component | Function component. Hooks: useHeightCollapser, useAutoBlocksMemoSemiStable, useRenderDecay, useRef, useCallback, useScaledCodeSx, +3 more. Renders: BlocksContainer, RenderPlainText, RenderMarkdownMemo, EnhancedRenderCodeMemo, RenderCodeMemo, RenderDangerousHtml. |
| `src/modules/blocks/code/code-renderers/RenderCodeChartJS::RenderCodeChartJS` | src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx | all | component | Wrapped component. Hooks: useState, useRef, useColorScheme, useDynamicChartJS, useMemo, useAgiFixupCode, +3 more. Renders: canvas, Typography, Box, Button, AutoAwesomeIcon. |
| `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame::RenderCodeHtmlIFrame` | src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx | all | component | Function component. Hooks: useState, useRef, useEffect. Renders: iframe. |
| `src/modules/blocks/code/code-renderers/RenderCodeMarkdown::RenderCodeMarkdown` | src/modules/blocks/code/code-renderers/RenderCodeMarkdown.tsx | all | component | Function component. Renders: Box, RenderMarkdown. |
| `src/modules/blocks/code/code-renderers/RenderCodeMermaid::RenderCodeMermaid` | src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx | all | component | Wrapped component. Hooks: useState, useRef, useMermaidLoader, useQuery, useFittedSvgString, useAgiFixupCode, +2 more. Renders: Box, Button, AutoAwesomeIcon, Typography. |
| `src/modules/blocks/code/code-renderers/RenderCodePlantUML::RenderCodePlantUML` | src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx | all | component | Wrapped component. Hooks: useState, useQuery, useFittedSvgString, useAgiFixupCode, useCallback, useImperativeHandle. Renders: details, summary, Typography, Box, Button, AutoAwesomeIcon. |
| `src/modules/blocks/code/code-renderers/RenderCodeSVG::RenderCodeSVG` | src/modules/blocks/code/code-renderers/RenderCodeSVG.tsx | all | component | Wrapped component. Hooks: useFittedSvgString, useImperativeHandle. Renders: Box. |
| `src/modules/blocks/code/code-renderers/RenderCodeSyntax::RenderCodeSyntax` | src/modules/blocks/code/code-renderers/RenderCodeSyntax.tsx | all | component | Function component. Renders: Box. |
| `src/modules/blocks/code/RenderCode::RCSyntaxHighlight` | src/modules/blocks/code/RenderCode.tsx | all | component | Wrapped component. Hooks: useDeferredValue, useMemo. Renders: RenderCodeSyntax. |
| `src/modules/blocks/code/RenderCode::RenderCode` | src/modules/blocks/code/RenderCode.tsx | all | component | Function component. Props: props: RenderCodeBaseProps. Renders: React.Suspense, Box, _DynamicPrism. |
| `src/modules/blocks/code/RenderCode::RenderCodeImpl` | src/modules/blocks/code/RenderCode.tsx | all | component | Function component. Hooks: useState, useRef, useERCDiffContext, useFullscreenElement, useStickyCodeOverlay, useUIPreferencesStore, +4 more. Renders: span, RCOverlay, Box, ButtonGroup, OverlayButton, HtmlIcon, ReplayRoundedIcon. |
| `src/modules/blocks/code/RenderCodePanelFrame::RenderCodePanelFrame` | src/modules/blocks/code/RenderCodePanelFrame.tsx | all | component | Function component. Hooks: useColorScheme, useCallback, useMemo. Renders: Box, Sheet. |
| `src/modules/blocks/danger-html/RenderDangerousHtml::RenderDangerousHtml` | src/modules/blocks/danger-html/RenderDangerousHtml.tsx | all | component | Function component. Hooks: useState. Renders: b, Box, RenderCodeHtmlIFrame, Typography, Button, OverlayButton, WebIcon. |
| `src/modules/blocks/enhanced-code/EnhancedRenderCode::EnhancedRenderCode` | src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx | all | component | Function component. Hooks: useState, useLiveFilePatch, useEffect, useCallback, useMemo. Renders: div, strong, small, ERCHeaderTooltip, Box, ERCHeader, TooltipOutlined, IconButton, +1 more. |
| `src/modules/blocks/enhanced-code/EnhancedRenderCodeMenu::EnhancedRenderCodeMenu` | src/modules/blocks/enhanced-code/EnhancedRenderCodeMenu.tsx | all | component | Function component. Hooks: useRef, useState, useERCDiffContext, useCallback. Renders: div, span, CloseablePopup, Box, MenuItem, ListItemDecorator, UnfoldMoreIcon, UnfoldLessIcon. |
| `src/modules/blocks/enhanced-code/ERCDiffContext::ERCDiffContextProvider` | src/modules/blocks/enhanced-code/ERCDiffContext.tsx | all | component | Function component. Hooks: useState, useMemo. Renders: DiffDataContext.Provider, DiffActionsContext.Provider, ERCDiffModal. |
| `src/modules/blocks/enhanced-code/ERCDiffModal::ERCDiffModal` | src/modules/blocks/enhanced-code/ERCDiffModal.tsx | all | component | Function component. Hooks: useCallback. Renders: GoodModal, CompareArrowsIcon, Box, Button, DiffViewer. |
| `src/modules/blocks/image/RenderImageRefDBlob::RenderImageRefDBlob` | src/modules/blocks/image/RenderImageRefDBlob.tsx | all | component | Function component. Hooks: useDBAsset, useQuery, useMemo. Renders: Box, TimeAgo, RenderImageURL. |
| `src/modules/blocks/image/RenderImageURL::RenderImageURL` | src/modules/blocks/image/RenderImageURL.tsx | all | component | Arrow function component. Hooks: useState, useEffect, useCallback. Renders: picture, img, Sheet, Box, OverlayButton, InfoOutlinedIcon, CloseRoundedIcon, DeleteOutlineIcon. |
| `src/modules/blocks/markdown/CustomARenderer::CustomARenderer` | src/modules/blocks/markdown/CustomARenderer.tsx | all | component | Function component. Props: node, href, children, ...props. Hooks: useHostedLinkAction. Renders: a, TooltipOutlined, Link, InertLink, LinkPreview, GoogleFavicon. |
| `src/modules/blocks/markdown/CustomARenderer::GoogleFavicon` | src/modules/blocks/markdown/CustomARenderer.tsx | all | component | Function component. Renders: Avatar. |
| `src/modules/blocks/markdown/CustomARenderer::InertLink` | src/modules/blocks/markdown/CustomARenderer.tsx | all | component | Function component. Props: title, children. Renders: TooltipOutlined, Box. |
| `src/modules/blocks/markdown/CustomARenderer::LinkPreview` | src/modules/blocks/markdown/CustomARenderer.tsx | all | component | Function component. Props: urlInfo. Renders: FormControl, Box, GoogleFavicon, Chip. |
| `src/modules/blocks/markdown/CustomMarkdownRenderer::CustomMarkdownRenderer` | src/modules/blocks/markdown/CustomMarkdownRenderer.tsx | all | component | Function component. Props: content, disablePreprocessor, userTextFlavor, onParseCost, replaceContent. Hooks: useUXLabsStore, useMarkdownTaskListToggler, useMemo, useRef, useEffect. Renders: div. |
| `src/modules/blocks/markdown/CustomMarkdownRenderer::DelRenderer` | src/modules/blocks/markdown/CustomMarkdownRenderer.tsx | all | component | Function component. Props: children. Renders: del. |
| `src/modules/blocks/markdown/CustomMarkdownRenderer::MarkRenderer` | src/modules/blocks/markdown/CustomMarkdownRenderer.tsx | all | component | Function component. Props: children. Renders: mark. |
| `src/modules/blocks/markdown/CustomTableRenderer::CustomTableRenderer` | src/modules/blocks/markdown/CustomTableRenderer.tsx | all | component | Function component. Props: children, node, ...props. Hooks: useRef, useCallback. Renders: table, Box, Chip. |
| `src/modules/blocks/markdown/CustomTaskListRenderer::CustomInputRenderer` | src/modules/blocks/markdown/CustomTaskListRenderer.tsx | all | component | Function component. Props: node, children, ...props. Renders: input, Checkbox. |
| `src/modules/blocks/markdown/HostedLinksContext::HostedLinksProvider` | src/modules/blocks/markdown/HostedLinksContext.tsx | all | component | Function component. Props: children. Hooks: useState, useCallback. Renders: HostedLinksRegisterContext.Provider, HostedLinksActionsContext.Provider. |
| `src/modules/blocks/markdown/RenderMarkdown::RenderMarkdown` | src/modules/blocks/markdown/RenderMarkdown.tsx | all | component | Function component. Renders: div, RenderMarkdownBox, RenderMarkdownLite, React.Suspense, DynamicMarkdownRenderer. |
| `src/modules/blocks/markdown/RenderMarkdownLite::RenderMarkdownLite` | src/modules/blocks/markdown/RenderMarkdownLite.tsx | all | component | Function component. Hooks: useRef. Renders: div. |
| `src/modules/blocks/OverlayButton::OverlayButton` | src/modules/blocks/OverlayButton.tsx | all | component | Arrow function component. Props: tooltip, placement, tooltipProps, smShadow, color, variant, +1 more. Renders: Tooltip, StyledOverlayButton. |
| `src/modules/blocks/plaintext/RenderPlainText::RenderPlainText` | src/modules/blocks/plaintext/RenderPlainText.tsx | all | component | Arrow function component. Hooks: useMemo. Renders: Typography, Chip. |
| `src/modules/blocks/ScaledTextBlockRenderer::ScaledTextBlockRenderer` | src/modules/blocks/ScaledTextBlockRenderer.tsx | all | component | Function component. Hooks: useScaledTypographySx. Renders: BlocksContainer, RenderMarkdown, RenderPlainText. |
| `src/modules/blocks/ToggleExpansionButton::ToggleExpansionButton` | src/modules/blocks/ToggleExpansionButton.tsx | all | component | Function component. Renders: div, Button, ExpandMoreIcon, ExpandLessIcon. |
| `src/modules/blocks/wordsdiff/RenderWordsDiff::RenderWordsDiff` | src/modules/blocks/wordsdiff/RenderWordsDiff.tsx | all | component | Function component. Renders: Typography, Box. |
| `src/modules/browse/BrowseSettings::BrowseSettings` | src/modules/browse/BrowseSettings.tsx | all | component | Function component. Hooks: useBrowseCapability, useBrowseStore, useShallow. Renders: Typography, ExternalDocsLink, FormInputKey, AlreadySet, FormControl, FormLabelStart. |
| `src/modules/google/GoogleSearchSettings::GoogleSearchSettings` | src/modules/google/GoogleSearchSettings.tsx | all | component | Function component. Hooks: useGoogleSearchStore, useShallow. Renders: Typography, ExternalLink, FormControl, FormLabelStart, Link, Input. |
| `src/modules/llms/components/LLMVendorIcon::LLMVendorIcon` | src/modules/llms/components/LLMVendorIcon.tsx | all | component | Function component. Props: vendorId, ...props. Renders: Icon. |
| `src/modules/llms/components/LLMVendorIconSprite::LLMVendorIconSprite` | src/modules/llms/components/LLMVendorIconSprite.tsx | all | component | Function component. Props: vendorId. Renders: svg, use, PhRobot. |
| `src/modules/llms/components/LLMVendorIconSprite::VendorIconSpriteMemo` | src/modules/llms/components/LLMVendorIconSprite.tsx | all | component | Wrapped component. Renders: svg, defs, symbol, g, path, rect. |
| `src/modules/llms/components/LLMVendorSetup::LLMVendorSetup` | src/modules/llms/components/LLMVendorSetup.tsx | all | component | Function component. Renders: SetupComponent. |
| `src/modules/llms/components/ModelsRefreshAlert::ModelsRefreshAlert` | src/modules/llms/components/ModelsRefreshAlert.tsx | all | component | Function component. Hooks: useModelsRefreshSummary, useCallback. Renders: Alert, CircularProgress, WarningRoundedIcon, CheckRoundedIcon, KeyboardArrowRightIcon. |
| `src/modules/llms/components/ModelsRefreshAlert::ModelsRefreshIconButton` | src/modules/llms/components/ModelsRefreshAlert.tsx | all | component | Function component. Hooks: useModelsRefreshBatchStore. Renders: TooltipOutlined, IconButton, CircularProgress, RefreshIcon. |
| `src/modules/llms/models-modal/AnthropicSkillsConfig::AnthropicSkillsConfig` | src/modules/llms/models-modal/AnthropicSkillsConfig.tsx | all | component | Function component. Props: smaller, llmVndAntSkills, onChangeParameter, onRemoveParameter. Hooks: useCallback. Renders: FormControl, FormLabelStart, Box, Chip. |
| `src/modules/llms/models-modal/LLMOptionsClone::LLMOptionsClone` | src/modules/llms/models-modal/LLMOptionsClone.tsx | all | component | Function component. Hooks: useState, useLLM, useLLMExists, useCallback. Renders: b, GoodModal, Typography, FormControl, FormLabelStart, Input, Alert. |
| `src/modules/llms/models-modal/LLMOptionsGlobal::LLMOptionsGlobal` | src/modules/llms/models-modal/LLMOptionsGlobal.tsx | all | component | Function component. Hooks: useCallback. Renders: InlineError, LLMParametersEditor. |
| `src/modules/llms/models-modal/LLMOptionsModal::LLMOptionsModal` | src/modules/llms/models-modal/LLMOptionsModal.tsx | all | component | Function component. Hooks: useIsMobile, useLLM, useModelsServices, useState, useModelDomains, useCallback. Renders: div, br, b, Chip, GoodModal, Box, TooltipOutlined, IconButton, +1 more. |
| `src/modules/llms/models-modal/LLMParametersEditor::LLMParametersEditor` | src/modules/llms/models-modal/LLMParametersEditor.tsx | all | component | Function component. Hooks: useMemo, useState, useCallback. Renders: span, FormSliderControl, Tooltip, IconButton, LocalFireDepartmentIcon, InlineError, Box. |
| `src/modules/llms/models-modal/ModelsChangelogPanel::CountChips` | src/modules/llms/models-modal/ModelsChangelogPanel.tsx | all | component | Function component. Renders: Chip. |
| `src/modules/llms/models-modal/ModelsChangelogPanel::ModelsChangelogPanel` | src/modules/llms/models-modal/ModelsChangelogPanel.tsx | all | component | Function component. Hooks: useToggleableStringSet, useState, useModelsStore, useShallow, useModelsRefreshBatchStore, useModelsRefreshSummary, +2 more. Renders: th, thead, tr, tbody, KeyboardArrowRightIcon, LinearProgress, Link, Chip, +2 more. |
| `src/modules/llms/models-modal/ModelsChangelogPanel::ServiceChangelogRow` | src/modules/llms/models-modal/ModelsChangelogPanel.tsx | all | component | Function component. Hooks: useLlmUpdateModels, useCallback, useState. Renders: tr, td, Typography, Box, CountChips, CircularProgress, LLMVendorIconSprite, Link. |
| `src/modules/llms/models-modal/ModelsConfiguratorModal::ModelsConfiguratorModal` | src/modules/llms/models-modal/ModelsConfiguratorModal.tsx | all | component | Function component. Hooks: useState, useSubMenuHost, useIsMobile, useHasLLMs, useOverlayComponents, useUIPreferencesStore, +11 more. Renders: strong, b, ConfirmationModal, Button, SubMenuHost, Box, Dropdown, MenuButton. |
| `src/modules/llms/models-modal/ModelsList::ModelItem` | src/modules/llms/models-modal/ModelsList.tsx | all | component | Wrapped component. Hooks: useCallback, useMemo. Renders: Chip, VisibilityOutlinedIcon, PsychologyOutlinedIcon, SdCardOutlinedIcon, ListItem, ListItemButton. |
| `src/modules/llms/models-modal/ModelsList::ModelsList` | src/modules/llms/models-modal/ModelsList.tsx | all | component | Function component. Hooks: useIsMobile, useUIPreferencesStore, useModelDomains, useLLMsByService, useCallback, useMemo. Renders: br, ListItem, Typography, ModelItem, List. |
| `src/modules/llms/models-modal/ModelsModals::ModelsModals` | src/modules/llms/models-modal/ModelsModals.tsx | all | component | Function component. Hooks: useOptimaModals, useModelsServices. Renders: ModelsConfiguratorModal, LLMOptionsModal. |
| `src/modules/llms/models-modal/ModelsServiceSelector::ModelsServiceSelector` | src/modules/llms/models-modal/ModelsServiceSelector.tsx | all | component | Function component. Hooks: useState, useIsMobile, useCallback, useMemo. Renders: Option, Box, Typography, Select, RefreshIcon, ListDivider. |
| `src/modules/llms/models-modal/ModelsWizard::ModelsWizard` | src/modules/llms/models-modal/ModelsWizard.tsx | all | component | Function component. Hooks: useState. Renders: Sheet, Box, Typography, Chip, WizardProviderSetup. |
| `src/modules/llms/models-modal/ModelsWizard::WizardProviderSetup` | src/modules/llms/models-modal/ModelsWizard.tsx | all | component | Function component. Hooks: useState, useShallowStabilizer, useModelsStore, useShallow, useEffect, useCallback, +1 more. Renders: Box, Button, Typography, TooltipOutlined, Badge, Avatar. |
| `src/modules/llms/models-modal/OpenRouterWebToolsConfig::OpenRouterWebToolsConfig` | src/modules/llms/models-modal/OpenRouterWebToolsConfig.tsx | all | component | Function component. Hooks: useMemo. Renders: FormSelectControl, Box, _OptionalSlider. |
| `src/modules/llms/vendors/alibaba/AlibabaServiceSetup::AlibabaServiceSetup` | src/modules/llms/vendors/alibaba/AlibabaServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: div, ApproximateCosts, Typography, ExternalLink, FormInputKey, Link, AlreadySet. |
| `src/modules/llms/vendors/anthropic/AnthropicServiceSetup::AnthropicServiceSetup` | src/modules/llms/vendors/anthropic/AnthropicServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useChatAutoAI, useToggleableBoolean, useLlmUpdateModels. Renders: b, ApproximateCosts, Box, Link, FormInputKey, AlreadySet, FormSwitchControl. |
| `src/modules/llms/vendors/ApproximateCosts::ApproximateCosts` | src/modules/llms/vendors/ApproximateCosts.tsx | all | component | Function component. Hooks: useState, useIsMobile, useUIComplexityMode, useCostMetricsForLLMService, useMemo. Renders: b, span, div, Box, TimeAgo, Chip. |
| `src/modules/llms/vendors/azure/AzureServiceSetup::AzureServiceSetup` | src/modules/llms/vendors/azure/AzureServiceSetup.tsx | all | component | Function component. Hooks: useState, useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: div, ApproximateCosts, Typography, ExternalLink, Chip, FormTextField, ExternalDocsLink. |
| `src/modules/llms/vendors/bedrock/BedrockRegionAutocomplete::BedrockRegionAutocomplete` | src/modules/llms/vendors/bedrock/BedrockRegionAutocomplete.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback. Renders: FormControl, Box, FormLabel, Autocomplete, AutocompleteOption, Typography. |
| `src/modules/llms/vendors/bedrock/BedrockServiceSetup::BedrockServiceSetup` | src/modules/llms/vendors/bedrock/BedrockServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useState, useLlmUpdateModels. Renders: strong, li, code, ApproximateCosts, Box, ClaudeCrabIcon, Link, Typography, +1 more. |
| `src/modules/llms/vendors/cerebras/CerebrasServiceSetup::CerebrasServiceSetup` | src/modules/llms/vendors/cerebras/CerebrasServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, SetupFormClientSideToggle, SetupFormRefetchButton. |
| `src/modules/llms/vendors/cohere/CohereServiceSetup::CohereServiceSetup` | src/modules/llms/vendors/cohere/CohereServiceSetup.tsx | all | component | Function component. Hooks: useToggleableBoolean, useServiceSetup, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, ExternalLink, AlreadySet, FormTextField, SetupFormClientSideToggle. |
| `src/modules/llms/vendors/deepseek/DeepseekAIServiceSetup::DeepseekAIServiceSetup` | src/modules/llms/vendors/deepseek/DeepseekAIServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, FormTextField, SetupFormClientSideToggle. |
| `src/modules/llms/vendors/gemini/GeminiServiceSetup::GeminiServiceSetup` | src/modules/llms/vendors/gemini/GeminiServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, FormControl, FormLabelStart. |
| `src/modules/llms/vendors/groq/GroqServiceSetup::GroqServiceSetup` | src/modules/llms/vendors/groq/GroqServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, SetupFormClientSideToggle, SetupFormRefetchButton. |
| `src/modules/llms/vendors/lmstudio/LMStudioServiceSetup::LMStudioServiceSetup` | src/modules/llms/vendors/lmstudio/LMStudioServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useLlmUpdateModels. Renders: b, ExpanderAccordion, Typography, YouTubeIcon, VideoPlayerYouTube, Link, ExternalDocsLink. |
| `src/modules/llms/vendors/localai/LocalAIAdmin::ListItemSwitch` | src/modules/llms/vendors/localai/LocalAIAdmin.tsx | all | component | Function component. Renders: ListItem, Box, Switch. |
| `src/modules/llms/vendors/localai/LocalAIAdmin::LocalAIAdmin` | src/modules/llms/vendors/localai/LocalAIAdmin.tsx | all | component | Function component. Hooks: useState, useQuery, useMemo, useVirtualizer, useCallback. Renders: b, thead, tr, th, tbody, td, GoodModal, Box, +4 more. |
| `src/modules/llms/vendors/localai/LocalAIAdmin::ModelInstallPanel` | src/modules/llms/vendors/localai/LocalAIAdmin.tsx | all | component | Function component. Hooks: useState, useMutation, useEffect. Renders: strong, Card, Box, Typography, IconButton, CloseRoundedIcon, InlineError. |
| `src/modules/llms/vendors/localai/LocalAIAdmin::ModelJobStatusChecker` | src/modules/llms/vendors/localai/LocalAIAdmin.tsx | all | component | Function component. Hooks: useState, useQuery, useEffect. Renders: InlineError, Box, Typography, Alert, LinearProgress. |
| `src/modules/llms/vendors/localai/LocalAIServiceSetup::LocalAIServiceSetup` | src/modules/llms/vendors/localai/LocalAIServiceSetup.tsx | all | component | Function component. Hooks: useState, useServiceSetup, useLlmUpdateModels. Renders: div, br, b, ApproximateCosts, Typography, ExternalLink, Link, Chip, +1 more. |
| `src/modules/llms/vendors/metaai/MetaAIServiceSetup::MetaAIServiceSetup` | src/modules/llms/vendors/metaai/MetaAIServiceSetup.tsx | all | component | Function component. Hooks: useToggleableBoolean, useServiceSetup, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, ExternalLink, AlreadySet, FormTextField, SetupFormClientSideToggle. |
| `src/modules/llms/vendors/mistral/MistralServiceSetup::MistralServiceSetup` | src/modules/llms/vendors/mistral/MistralServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, SetupFormClientSideToggle, SetupFormRefetchButton. |
| `src/modules/llms/vendors/modular/ModularServiceSetup::ModularServiceSetup` | src/modules/llms/vendors/modular/ModularServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useLlmUpdateModels. Renders: ApproximateCosts, FormChipControl, FormInputKey, Link, AlreadySet, SetupFormRefetchButton. |
| `src/modules/llms/vendors/moonshot/MoonshotServiceSetup::MoonshotServiceSetup` | src/modules/llms/vendors/moonshot/MoonshotServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: div, strong, ApproximateCosts, Typography, ExternalLink, FormInputKey, Link, AlreadySet. |
| `src/modules/llms/vendors/nvidianim/NvidiaNIMServiceSetup::NvidiaNIMServiceSetup` | src/modules/llms/vendors/nvidianim/NvidiaNIMServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: code, ApproximateCosts, FormInputKey, Link, AlreadySet, Typography, FormTextField. |
| `src/modules/llms/vendors/ollama/OllamaAdministration::OllamaAdministration` | src/modules/llms/vendors/ollama/OllamaAdministration.tsx | all | component | Function component. Hooks: useState, useQuery, useMutation, useCallback, useMemo. Renders: GoodModal, Box, Typography, FormControl, FormLabelStart, Select. |
| `src/modules/llms/vendors/ollama/OllamaServiceSetup::OllamaServiceSetup` | src/modules/llms/vendors/ollama/OllamaServiceSetup.tsx | all | component | Function component. Hooks: useState, useServiceSetup, useLlmUpdateModels. Renders: b, FormTextField, ExternalDocsLink, FormControl, FormLabelStart, Typography, SetupFormClientSideToggle. |
| `src/modules/llms/vendors/openai/OpenAIHostAutocomplete::OpenAIHostAutocomplete` | src/modules/llms/vendors/openai/OpenAIHostAutocomplete.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback. Renders: option.icon, Link, FormControl, Box, FormLabel, GoodTooltip, InfoOutlinedIcon. |
| `src/modules/llms/vendors/openai/OpenAIServiceSetup::NvidiaNIMUpgradeNotice` | src/modules/llms/vendors/openai/OpenAIServiceSetup.tsx | all | component | Function component. Hooks: useCallback. Renders: Alert, NvidiaIcon, Box, Typography, Button. |
| `src/modules/llms/vendors/openai/OpenAIServiceSetup::OpenAIServiceSetup` | src/modules/llms/vendors/openai/OpenAIServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useEffect, useLlmUpdateModels. Renders: ApproximateCosts, NvidiaNIMUpgradeNotice, OpenAIHostAutocomplete, FormInputKey, Link, AlreadySet. |
| `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup` | src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: span, ApproximateCosts, Box, Typography, Link, ExternalDocsLink, PhGift. |
| `src/modules/llms/vendors/perplexity/PerplexityServiceSetup::PerplexityServiceSetup` | src/modules/llms/vendors/perplexity/PerplexityServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, Typography, SetupFormClientSideToggle. |
| `src/modules/llms/vendors/sakanaai/SakanaAIServiceSetup::SakanaAIServiceSetup` | src/modules/llms/vendors/sakanaai/SakanaAIServiceSetup.tsx | all | component | Function component. Hooks: useToggleableBoolean, useServiceSetup, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, FormTextField, SetupFormRefetchButton. |
| `src/modules/llms/vendors/togetherai/TogetherAIServiceSetup::TogetherAIServiceSetup` | src/modules/llms/vendors/togetherai/TogetherAIServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, Link, AlreadySet, FormSwitchControl, Alert. |
| `src/modules/llms/vendors/xai/XAIServiceSetup::XAIServiceSetup` | src/modules/llms/vendors/xai/XAIServiceSetup.tsx | all | component | Function component. Hooks: useServiceSetup, useToggleableBoolean, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, ExternalLink, AlreadySet, SetupFormClientSideToggle, SetupFormRefetchButton. |
| `src/modules/llms/vendors/zai/ZAIServiceSetup::ZAIServiceSetup` | src/modules/llms/vendors/zai/ZAIServiceSetup.tsx | all | component | Function component. Hooks: useToggleableBoolean, useServiceSetup, useLlmUpdateModels. Renders: ApproximateCosts, FormInputKey, ExternalLink, AlreadySet, FormTextField, SetupFormClientSideToggle. |
| `src/modules/news/components/DocsReaderModal::DocsFailure` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: Box, Typography, Button. |
| `src/modules/news/components/DocsReaderModal::DocsHomeView` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: Box, Link, Typography, DocsNewChip. |
| `src/modules/news/components/DocsReaderModal::DocsNavPage` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: ListItem, ListItemButton, ListItemContent, DocsNewChip. |
| `src/modules/news/components/DocsReaderModal::DocsNavTree` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Hooks: useState, useEffect, useCallback. Renders: List, ListItem, ListItemButton, ListItemDecorator, PhHouse, ListItemContent. |
| `src/modules/news/components/DocsReaderModal::DocsNewChip` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: Chip. |
| `src/modules/news/components/DocsReaderModal::DocsPageView` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Hooks: useUIContentScaling, useScaledTypographySx. Renders: Box, BrandIcon, Typography, DocsNewChip, DocsTierChip, Divider. |
| `src/modules/news/components/DocsReaderModal::DocsReaderModal` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Hooks: useState, useRef, useIsMobile, useQuery, useMemo, useEffect, +1 more. Renders: b, span, AppBreadcrumbs.Leaf, AppBreadcrumbs.Link, Box, Tooltip, IconButton, ArrowBackRoundedIcon. |
| `src/modules/news/components/DocsReaderModal::DocsSearchResults` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Hooks: useCallback. Renders: Typography, List, ListItem, ListItemButton, ListItemContent, Box. |
| `src/modules/news/components/DocsReaderModal::DocsSectionView` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: List, ListItem, ListItemButton, ListItemContent, Typography, DocsNewChip. |
| `src/modules/news/components/DocsReaderModal::DocsTierChip` | src/modules/news/components/DocsReaderModal.tsx | all | component | Function component. Renders: Chip. |
| `src/modules/news/components/WhatsNewIndicators::AnnouncementsNavDot` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useNews. Renders: Badge. |
| `src/modules/news/components/WhatsNewIndicators::DocsMenuItem` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useNewsAudience. Renders: MenuItem, ListItemDecorator, PhBookOpenText, LaunchIcon. |
| `src/modules/news/components/WhatsNewIndicators::NewCount` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Renders: Chip, Typography. |
| `src/modules/news/components/WhatsNewIndicators::NewsModals` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useNewsModals, useNewsAudience, useEffect. Renders: WhatsNewModal, DocsReaderModal. |
| `src/modules/news/components/WhatsNewIndicators::WhatsNewEmptyChatLine` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useNews, useNewsAfterBuild. Renders: Typography, Link. |
| `src/modules/news/components/WhatsNewIndicators::WhatsNewMenuItem` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useNewsAudience. Renders: MenuItem, ListItemDecorator, ListItemContent. |
| `src/modules/news/components/WhatsNewIndicators::WhatsNewNavDot` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Renders: AnnouncementsNavDot. |
| `src/modules/news/components/WhatsNewIndicators::WhatsNewPanelRow` | src/modules/news/components/WhatsNewIndicators.tsx | all | component | Function component. Hooks: useIsMobile, useNews. Renders: OptimaPanelGroupedList, ListItem, ListItemButton, ListItemDecorator, ListItemContent, NewCount. |
| `src/modules/news/components/WhatsNewModal::AnnouncementPane` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Renders: Box, Typography, Chip, LiteVideoEmbed, NewsBody, Link. |
| `src/modules/news/components/WhatsNewModal::ChangelogDay` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Renders: div, Box, Typography, Link. |
| `src/modules/news/components/WhatsNewModal::ChangelogLedger` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Renders: Box, React.Fragment, Divider, ChangelogDay. |
| `src/modules/news/components/WhatsNewModal::ChangelogPane` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Hooks: useState, useMemo, useNewsAfterBuild. Renders: Typography, Alert, Button, ExpandLessIcon, ExpandMoreIcon, Box. |
| `src/modules/news/components/WhatsNewModal::NewsBody` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Renders: li, Box. |
| `src/modules/news/components/WhatsNewModal::WhatsNewModal` | src/modules/news/components/WhatsNewModal.tsx | all | component | Function component. Hooks: useIsMobile, useNews, useNewsSeenStore, useShallow, useState, useRef, +3 more. Renders: ListItem, ListItemButton, ListItemContent, Typography, ListItemDecorator, CircleIcon. |
| `src/modules/speex/components/SpeexConfigureEngineFull::CredentialsApiKeyInputs` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: credentials, onUpdate, vendorType, showHost, hostRequired, hostPlaceholder, +1 more. Renders: FormSecretField, FormTextField. |
| `src/modules/speex/components/SpeexConfigureEngineFull::ElevenLabsConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormChipModelControl, FormControl, FormLabelStart, SpeexVoiceSelect. |
| `src/modules/speex/components/SpeexConfigureEngineFull::GeminiConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormChipModelControl, FormControl, FormLabelStart, SpeexVoiceAutocomplete. |
| `src/modules/speex/components/SpeexConfigureEngineFull::InworldConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormChipModelControl, FormControl, FormLabelStart, SpeexVoiceSelect, FormSliderControl. |
| `src/modules/speex/components/SpeexConfigureEngineFull::LocalAIConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormControl, FormLabelStart, SpeexVoiceAutocomplete, FormTextField. |
| `src/modules/speex/components/SpeexConfigureEngineFull::OpenAIConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormChipModelControl, FormControl, FormLabelStart, SpeexVoiceSelect, FormSliderControl, FormTextField. |
| `src/modules/speex/components/SpeexConfigureEngineFull::PreviewButton` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engineId. Hooks: useQueryClient, useQuery. Renders: div, TooltipOutlined, Button, StopRoundedIcon, PlayArrowRoundedIcon. |
| `src/modules/speex/components/SpeexConfigureEngineFull::SpeexConfigureEngineFull` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Hooks: useToggleableBoolean, useCallback, useMemo. Renders: div, LinkIcon, KeyIcon, ExpanderSection, Box, ElevenLabsConfig, GeminiConfig. |
| `src/modules/speex/components/SpeexConfigureEngineFull::WebSpeechConfig` | src/modules/speex/components/SpeexConfigureEngineFull.tsx | all | component | Function component. Props: engine, onUpdate, isMobile. Hooks: useCallback. Renders: FormControl, FormLabelStart, SpeexVoiceSelect, FormSliderControl. |
| `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines` | src/modules/speex/components/SpeexConfigureEngines.tsx | all | component | Function component. Hooks: useState, useSpeexEngines, useSpeexGlobalEngine, useCallback. Renders: Box, FormLabelStart, ConfirmIconButton, Select, VendorIcon, SourceIcon. |
| `src/modules/speex/components/SpeexEngineSelect::SpeexEngineSelect` | src/modules/speex/components/SpeexEngineSelect.tsx | all | component | Function component. Props: props: SpeexEngineSelectProps. Hooks: useSpeexEngines, useMemo, useCallback. Renders: Select, Option, Typography. |
| `src/modules/speex/components/SpeexSystemTest::SpeexSystemTest` | src/modules/speex/components/SpeexSystemTest.tsx | all | component | Function component. Hooks: useState, useRef, useCallback. Renders: div, Sheet, Box, Typography, Chip, Switch, Textarea. |
| `src/modules/speex/components/SpeexVoiceAutocomplete::SpeexVoiceAutocomplete` | src/modules/speex/components/SpeexVoiceAutocomplete.tsx | all | component | Function component. Props: props: SpeexVoiceAutocompleteProps. Hooks: useSpeexVoices, useState, useEffect, useCallback. Renders: div, Box, TooltipOutlined, IconButton, RefreshIcon, CircularProgress, Autocomplete. |
| `src/modules/speex/components/SpeexVoiceSelect::SpeexVoiceSelect` | src/modules/speex/components/SpeexVoiceSelect.tsx | all | component | Function component. Hooks: useSpeexVoices, useState, useQuery, useCallback. Renders: div, span, Box, TooltipOutlined, IconButton, RefreshIcon, CircularProgress, Select. |
| `src/modules/t2i/components/T2IConfigureEngineFull::T2IConfigureEngineFull` | src/modules/t2i/components/T2IConfigureEngineFull.tsx | all | component | Function component. Renders: div, ExpanderSection, Box, T2IEngineProfilePanel, Typography. |
| `src/modules/t2i/components/T2IConfigureEngineFull::T2IEngineProfileEditor` | src/modules/t2i/components/T2IConfigureEngineFull.tsx | all | component | Function component. Hooks: useT2IStore. Renders: T2IEngineProfilePanel. |
| `src/modules/t2i/components/T2IConfigureEngineFull::T2IEngineProfilePanel` | src/modules/t2i/components/T2IConfigureEngineFull.tsx | all | component | Function component. Renders: DallESettings, OpenRouterT2ISettings, GeminiT2ISettings, Typography. |
| `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines` | src/modules/t2i/components/T2IConfigureEngines.tsx | all | component | Function component. Hooks: useCapabilityTextToImage, useT2IStore, useCallback. Renders: Alert, Box, FormLabelStart, Select, VendorIcon, SourceIcon. |
| `src/modules/t2i/dalle/DallESettings::DallESettings` | src/modules/t2i/dalle/DallESettings.tsx | all | component | Function component. Hooks: useToggleableBoolean, useCallback. Renders: FormSelectControl, FormControl, FormLabelStart, Select, Option, FormChipControl. |
| `src/modules/t2i/gemini/GeminiT2ISettings::GeminiT2ISettings` | src/modules/t2i/gemini/GeminiT2ISettings.tsx | all | component | Function component. Hooks: useGeminiImageModels, useCallback. Renders: FormControl, FormLabelStart, Select, Option, Box, Link. |
| `src/modules/t2i/openrouter/OpenRouterT2ISettings::OpenRouterT2ISettings` | src/modules/t2i/openrouter/OpenRouterT2ISettings.tsx | all | component | Function component. Renders: FormControl, FormLabelStart, Link, Select, Option. |
| `src/modules/trade/BackupRestore::FlashBackup` | src/modules/trade/BackupRestore.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: strong, Typography, Button, DoneIcon, ErrorIcon, DownloadIcon, FormControl. |
| `src/modules/trade/BackupRestore::FlashRestore` | src/modules/trade/BackupRestore.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: br, Typography, Button, DoneIcon, ErrorIcon, RestoreIcon, Sheet. |
| `src/modules/trade/claude-code/ExportClaudeCode::ExportClaudeCode` | src/modules/trade/claude-code/ExportClaudeCode.tsx | all | component | Function component. Hooks: useState, useCallback. Renders: b, Button, FileDownloadOutlinedIcon, GoodModal, Typography, Sheet, _OptionCheckbox. |
| `src/modules/trade/ExportChats::ExportChats` | src/modules/trade/ExportChats.tsx | all | component | Function component. Hooks: useState. Renders: strong, Grid, Box, Typography, GoodTooltip, KeyStroke, Button. |
| `src/modules/trade/ImportChats::ImportChats` | src/modules/trade/ImportChats.tsx | all | component | Function component. Hooks: useState. Renders: strong, Box, Typography, GoodTooltip, KeyStroke, Button, FileUploadOutlinedIcon. |
| `src/modules/trade/ImportOutcomeModal::ImportOutcomeModal` | src/modules/trade/ImportOutcomeModal.tsx | all | component | Function component. Renders: b, GoodModal, Divider, Alert, Typography, Box, List. |
| `src/modules/trade/link/ChatLinkDetails::ChatLinkDetails` | src/modules/trade/link/ChatLinkDetails.tsx | all | component | Function component. Hooks: useState. Renders: b, GoodModal, InlineError, Card, Typography, Stack, Tooltip. |
| `src/modules/trade/link/ChatLinkExport::ChatLinkExport` | src/modules/trade/link/ChatLinkExport.tsx | all | component | Function component. Hooks: useState, useLinkStorageOwnerId. Renders: br, Button, DoneIcon, ShareOutlinedIcon, ConfirmationModal, Link, ChatLinkDetails. |
| `src/modules/trade/TradeModal::TradeModal` | src/modules/trade/TradeModal.tsx | all | component | Function component. Renders: b, GoodModal, ExternalDocsLink, ImportChats, ExportChats. |
| `src/modules/youtube/YouTubeURLInput::YouTubeURLInput` | src/modules/youtube/YouTubeURLInput.tsx | all | component | Arrow function component. Props: onSubmit, sx. Hooks: useState, useQuery, useCallback. Renders: form, Box, Input, YouTubeIcon, Button, InlineError. |

## Coverage

- all: 633 identifier(s)

## Design system components

633 component(s) carry a stable `@uxid`. 46 declare variants (51 axis/axes, 186 value(s) in total), read from `cva()` calls, class maps, prop unions and conditional class branches.

| @uxid | component | file | variants | states | uses | notes |
| --- | --- | --- | --- | --- | --- | --- |
| "pages/_app::Big_AGI_App" | Big_AGI_App | `pages/_app.tsx` |  |  | 0 | Root Next.js app component that wraps every page of Big-AGI. |
| "pages/_document::MyDocument" | MyDocument | `pages/_document.tsx` |  |  | 0 | Custom Next.js document defining the HTML shell for all pages. |
| "pages/dev/debug::DebugCard" | DebugCard | `pages/dev/debug.tsx` |  |  | 0 | Card used on the dev debug page to display a block of debug information. |
| "pages/dev/debug::DebugJsonCard" | DebugJsonCard | `pages/dev/debug.tsx` |  |  | 0 | Debug card variant for displaying JSON data on the dev debug page. |
| "pages/dev/debug::AppDebug" | AppDebug | `pages/dev/debug.tsx` |  |  | 0 | Developer debug page composed of debug cards. |
| "pages/link/callback_openrouter::CallbackOpenRouterPage" | CallbackOpenRouterPage | `pages/link/callback_openrouter.tsx` |  |  | 0 | Page that handles the OpenRouter link callback. |
| "pages/link/share_target::AppShareTarget" | AppShareTarget | `pages/link/share_target.tsx` |  |  | 0 | Page that receives content shared into the app as a share target. |
| "public/closed.html::ClosedPage" | ClosedPage | `public/closed.html` |  |  | 0 | Static page shown when the app is closed. |
| "public/dev/index.html::DevPage" | DevPage | `public/dev/index.html` |  |  | 0 | Static index page for the developer tools area. |
| "public/dev/inspect/doctor.html::DevInspectDoctorPage" | DevInspectDoctorPage | `public/dev/inspect/doctor.html` |  |  | 0 | Static dev inspect page for a diagnostic 'doctor' view. |
| "public/dev/inspect/heal.html::DevInspectHealPage" | DevInspectHealPage | `public/dev/inspect/heal.html` |  |  | 0 | Static dev inspect page for a 'heal' repair view. |
| "public/dev/inspect/logs.html::DevInspectLogsPage" | DevInspectLogsPage | `public/dev/inspect/logs.html` |  |  | 0 | Static dev inspect page for viewing logs. |
| "public/dev/inspect/storage.html::DevInspectStoragePage" | DevInspectStoragePage | `public/dev/inspect/storage.html` |  |  | 0 | Static dev inspect page for viewing storage. |
| "src/apps/AppPlaceholder::AppPlaceholder" | AppPlaceholder | `src/apps/AppPlaceholder.tsx` |  |  | 4 | Placeholder shown in place of an app that is not yet rendered. |
| "src/apps/AppSmallContainer::AppSmallContainer" | AppSmallContainer | `src/apps/AppSmallContainer.tsx` |  |  | 2 | Small, constrained container layout for compact app screens. |
| "src/apps/beam/AppBeam::AppBeam" | AppBeam | `src/apps/beam/AppBeam.tsx` |  |  | 0 | Top-level component of the Beam app. |
| "src/apps/call/AppCall::AppCall" | AppCall | `src/apps/call/AppCall.tsx` | backTo (2) |  | 1 | Top-level component of the Call app. |
| "src/apps/call/CallWizard::StatusCard" | StatusCard | `src/apps/call/CallWizard.tsx` |  |  | 0 | Card in the call wizard showing the status of a setup step. |
| "src/apps/call/CallWizard::CallWizard" | CallWizard | `src/apps/call/CallWizard.tsx` |  |  | 1 | Step-by-step wizard that prepares the user for a call. |
| "src/apps/call/Contacts::ContactCardAvatar" | ContactCardAvatar | `src/apps/call/Contacts.tsx` |  |  | 0 | Avatar displayed within a call contact card. |
| "src/apps/call/Contacts::ContactCardConversationCall" | ContactCardConversationCall | `src/apps/call/Contacts.tsx` |  |  | 0 | Element of a contact card for calling from a conversation. |
| "src/apps/call/Contacts::CallContactCard" | CallContactCard | `src/apps/call/Contacts.tsx` |  |  | 0 | Card representing a single callable contact. |
| "src/apps/call/Contacts::ContactsMenuItems" | ContactsMenuItems | `src/apps/call/Contacts.tsx` |  |  | 0 | Menu items for the Contacts screen. |
| "src/apps/call/Contacts::Contacts" | Contacts | `src/apps/call/Contacts.tsx` |  |  | 1 | Contacts screen listing contacts that can be called. |
| "src/apps/call/Telephone::CallMenu" | CallMenu | `src/apps/call/Telephone.tsx` |  |  | 0 | Menu available during a call on the Telephone screen. |
| "src/apps/call/Telephone::Telephone" | Telephone | `src/apps/call/Telephone.tsx` |  |  | 1 | Telephone screen for an active call. |
| "src/apps/call/components/CallAvatar::CallAvatar" | CallAvatar | `src/apps/call/components/CallAvatar.tsx` |  |  | 1 | Avatar shown for the call participant. |
| "src/apps/call/components/CallButton::CallButton" | CallButton | `src/apps/call/components/CallButton.tsx` |  |  | 7 | Button used for call actions. |
| "src/apps/call/components/CallMessage::CallMessage" | CallMessage | `src/apps/call/components/CallMessage.tsx` |  |  | 3 | Displays a single message within a call. |
| "src/apps/call/components/CallStatus::CallStatus" | CallStatus | `src/apps/call/components/CallStatus.tsx` |  |  | 1 | Displays the current status of a call. |
| "src/apps/chat/AppChat::AppChat" | AppChat | `src/apps/chat/AppChat.tsx` | direction (2) |  | 1 | Top-level component of the Chat app. |
| "src/apps/chat/components/ChatBeamWrapper::ChatBeamWrapper" | ChatBeamWrapper | `src/apps/chat/components/ChatBeamWrapper.tsx` |  |  | 1 | Wrapper that hosts Beam inside the chat. |
| "src/apps/chat/components/ChatCleanupList::ChatCleanupControls" | ChatCleanupControls | `src/apps/chat/components/ChatCleanupList.tsx` |  |  | 1 | Controls for the chat cleanup list. |
| "src/apps/chat/components/ChatMessageList::ChatMessageList" | ChatMessageList | `src/apps/chat/components/ChatMessageList.tsx` |  |  | 0 | Scrollable list of messages in a chat. |
| "src/apps/chat/components/ChatPane::ChatPane" | ChatPane | `src/apps/chat/components/ChatPane.tsx` |  | before | 0 | Pane containing a chat view. |
| "src/apps/chat/components/Ephemerals::PrimitiveRender" | PrimitiveRender | `src/apps/chat/components/Ephemerals.tsx` |  |  | 0 | Renders a primitive value within an ephemeral state display. |
| "src/apps/chat/components/Ephemerals::ListRenderer" | ListRenderer | `src/apps/chat/components/Ephemerals.tsx` |  |  | 0 | Renders a list value within an ephemeral state display. |
| "src/apps/chat/components/Ephemerals::ObjectRenderer" | ObjectRenderer | `src/apps/chat/components/Ephemerals.tsx` |  |  | 0 | Renders an object value within an ephemeral state display. |
| "src/apps/chat/components/Ephemerals::StateRenderer" | StateRenderer | `src/apps/chat/components/Ephemerals.tsx` |  |  | 0 | Renders ephemeral state by dispatching to the primitive, list and object renderers. |
| "src/apps/chat/components/Ephemerals::EphemeralItem" | EphemeralItem | `src/apps/chat/components/Ephemerals.tsx` |  |  | 0 | Displays a single ephemeral item in the chat. |
| "src/apps/chat/components/Ephemerals::Ephemerals" | Ephemerals | `src/apps/chat/components/Ephemerals.tsx` |  |  | 1 | Renders ephemeral (transient) content attached to a chat conversation. |
| "src/apps/chat/components/PaneTitleOverlay::PaneTitleOverlay" | PaneTitleOverlay | `src/apps/chat/components/PaneTitleOverlay.tsx` |  |  | 0 | Overlay that shows a title over a chat pane. |
| "src/apps/chat/components/StatusBar::ShortcutItem" | ShortcutItem | `src/apps/chat/components/StatusBar.tsx` | symbol (3) |  | 0 | Single keyboard-shortcut entry displayed inside the status bar. |
| "src/apps/chat/components/StatusBar::StatusBar" | StatusBar | `src/apps/chat/components/StatusBar.tsx` |  |  | 0 | Bottom status strip for the chat, hosting shortcut items and status hints. |
| "src/apps/chat/components/composer/Composer::Composer" | Composer | `src/apps/chat/components/composer/Composer.tsx` |  | disabled | 0 | Main message composer where the user writes and sends input to the chat. |
| "src/apps/chat/components/composer/ComposerDock::ComposerDock" | ComposerDock | `src/apps/chat/components/composer/ComposerDock.tsx` |  |  | 1 | Docking container that positions the composer within the chat layout. |
| "src/apps/chat/components/composer/actile/ActilePopup::ActilePopup" | ActilePopup | `src/apps/chat/components/composer/actile/ActilePopup.tsx` |  |  | 1 | Popup for the composer's actile (inline command/autocomplete) feature. |
| "src/apps/chat/components/composer/buttons/ButtonBeam::ButtonBeam" | ButtonBeam | `src/apps/chat/components/composer/buttons/ButtonBeam.tsx` |  |  | 0 | Composer button that starts a Beam operation. |
| "src/apps/chat/components/composer/buttons/ButtonCall::ButtonCall" | ButtonCall | `src/apps/chat/components/composer/buttons/ButtonCall.tsx` |  |  | 0 | Composer button that initiates a call mode. |
| "src/apps/chat/components/composer/buttons/ButtonGroupDrawRepeat::ButtonGroupDrawRepeat" | ButtonGroupDrawRepeat | `src/apps/chat/components/composer/buttons/ButtonGroupDrawRepeat.tsx` |  |  | 1 | Button group controlling repeat count for draw (image) generation. |
| "src/apps/chat/components/composer/buttons/ButtonMic::ButtonMic" | ButtonMic | `src/apps/chat/components/composer/buttons/ButtonMic.tsx` |  |  | 0 | Composer button that toggles microphone speech input. |
| "src/apps/chat/components/composer/buttons/ButtonMicContinuation::ButtonMicContinuation" | ButtonMicContinuation | `src/apps/chat/components/composer/buttons/ButtonMicContinuation.tsx` |  |  | 0 | Composer button controlling microphone continuation behaviour. |
| "src/apps/chat/components/composer/buttons/ButtonMultiChat::ButtonMultiChat" | ButtonMultiChat | `src/apps/chat/components/composer/buttons/ButtonMultiChat.tsx` |  |  | 0 | Composer button for sending to multiple chats at once. |
| "src/apps/chat/components/composer/buttons/ButtonOptionsDraw::ButtonOptionsDraw" | ButtonOptionsDraw | `src/apps/chat/components/composer/buttons/ButtonOptionsDraw.tsx` |  |  | 2 | Composer button that opens draw (image generation) options. |
| "src/apps/chat/components/composer/composer.input-enhancers::VideoUrlPendingChip" | VideoUrlPendingChip | `src/apps/chat/components/composer/composer.input-enhancers.tsx` |  |  | 0 | Chip shown while a video URL pasted into the composer is pending. |
| "src/apps/chat/components/composer/composer.input-enhancers::VideoUrlDisabledHint" | VideoUrlDisabledHint | `src/apps/chat/components/composer/composer.input-enhancers.tsx` |  |  | 0 | Hint shown when video URL handling in the composer is disabled. |
| "src/apps/chat/components/composer/llmattachments/ComposerAttachmentDraftsList::ComposerAttachmentDraftsList" | ComposerAttachmentDraftsList | `src/apps/chat/components/composer/llmattachments/ComposerAttachmentDraftsList.tsx` |  | disabled | 1 | List of draft attachments queued in the composer before sending. |
| "src/apps/chat/components/composer/llmattachments/LLMAttachmentsPromptsButton::LLMAttachmentsPromptsButton" | LLMAttachmentsPromptsButton | `src/apps/chat/components/composer/llmattachments/LLMAttachmentsPromptsButton.tsx` |  |  | 0 | Button exposing prompt actions for LLM attachments. |
| "src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl::SortableGroupRow" | SortableGroupRow | `src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl.tsx` |  |  | 0 | Draggable row representing one group within the fragment order control. |
| "src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl::MessageFragmentOrderControl" | MessageFragmentOrderControl | `src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl.tsx` |  |  | 1 | Control for reordering message fragments (text and attachments) before sending. |
| "src/apps/chat/components/composer/textarea/ComposerTextAreaActions::ComposerTextAreaActions" | ComposerTextAreaActions | `src/apps/chat/components/composer/textarea/ComposerTextAreaActions.tsx` |  |  | 1 | Action controls attached to the composer text area. |
| "src/apps/chat/components/composer/textarea/ComposerTextAreaDrawActions::ComposerTextAreaDrawActions" | ComposerTextAreaDrawActions | `src/apps/chat/components/composer/textarea/ComposerTextAreaDrawActions.tsx` |  |  | 1 | Draw-mode-specific action controls for the composer text area. |
| "src/apps/chat/components/composer/tokens/TokenBadge::TokenBadge" | TokenBadge | `src/apps/chat/components/composer/tokens/TokenBadge.tsx` |  |  | 0 | Badge displaying a token count for the composer input. |
| "src/apps/chat/components/composer/tokens/TokenProgressbar::TokenProgressbar" | TokenProgressbar | `src/apps/chat/components/composer/tokens/TokenProgressbar.tsx` |  |  | 0 | Progress bar visualising token usage against a limit. |
| "src/apps/chat/components/composer/tokens/TokenTooltip::TokenTooltip" | TokenTooltip | `src/apps/chat/components/composer/tokens/TokenTooltip.tsx` | placement (2) |  | 2 | Tooltip giving detail about the token count. |
| "src/apps/chat/components/layout-bar/ChatBarAltTitle::ChatBarAltTitle" | ChatBarAltTitle | `src/apps/chat/components/layout-bar/ChatBarAltTitle.tsx` |  |  | 0 | Alternate title display in the chat layout bar. |
| "src/apps/chat/components/layout-bar/ChatBarBeam::ChatBarBeam" | ChatBarBeam | `src/apps/chat/components/layout-bar/ChatBarBeam.tsx` |  |  | 1 | Layout-bar content shown while in Beam mode. |
| "src/apps/chat/components/layout-bar/ChatBarBreadcrumbs::ChatBarBreadcrumbs" | ChatBarBreadcrumbs | `src/apps/chat/components/layout-bar/ChatBarBreadcrumbs.tsx` |  |  | 2 | Breadcrumb navigation in the chat layout bar. |
| "src/apps/chat/components/layout-bar/ChatBarChat::ChatBarChat" | ChatBarChat | `src/apps/chat/components/layout-bar/ChatBarChat.tsx` |  |  | 1 | Default layout-bar content for a chat conversation. |
| "src/apps/chat/components/layout-bar/ChatToolbar::ChatToolbar" | ChatToolbar | `src/apps/chat/components/layout-bar/ChatToolbar.tsx` |  |  | 0 | Toolbar of chat-level actions in the layout bar. |
| "src/apps/chat/components/layout-bar/useLLMDropdown::LLMDropdown" | LLMDropdown | `src/apps/chat/components/layout-bar/useLLMDropdown.tsx` |  |  | 0 | Dropdown for selecting the LLM model used by the chat. |
| "src/apps/chat/components/layout-bar/usePersonaDropdown::PersonaDropdown" | PersonaDropdown | `src/apps/chat/components/layout-bar/usePersonaDropdown.tsx` |  |  | 0 | Dropdown for selecting the persona used by the chat. |
| "src/apps/chat/components/layout-drawer/ChatDrawer::ChatDrawer" | ChatDrawer | `src/apps/chat/components/layout-drawer/ChatDrawer.tsx` |  |  | 0 | Side drawer listing conversations and folders. |
| "src/apps/chat/components/layout-drawer/ChatDrawerItem::ChatDrawerItem" | ChatDrawerItem | `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx` |  |  | 1 | Single conversation entry within the chat drawer. |
| "src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning::ChatDrawerStorageWarning" | ChatDrawerStorageWarning | `src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning.tsx` |  |  | 1 | Warning shown in the drawer about storage usage. |
| "src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning::StorageWarningConfirmationModal" | StorageWarningConfirmationModal | `src/apps/chat/components/layout-drawer/ChatDrawerStorageWarning.tsx` |  |  | 0 | Confirmation modal opened from the storage warning. |
| "src/apps/chat/components/layout-drawer/folders/ChatFolderList::ChatFolderList" | ChatFolderList | `src/apps/chat/components/layout-drawer/folders/ChatFolderList.tsx` |  |  | 1 | List of chat folders in the drawer. |
| "src/apps/chat/components/layout-drawer/folders/FolderListItem::FolderListItem" | FolderListItem | `src/apps/chat/components/layout-drawer/folders/FolderListItem.tsx` |  |  | 1 | Single folder entry within the folder list. |
| "src/apps/chat/components/layout-panel/ActionFolder::ActionFolder" | ActionFolder | `src/apps/chat/components/layout-panel/ActionFolder.tsx` |  | disabled | 1 | Panel action for folder operations on a chat. |
| "src/apps/chat/components/layout-panel/ChatPanel::VariformPaneFrame" | VariformPaneFrame | `src/apps/chat/components/layout-panel/ChatPanel.tsx` |  |  | 0 | Frame used by the chat panel to wrap a variform pane. |
| "src/apps/chat/components/layout-panel/ChatPanel::ChatPanel" | ChatPanel | `src/apps/chat/components/layout-panel/ChatPanel.tsx` |  |  | 0 | The chat app's side panel region in the layout. |
| "src/apps/chat/components/layout-panel/WindowSplitControls::WindowSplitControls" | WindowSplitControls | `src/apps/chat/components/layout-panel/WindowSplitControls.tsx` |  |  | 1 | Controls for splitting the chat window into multiple panes. |
| "src/apps/chat/components/live-svg/LiveSvgAnimator::Stat" | Stat | `src/apps/chat/components/live-svg/LiveSvgAnimator.tsx` |  |  | 0 | A single stat readout shown alongside the live SVG animator. |
| "src/apps/chat/components/live-svg/LiveSvgAnimator::TpsSparkline" | TpsSparkline | `src/apps/chat/components/live-svg/LiveSvgAnimator.tsx` |  |  | 0 | A sparkline plotting TPS over time for the live SVG animator. |
| "src/apps/chat/components/live-svg/LiveSvgAnimator::LiveSvgAnimator" | LiveSvgAnimator | `src/apps/chat/components/live-svg/LiveSvgAnimator.tsx` |  |  | 1 | Animates SVG content live inside the chat, with its Stat and TpsSparkline readouts. |
| "src/apps/chat/components/message/BlockOpContinue::BlockOpContinue" | BlockOpContinue | `src/apps/chat/components/message/BlockOpContinue.tsx` |  |  | 1 | Block-level operation prompting to continue a message's generation. |
| "src/apps/chat/components/message/BlockOpOptions::BlockOpOptions" | BlockOpOptions | `src/apps/chat/components/message/BlockOpOptions.tsx` |  |  | 1 | Block-level operation presenting options for a message block. |
| "src/apps/chat/components/message/BlockOpResolveVertexAILinks::BlockOpResolveVertexAILinks" | BlockOpResolveVertexAILinks | `src/apps/chat/components/message/BlockOpResolveVertexAILinks.tsx` |  |  | 1 | Block-level operation to resolve Vertex AI links found in a message. |
| "src/apps/chat/components/message/BlockOpUpstreamResume::BlockOpUpstreamResume" | BlockOpUpstreamResume | `src/apps/chat/components/message/BlockOpUpstreamResume.tsx` |  |  | 2 | Block-level operation to resume an upstream response. |
| "src/apps/chat/components/message/CMEditAttach::CMEditAttach" | CMEditAttach | `src/apps/chat/components/message/CMEditAttach.tsx` | variant (2) |  | 2 | Chat-message control for attaching while editing a message. |
| "src/apps/chat/components/message/ChatMessage::CMDesktopAvatar" | CMDesktopAvatar | `src/apps/chat/components/message/ChatMessage.tsx` |  | only | 0 | The message author avatar as shown on desktop. |
| "src/apps/chat/components/message/ChatMessage::CMMobileHeader" | CMMobileHeader | `src/apps/chat/components/message/ChatMessage.tsx` |  | only | 0 | The message header as shown on mobile, in place of the desktop avatar. |
| "src/apps/chat/components/message/ChatMessage::ChatMessage" | ChatMessage | `src/apps/chat/components/message/ChatMessage.tsx` |  | only | 3 | A single message in the conversation, composing its avatar or header, content fragments and attachments. |
| "src/apps/chat/components/message/ChatMessageBubble::ChatMessageBubble" | ChatMessageBubble | `src/apps/chat/components/message/ChatMessageBubble.tsx` |  |  | 1 | Bubble-style presentation of a chat message. |
| "src/apps/chat/components/message/ChatMessageInfoPopup::ChatMessageInfoPopup" | ChatMessageInfoPopup | `src/apps/chat/components/message/ChatMessageInfoPopup.tsx` |  | open | 1 | Popup showing information about a message. |
| "src/apps/chat/components/message/ChatMessageMenu::ChatMessageMenu" | ChatMessageMenu | `src/apps/chat/components/message/ChatMessageMenu.tsx` |  |  | 1 | Menu of actions for a message. |
| "src/apps/chat/components/message/ChatMessageTimestamp::ChatMessageTimestamp" | ChatMessageTimestamp | `src/apps/chat/components/message/ChatMessageTimestamp.tsx` |  |  | 1 | Displays a message's timestamp. |
| "src/apps/chat/components/message/CleanerMessage::MessagesSelectionHeader" | MessagesSelectionHeader | `src/apps/chat/components/message/CleanerMessage.tsx` |  |  | 1 | Header for the message-selection (cleaner) mode. |
| "src/apps/chat/components/message/CleanerMessage::CleanerMessage" | CleanerMessage | `src/apps/chat/components/message/CleanerMessage.tsx` |  |  | 1 | Compact selectable message row used in cleaner mode. |
| "src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton::DocAttachmentDeleteButton" | DocAttachmentDeleteButton | `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton.tsx` |  |  | 0 | Button that deletes a document attachment fragment. |
| "src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton::DocAttachmentFragmentButton" | DocAttachmentFragmentButton | `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton.tsx` |  |  | 2 | Button representing a document attachment fragment on a message. |
| "src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentPane::DocAttachmentFragmentPane" | DocAttachmentFragmentPane | `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentPane.tsx` |  |  | 2 | Pane that shows the contents of a selected document attachment fragment. |
| "src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments::SortableDocAttachmentButton" | SortableDocAttachmentButton | `src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments.tsx` | renderVariant (2) |  | 1 | Drag-sortable wrapper around a document attachment button. |
| "src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments::DocumentAttachmentFragments" | DocumentAttachmentFragments | `src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments.tsx` |  |  | 1 | Lists a message's document attachment fragments with sortable buttons and a detail pane. |
| "src/apps/chat/components/message/fragments-attachment-doc/livefile-sync/LiveFileControlButton::LiveFileControlButton" | LiveFileControlButton | `src/apps/chat/components/message/fragments-attachment-doc/livefile-sync/LiveFileControlButton.tsx` |  | disabled | 1 | Button controlling live-file sync for a document attachment. |
| "src/apps/chat/components/message/fragments-attachment-edit/EditAttachmentFragments::EditAttachmentFragments" | EditAttachmentFragments | `src/apps/chat/components/message/fragments-attachment-edit/EditAttachmentFragments.tsx` |  |  | 1 | Editing view for a message's attachment fragments. |
| "src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageTitleEditorOverlay" | ImageTitleEditorOverlay | `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx` | renderVariant (2) |  | 0 | Overlay for editing an image attachment's title. |
| "src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageAttachmentCard" | ImageAttachmentCard | `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx` |  |  | 0 | Card displaying one image attachment fragment. |
| "src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::SortableImageAttachmentCard" | SortableImageAttachmentCard | `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx` |  |  | 1 | Drag-sortable wrapper around an image attachment card. |
| "src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments::ImageAttachmentFragments" | ImageAttachmentFragments | `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx` |  |  | 1 | Lists a message's image attachment fragments as sortable cards. |
| "src/apps/chat/components/message/fragments-content/BlockEdit_TextFragment::BlockEdit_TextFragment" | BlockEdit_TextFragment | `src/apps/chat/components/message/fragments-content/BlockEdit_TextFragment.tsx` |  | disabled | 2 | In-place editor for a text content fragment. |
| "src/apps/chat/components/message/fragments-content/BlockOpEmpty::BlockOpEmpty" | BlockOpEmpty | `src/apps/chat/components/message/fragments-content/BlockOpEmpty.tsx` |  |  | 1 | Placeholder operation shown for an empty content block. |
| "src/apps/chat/components/message/fragments-content/BlockPartError::BlockPartError" | BlockPartError | `src/apps/chat/components/message/fragments-content/BlockPartError.tsx` |  |  | 2 | Renders an error part within a message block. |
| "src/apps/chat/components/message/fragments-content/BlockPartError_NetDisconnected::BlockPartError_NetDisconnected" | BlockPartError_NetDisconnected | `src/apps/chat/components/message/fragments-content/BlockPartError_NetDisconnected.tsx` | disconnectionKind (3) |  | 1 | Error part for a network disconnection. |
| "src/apps/chat/components/message/fragments-content/BlockPartError_RequestExceeded::BlockPartError_RequestExceeded" | BlockPartError_RequestExceeded | `src/apps/chat/components/message/fragments-content/BlockPartError_RequestExceeded.tsx` |  |  | 1 | Error part for a request that exceeded a limit. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::AnthropicFileChip" | AnthropicFileChip | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 0 | Chip for a file hosted by Anthropic referenced in a message. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::OpenAIContainerFileChip" | OpenAIContainerFileChip | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 0 | Chip for an OpenAI container file referenced in a message. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::GeminiFileChip" | GeminiFileChip | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 0 | Chip for a file hosted by Gemini referenced in a message. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::UrlVideoChip" | UrlVideoChip | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 0 | Chip for a video referenced by URL in a message. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::NoAccessChip" | NoAccessChip | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 0 | Chip shown when a hosted resource cannot be accessed. |
| "src/apps/chat/components/message/fragments-content/BlockPartHostedResource::BlockPartHostedResource" | BlockPartHostedResource | `src/apps/chat/components/message/fragments-content/BlockPartHostedResource.tsx` |  |  | 1 | Renders a hosted resource part inside a chat message fragment. |
| "src/apps/chat/components/message/fragments-content/BlockPartImageRef::BlockPartImageRef" | BlockPartImageRef | `src/apps/chat/components/message/fragments-content/BlockPartImageRef.tsx` |  |  | 2 | Renders an image reference part within a chat message. |
| "src/apps/chat/components/message/fragments-content/BlockPartText_AutoBlocks::BlockPartText_AutoBlocks" | BlockPartText_AutoBlocks | `src/apps/chat/components/message/fragments-content/BlockPartText_AutoBlocks.tsx` |  |  | 0 | Renders a text part of a message, automatically splitting it into blocks. |
| "src/apps/chat/components/message/fragments-content/BlockPartToolInvocation::KeyValueGrid" | KeyValueGrid | `src/apps/chat/components/message/fragments-content/BlockPartToolInvocation.tsx` |  |  | 1 | A key/value grid used to lay out the details of a tool invocation. |
| "src/apps/chat/components/message/fragments-content/BlockPartToolInvocation::BlockPartToolInvocation" | BlockPartToolInvocation | `src/apps/chat/components/message/fragments-content/BlockPartToolInvocation.tsx` |  |  | 2 | Displays a tool invocation part of a chat message. |
| "src/apps/chat/components/message/fragments-content/BlockPartToolResponse::BlockPartToolResponse" | BlockPartToolResponse | `src/apps/chat/components/message/fragments-content/BlockPartToolResponse.tsx` |  |  | 3 | Displays the response returned from a tool invocation. |
| "src/apps/chat/components/message/fragments-content/HostedFileChip::HostedFileChipButton" | HostedFileChipButton | `src/apps/chat/components/message/fragments-content/HostedFileChip.tsx` |  | disabled, file | 1 | Button variant of the hosted-file chip for actionable file references. |
| "src/apps/chat/components/message/fragments-content/HostedFileChip::HostedFileChip" | HostedFileChip | `src/apps/chat/components/message/fragments-content/HostedFileChip.tsx` |  | disabled, file | 3 | Compact chip representing a hosted file within message content. |
| "src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations::BlockPartModelAnnotations" | BlockPartModelAnnotations | `src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations.tsx` |  |  | 1 | Shows model-provided annotations attached to a message. |
| "src/apps/chat/components/message/fragments-void/BlockPartModelAux::BlockPartModelAux" | BlockPartModelAux | `src/apps/chat/components/message/fragments-void/BlockPartModelAux.tsx` |  |  | 0 | Renders auxiliary model output associated with a message. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipFollowUp" | RenderChipFollowUp | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Chip rendered in a placeholder part to present a follow-up. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipNotice" | RenderChipNotice | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Chip rendered in a placeholder part to present a notice. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderNoticeDetail" | RenderNoticeDetail | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Expanded detail content for a placeholder notice. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderDividerNotice" | RenderDividerNotice | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Divider-style notice shown within a placeholder part. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipAixControl" | RenderChipAixControl | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Chip exposing an AIX control action within a placeholder part. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipListModelOps" | RenderChipListModelOps | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | List of chips representing model operations in a placeholder part. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::ModelOperationChip" | ModelOperationChip | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Single chip representing one model operation. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::OperationsHarakiriChip" | OperationsHarakiriChip | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 0 | Chip for an operations-related action in the placeholder chip set. |
| "src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder" | BlockPartPlaceholder | `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx` |  | placeholder | 1 | Placeholder part for a message, hosting the notice and chip renderers. |
| "src/apps/chat/components/message/in-reference-to/InReferenceToBubble::InReferenceToBubble" | InReferenceToBubble | `src/apps/chat/components/message/in-reference-to/InReferenceToBubble.tsx` |  |  | 2 | Bubble showing a referenced message a reply is responding to. |
| "src/apps/chat/components/message/in-reference-to/InReferenceToList::InReferenceToList" | InReferenceToList | `src/apps/chat/components/message/in-reference-to/InReferenceToList.tsx` |  |  | 1 | List of in-reference-to bubbles attached to a message. |
| "src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMCitationsNode" | CMCitationsNode | `src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx` |  | placeholder | 0 | Render-tree node that displays a message's citations. |
| "src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMReasoningNode" | CMReasoningNode | `src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx` |  | placeholder | 0 | Render-tree node that displays model reasoning content. |
| "src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMTextNode" | CMTextNode | `src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx` |  | placeholder | 0 | Render-tree node for plain text content. |
| "src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMSortableBlock" | CMSortableBlock | `src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx` |  | placeholder | 0 | Wrapper making a render-tree block sortable. |
| "src/apps/chat/components/message/render-tree/CMRenderTreeNodes::CMRenderTreeNodes" | CMRenderTreeNodes | `src/apps/chat/components/message/render-tree/CMRenderTreeNodes.tsx` |  | placeholder | 1 | Root renderer that walks a message render tree and emits its nodes. |
| "src/apps/chat/components/messages-list/CMLZeroConversation::CMLZeroConversation" | CMLZeroConversation | `src/apps/chat/components/messages-list/CMLZeroConversation.tsx` |  |  | 1 | Empty state shown in the messages list when no conversation exists. |
| "src/apps/chat/components/persona-selector/PersonaSelector::Tile" | Tile | `src/apps/chat/components/persona-selector/PersonaSelector.tsx` |  |  | 0 | Selectable tile representing a single persona. |
| "src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector" | PersonaSelector | `src/apps/chat/components/persona-selector/PersonaSelector.tsx` |  |  | 1 | Grid of persona tiles for choosing a chat persona. |
| "src/apps/chat/execute-mode/ExecuteModeMenu::ExecuteModeMenu" | ExecuteModeMenu | `src/apps/chat/execute-mode/ExecuteModeMenu.tsx` |  |  | 1 | Menu for choosing how a chat message is executed. |
| "src/apps/diff/AppDiff::AppDiff" | AppDiff | `src/apps/diff/AppDiff.tsx` |  |  | 1 | Top-level screen of the diff application. |
| "src/apps/draw/AppDraw::AppDraw" | AppDraw | `src/apps/draw/AppDraw.tsx` |  |  | 1 | Top-level screen of the draw application. |
| "src/apps/draw/DrawCreate::DrawCreate" | DrawCreate | `src/apps/draw/DrawCreate.tsx` |  |  | 1 | Creation view of the draw app where images are generated. |
| "src/apps/draw/DrawGallery::DrawGallery" | DrawGallery | `src/apps/draw/DrawGallery.tsx` | domain (2) |  | 2 | Gallery view of the draw app for browsing generated images. |
| "src/apps/draw/create/ButtonPromptFromIdea::ButtonPromptFromIdea" | ButtonPromptFromIdea | `src/apps/draw/create/ButtonPromptFromIdea.tsx` |  | disabled | 2 | Button that produces a draw prompt from an idea. |
| "src/apps/draw/create/ButtonPromptFromX::ButtonPromptFromX" | ButtonPromptFromX | `src/apps/draw/create/ButtonPromptFromX.tsx` |  |  | 2 | Button that produces a draw prompt from another source. |
| "src/apps/draw/create/DrawProviderConfigure::DrawProviderConfigure" | DrawProviderConfigure | `src/apps/draw/create/DrawProviderConfigure.tsx` |  |  | 1 | Configuration controls for the selected drawing provider. |
| "src/apps/draw/create/DrawProviderSelector::DrawProviderSelector" | DrawProviderSelector | `src/apps/draw/create/DrawProviderSelector.tsx` |  |  | 1 | Selector for choosing which drawing provider to use. |
| "src/apps/draw/create/DrawSectionHeading::DrawSectionHeading" | DrawSectionHeading | `src/apps/draw/create/DrawSectionHeading.tsx` |  |  | 1 | Heading used to label sections of the draw creation view. |
| "src/apps/draw/create/PromptComposer::PromptComposer" | PromptComposer | `src/apps/draw/create/PromptComposer.tsx` |  |  | 1 | Input area for composing the image generation prompt. |
| "src/apps/draw/create/ZeroDrawConfig::ZeroDrawConfig" | ZeroDrawConfig | `src/apps/draw/create/ZeroDrawConfig.tsx` |  |  | 1 | Empty state shown in the Draw create flow when no drawing configuration is available. |
| "src/apps/draw/create/ZeroGenerations::ZeroGenerations" | ZeroGenerations | `src/apps/draw/create/ZeroGenerations.tsx` |  |  | 1 | Empty state shown in the Draw create flow when no image generations exist yet. |
| "src/apps/draw/gallery/ZeroGallery::ZeroGallery" | ZeroGallery | `src/apps/draw/gallery/ZeroGallery.tsx` | domain (2) |  | 1 | Empty state for the Draw gallery when it contains no items. |
| "src/apps/draw/useDrawSectionDropdown::DrawSectionDropdown" | DrawSectionDropdown | `src/apps/draw/useDrawSectionDropdown.tsx` |  |  | 0 | Dropdown for switching between sections of the Draw app. |
| "src/apps/link-chat/AppLinkChat::Centerer" | Centerer | `src/apps/link-chat/AppLinkChat.tsx` |  |  | 0 | Layout helper that centers its content within the shared-link chat app. |
| "src/apps/link-chat/AppLinkChat::ListPlaceholder" | ListPlaceholder | `src/apps/link-chat/AppLinkChat.tsx` |  |  | 0 | Placeholder displayed in place of the shared-chat list when content is not yet available. |
| "src/apps/link-chat/AppLinkChat::ShowLoading" | ShowLoading | `src/apps/link-chat/AppLinkChat.tsx` |  |  | 0 | Loading state displayed while a shared chat link is being fetched. |
| "src/apps/link-chat/AppLinkChat::ShowError" | ShowError | `src/apps/link-chat/AppLinkChat.tsx` |  |  | 0 | Error state displayed when a shared chat link cannot be loaded. |
| "src/apps/link-chat/AppLinkChat::AppLinkChat" | AppLinkChat | `src/apps/link-chat/AppLinkChat.tsx` |  |  | 1 | Top-level app for opening and viewing chats shared via link. |
| "src/apps/link-chat/LinkChatAppMenuItems::LinkChatAppMenuItems" | LinkChatAppMenuItems | `src/apps/link-chat/LinkChatAppMenuItems.tsx` |  |  | 1 | Menu items for the application menu while in the shared-link chat app. |
| "src/apps/link-chat/LinkChatDrawer::LinkChatDrawer" | LinkChatDrawer | `src/apps/link-chat/LinkChatDrawer.tsx` |  |  | 1 | Side drawer content for the shared-link chat app. |
| "src/apps/link-chat/LinkChatViewer::LinkChatViewer" | LinkChatViewer | `src/apps/link-chat/LinkChatViewer.tsx` |  |  | 1 | Read-only viewer that renders a shared chat conversation. |
| "src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilitiesAllowed" | AppLlmCapabilitiesAllowed | `src/apps/llm-capabilities/AppLlmCapabilities.tsx` |  |  | 0 | View of the LLM capabilities app shown when access is allowed. |
| "src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilitiesDenied" | AppLlmCapabilitiesDenied | `src/apps/llm-capabilities/AppLlmCapabilities.tsx` |  |  | 0 | View of the LLM capabilities app shown when access is denied. |
| "src/apps/llm-capabilities/AppLlmCapabilities::AppLlmCapabilities" | AppLlmCapabilities | `src/apps/llm-capabilities/AppLlmCapabilities.tsx` |  |  | 1 | Top-level LLM capabilities app that routes to the allowed or denied view. |
| "src/apps/llm-capabilities/components/ResultsTable::ResultsTable" | ResultsTable | `src/apps/llm-capabilities/components/ResultsTable.tsx` |  | empty | 1 | Table presenting the results of LLM capability runs. |
| "src/apps/llm-capabilities/components/RunControls::RunControls" | RunControls | `src/apps/llm-capabilities/components/RunControls.tsx` |  |  | 1 | Controls for starting and managing LLM capability runs. |
| "src/apps/news/AppNews::AppNewsModuleScope" | AppNewsModuleScope | `src/apps/news/AppNews.tsx` |  |  | 0 | Scoping wrapper for the News app module. |
| "src/apps/news/AppNews::BuildInfoCard" | BuildInfoCard | `src/apps/news/AppNews.tsx` |  |  | 1 | Card displaying build information within the News app. |
| "src/apps/news/AppNews::BuildInfoSheet" | BuildInfoSheet | `src/apps/news/AppNews.tsx` |  |  | 0 | Sheet presentation of build information within the News app. |
| "src/apps/news/AppNews::NewsCard" | NewsCard | `src/apps/news/AppNews.tsx` |  |  | 0 | Card presenting a single news entry. |
| "src/apps/news/AppNews::AppNews" | AppNews | `src/apps/news/AppNews.tsx` |  |  | 1 | Top-level News app listing release news and build information. |
| "src/apps/news/bigAgiPro.data::BigAgiProNewsCallout" | BigAgiProNewsCallout | `src/apps/news/bigAgiPro.data.tsx` |  |  | 2 | Callout within news content that highlights Big-AGI Pro. |
| "src/apps/news/news.data::NewsData" | NewsData | `src/apps/news/news.data.tsx` |  |  | 0 | News content data rendered by the News app. |
| "src/apps/news/news.data::B" | B | `src/apps/news/news.data.tsx` |  |  | 0 | Inline bold-text helper used within news content. |
| "src/apps/personas/AppPersonas::AppPersonas" | AppPersonas | `src/apps/personas/AppPersonas.tsx` |  |  | 1 | Top-level Personas app hosting the persona creator. |
| "src/apps/personas/creator/Creator::PersonaPromptCard" | PersonaPromptCard | `src/apps/personas/creator/Creator.tsx` |  |  | 1 | Card displaying a generated persona prompt. |
| "src/apps/personas/creator/Creator::Creator" | Creator | `src/apps/personas/creator/Creator.tsx` |  |  | 1 | Main persona creation flow that produces a persona from a source. |
| "src/apps/personas/creator/CreatorDrawer::CreatorDrawer" | CreatorDrawer | `src/apps/personas/creator/CreatorDrawer.tsx` |  |  | 1 | Side drawer for the persona creator. |
| "src/apps/personas/creator/CreatorDrawerItem::CreatorDrawerItem" | CreatorDrawerItem | `src/apps/personas/creator/CreatorDrawerItem.tsx` |  |  | 1 | Single entry within the persona creator drawer. |
| "src/apps/personas/creator/FromText::FromText" | FromText | `src/apps/personas/creator/FromText.tsx` |  |  | 1 | Input for creating a persona from provided text. |
| "src/apps/personas/creator/FromYouTube::YouTubeDisabledCard" | YouTubeDisabledCard | `src/apps/personas/creator/FromYouTube.tsx` |  |  | 0 | Card shown when persona creation from YouTube is disabled. |
| "src/apps/personas/creator/FromYouTube::YouTubeVideoTranscriptCard" | YouTubeVideoTranscriptCard | `src/apps/personas/creator/FromYouTube.tsx` |  |  | 0 | Card presenting a YouTube video transcript used as persona source material. |
| "src/apps/personas/creator/FromYouTube::FromYouTube" | FromYouTube | `src/apps/personas/creator/FromYouTube.tsx` |  |  | 1 | Input for creating a persona from a YouTube video. |
| "src/apps/personas/creator/Viewer::Viewer" | Viewer | `src/apps/personas/creator/Viewer.tsx` |  |  | 1 | Viewer for the output of the persona creator. |
| "src/apps/settings-modal/AppChatSettingsAI::FormControlDomainModel" | FormControlDomainModel | `src/apps/settings-modal/AppChatSettingsAI.tsx` |  |  | 0 | Form control for choosing the model assigned to a domain in AI chat settings. |
| "src/apps/settings-modal/AppChatSettingsAI::AppChatSettingsAI" | AppChatSettingsAI | `src/apps/settings-modal/AppChatSettingsAI.tsx` |  |  | 1 | AI section of the chat settings modal. |
| "src/apps/settings-modal/SettingsContent::SectionHeader" | SectionHeader | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Header for a section within the settings modal. |
| "src/apps/settings-modal/SettingsContent::ChildNav" | ChildNav | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Navigation element leading to child settings sections. |
| "src/apps/settings-modal/SettingsContent::VoiceInputBlock" | VoiceInputBlock | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Settings block for voice input options. |
| "src/apps/settings-modal/SettingsContent::VoiceOutputBlock" | VoiceOutputBlock | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Block within the settings content that groups the voice output section. |
| "src/apps/settings-modal/SettingsContent::ToolsDiagnostics" | ToolsDiagnostics | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Diagnostics section shown in the settings content for tools. |
| "src/apps/settings-modal/SettingsContent::ToolsSearchBanner" | ToolsSearchBanner | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 0 | Banner inside the settings content relating to tools search. |
| "src/apps/settings-modal/SettingsContent::SettingsContent" | SettingsContent | `src/apps/settings-modal/SettingsContent.tsx` |  |  | 2 | Main body of the settings modal that renders the selected settings section. |
| "src/apps/settings-modal/SettingsModal::SettingsModal" | SettingsModal | `src/apps/settings-modal/SettingsModal.tsx` |  | open | 0 | Top-level modal dialog hosting the application settings. |
| "src/apps/settings-modal/SettingsNavList::SettingsNavList" | SettingsNavList | `src/apps/settings-modal/SettingsNavList.tsx` |  |  | 1 | List-style navigation between settings sections. |
| "src/apps/settings-modal/SettingsNavSelect::SettingsNavSelect" | SettingsNavSelect | `src/apps/settings-modal/SettingsNavSelect.tsx` |  |  | 1 | Select-style navigation between settings sections, an alternative to the list. |
| "src/apps/settings-modal/ShortcutsModal::ShortcutKeyCombo" | ShortcutKeyCombo | `src/apps/settings-modal/ShortcutsModal.tsx` |  |  | 0 | Renders a single keyboard key combination. |
| "src/apps/settings-modal/ShortcutsModal::ShortcutsModal" | ShortcutsModal | `src/apps/settings-modal/ShortcutsModal.tsx` |  |  | 1 | Modal listing the available keyboard shortcuts. |
| "src/apps/settings-modal/UxLabsSettings::UxLabsSettings" | UxLabsSettings | `src/apps/settings-modal/UxLabsSettings.tsx` |  |  | 1 | Settings panel for experimental UX labs features. |
| "src/apps/settings-modal/VoiceInSettings::VoiceInSettings" | VoiceInSettings | `src/apps/settings-modal/VoiceInSettings.tsx` |  |  | 1 | Settings panel for voice input. |
| "src/apps/settings-modal/VoiceOutSettings::VoiceOutSettings" | VoiceOutSettings | `src/apps/settings-modal/VoiceOutSettings.tsx` |  |  | 1 | Settings panel for voice output. |
| "src/apps/settings-modal/settings-ui/AppChatSettingsUI::ModelsSetupButton" | ModelsSetupButton | `src/apps/settings-modal/settings-ui/AppChatSettingsUI.tsx` |  | after | 0 | Button that opens the models setup from the chat settings. |
| "src/apps/settings-modal/settings-ui/AppChatSettingsUI::AppChatSettingsUI" | AppChatSettingsUI | `src/apps/settings-modal/settings-ui/AppChatSettingsUI.tsx` |  | after | 1 | Settings panel for the chat application's UI options. |
| "src/apps/settings-modal/settings-ui/SettingUIComplexity::SettingUIComplexity" | SettingUIComplexity | `src/apps/settings-modal/settings-ui/SettingUIComplexity.tsx` |  |  | 2 | Setting control for the UI complexity level. |
| "src/apps/settings-modal/settings-ui/SettingUIComposerQuickButton::SettingUIComposerQuickButton" | SettingUIComposerQuickButton | `src/apps/settings-modal/settings-ui/SettingUIComposerQuickButton.tsx` |  |  | 1 | Setting control for the composer quick button. |
| "src/apps/settings-modal/settings-ui/SettingUIContentScaling::SettingUIContentScaling" | SettingUIContentScaling | `src/apps/settings-modal/settings-ui/SettingUIContentScaling.tsx` |  |  | 2 | Setting control for content scaling. |
| "src/apps/settings-modal/settings-ui/SettingUIMessageTimestamps::SettingUIMessageTimestamps" | SettingUIMessageTimestamps | `src/apps/settings-modal/settings-ui/SettingUIMessageTimestamps.tsx` |  |  | 1 | Setting control for showing message timestamps. |
| "src/apps/tokens/AppTokens::AppTokens" | AppTokens | `src/apps/tokens/AppTokens.tsx` |  |  | 1 | Standalone tokens app screen. |
| "src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::InputLoadingPlaceholder" | InputLoadingPlaceholder | `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx` |  |  | 0 | Placeholder shown while an attachment draft input is loading. |
| "src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::InputErrorIndicator" | InputErrorIndicator | `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx` |  |  | 0 | Indicator shown when an attachment draft input has an error. |
| "src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton::AttachmentDraftButton" | AttachmentDraftButton | `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftButton.tsx` |  |  | 0 | Button representing a single attachment draft. |
| "src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftMenu::AttachmentDraftMenu" | AttachmentDraftMenu | `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftMenu.tsx` |  |  | 1 | Menu of actions for an attachment draft. |
| "src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftsList::AttachmentDraftsList" | AttachmentDraftsList | `src/common/attachment-drafts/attachment-drafts-ui/AttachmentDraftsList.tsx` |  |  | 2 | List of the current attachment drafts. |
| "src/common/attachment-drafts/attachment-sources/AttachmentSources::LiveFeedButton" | LiveFeedButton | `src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx` | mode (4) |  | 0 | Button for a live feed attachment source. |
| "src/common/attachment-drafts/attachment-sources/AttachmentSources::AutoDownloadToggle" | AutoDownloadToggle | `src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx` |  |  | 0 | Toggle controlling automatic download for attachment sources. |
| "src/common/attachment-drafts/attachment-sources/AttachmentSources::AttachmentSources" | AttachmentSources | `src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx` |  |  | 0 | Container presenting the available attachment sources. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachCamera::ButtonAttachCamera" | ButtonAttachCamera | `src/common/attachment-drafts/attachment-sources/ButtonAttachCamera.tsx` |  |  | 0 | Button to attach content from the camera. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachClipboard::ButtonAttachClipboard" | ButtonAttachClipboard | `src/common/attachment-drafts/attachment-sources/ButtonAttachClipboard.tsx` |  |  | 0 | Button to attach content from the clipboard. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachGoogleDrive::ButtonAttachGoogleDrive" | ButtonAttachGoogleDrive | `src/common/attachment-drafts/attachment-sources/ButtonAttachGoogleDrive.tsx` |  |  | 0 | Button to attach content from Google Drive. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachNewDoc::ButtonAttachNew" | ButtonAttachNew | `src/common/attachment-drafts/attachment-sources/ButtonAttachNewDoc.tsx` |  |  | 0 | Button to attach a new document. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachScreenCapture::ButtonAttachScreenCapture" | ButtonAttachScreenCapture | `src/common/attachment-drafts/attachment-sources/ButtonAttachScreenCapture.tsx` |  |  | 0 | Button to attach a screen capture. |
| "src/common/attachment-drafts/attachment-sources/ButtonAttachWeb::ButtonAttachWeb" | ButtonAttachWeb | `src/common/attachment-drafts/attachment-sources/ButtonAttachWeb.tsx` |  |  | 0 | Button to attach content from the web. |
| "src/common/attachment-drafts/attachment-sources/useWebAttachmentModal::WebInputModal" | WebInputModal | `src/common/attachment-drafts/attachment-sources/useWebAttachmentModal.tsx` |  | required | 0 | Modal for entering web input when attaching from the web. |
| "src/common/components/3rdparty/GoogleAnalytics::NextGoogleAnalytics" | NextGoogleAnalytics | `src/common/components/3rdparty/GoogleAnalytics.tsx` |  |  | 0 | Google Analytics integration component. |
| "src/common/components/3rdparty/GoogleAnalytics::OptionalGoogleAnalytics" | OptionalGoogleAnalytics | `src/common/components/3rdparty/GoogleAnalytics.tsx` |  |  | 1 | Wrapper that renders Google Analytics only when enabled. |
| "src/common/components/AlreadySet::AlreadySet" | AlreadySet | `src/common/components/AlreadySet.tsx` |  |  | 24 | Indicator that a value has already been set. |
| "src/common/components/AppBreadcrumbs::AppBreadcrumbs" | AppBreadcrumbs | `src/common/components/AppBreadcrumbs.tsx` | size (3) |  | 9 | Breadcrumb navigation for the application. |
| "src/common/components/AvatarDomainFavicon::AvatarDomainFavicon" | AvatarDomainFavicon | `src/common/components/AvatarDomainFavicon.tsx` |  |  | 2 | Avatar displaying a domain's favicon. |
| "src/common/components/ButtonAttachFiles::ButtonAttachFiles" | ButtonAttachFiles | `src/common/components/ButtonAttachFiles.tsx` |  |  | 0 | Button to attach files. |
| "src/common/components/ButtonServiceAdd::ButtonServiceAdd" | ButtonServiceAdd | `src/common/components/ButtonServiceAdd.tsx` |  |  | 3 | A button for adding a service. |
| "src/common/components/ChipExpander::ChipExpander" | ChipExpander | `src/common/components/ChipExpander.tsx` | size (3) |  | 1 | A chip that expands or reveals additional content. |
| "src/common/components/ChipToggleButton::ChipToggleButton" | ChipToggleButton | `src/common/components/ChipToggleButton.tsx` | size (3) |  | 1 | A chip-styled button that toggles an on/off state. |
| "src/common/components/CloseablePopup::CloseablePopup" | CloseablePopup | `src/common/components/CloseablePopup.tsx` | size (3) |  | 16 | A popup container that the user can dismiss. |
| "src/common/components/ConfirmIconButton::ConfirmIconButton" | ConfirmIconButton | `src/common/components/ConfirmIconButton.tsx` | side (2) |  | 4 | An icon button that requires a confirmation step before acting. |
| "src/common/components/ConfirmMenuItem::ConfirmMenuItem" | ConfirmMenuItem | `src/common/components/ConfirmMenuItem.tsx` |  |  | 4 | A menu item that requires confirmation before its action runs. |
| "src/common/components/DarkModeToggleButton::DarkModeToggleButton" | DarkModeToggleButton | `src/common/components/DarkModeToggleButton.tsx` |  | dark | 2 | A button that switches between light and dark mode. |
| "src/common/components/DataStreamViz::DataStreamViz" | DataStreamViz | `src/common/components/DataStreamViz.tsx` |  |  | 1 | A visualization of a data stream. |
| "src/common/components/DebouncedInput::DebouncedInput" | DebouncedInput | `src/common/components/DebouncedInput.tsx` |  |  | 0 | A text input whose value changes are debounced before being emitted. |
| "src/common/components/ErrorBoundary::ErrorBoundary" | ErrorBoundary | `src/common/components/ErrorBoundary.tsx` |  |  | 0 | A boundary that catches rendering errors in its subtree and shows a fallback. |
| "src/common/components/ExpanderAccordion::ExpanderAccordion" | ExpanderAccordion | `src/common/components/ExpanderAccordion.tsx` |  |  | 2 | An accordion-style expander for collapsible content. |
| "src/common/components/ExpanderControlledBox::ExpanderControlledBox" | ExpanderControlledBox | `src/common/components/ExpanderControlledBox.tsx` |  |  | 13 | A box whose expanded state is controlled externally. |
| "src/common/components/ExpanderSection::ExpanderSection" | ExpanderSection | `src/common/components/ExpanderSection.tsx` |  |  | 5 | A section with a header that expands and collapses its body. |
| "src/common/components/ExplainerCarousel::AllStepsStepper" | AllStepsStepper | `src/common/components/ExplainerCarousel.tsx` |  |  | 0 | A stepper showing all steps of an explainer sequence. |
| "src/common/components/ExplainerCarousel::ExplainerCarousel" | ExplainerCarousel | `src/common/components/ExplainerCarousel.tsx` |  |  | 1 | A carousel that walks the user through explanatory steps. |
| "src/common/components/ExternalDocsLink::ExternalDocsLink" | ExternalDocsLink | `src/common/components/ExternalDocsLink.tsx` |  |  | 12 | A link to external documentation. |
| "src/common/components/ExternalLink::ExternalLink" | ExternalLink | `src/common/components/ExternalLink.tsx` | icon (2) |  | 19 | A link that opens an external destination. |
| "src/common/components/FeatureBadge::FeatureBadge" | FeatureBadge | `src/common/components/FeatureBadge.tsx` | size (3) | active | 0 | A badge used to label a feature. |
| "src/common/components/GitHubProjectIssueCard::GitHubProjectIssueCard" | GitHubProjectIssueCard | `src/common/components/GitHubProjectIssueCard.tsx` |  |  | 1 | A card presenting a GitHub project issue. |
| "src/common/components/GoodBadge::GoodBadge" | GoodBadge | `src/common/components/GoodBadge.tsx` |  |  | 0 | A general-purpose badge component. |
| "src/common/components/GoodTooltip::GoodTooltip" | GoodTooltip | `src/common/components/GoodTooltip.tsx` | placement (3) |  | 38 | A general-purpose tooltip component. |
| "src/common/components/InlineError::InlineError" | InlineError | `src/common/components/InlineError.tsx` | _style (2), severity (3) |  | 45 | An inline error message displayed within content flow. |
| "src/common/components/InlineTextarea::InlineTextarea" | InlineTextarea | `src/common/components/InlineTextarea.tsx` |  |  | 11 | A textarea rendered inline within content. |
| "src/common/components/InlineTextareaEditable::InlineTextareaEditable" | InlineTextareaEditable | `src/common/components/InlineTextareaEditable.tsx` |  |  | 0 | An inline textarea that can switch into an editable state. |
| "src/common/components/KeyStroke::KeyStroke" | KeyStroke | `src/common/components/KeyStroke.tsx` | size (3) |  | 18 | A display of a keyboard shortcut or key combination. |
| "src/common/components/LanguageSelect::LanguageSelect" | LanguageSelect | `src/common/components/LanguageSelect.tsx` |  |  | 1 | A selector for choosing a language. |
| "src/common/components/Link::Link" | Link | `src/common/components/Link.tsx` |  |  | 90 | The base link component. |
| "src/common/components/ListItemGroupCollapser::ListItemGroupCollapser" | ListItemGroupCollapser | `src/common/components/ListItemGroupCollapser.tsx` |  |  | 2 | A control for collapsing and expanding a group of list items. |
| "src/common/components/LiteVideoEmbed::LiteVideoEmbed" | LiteVideoEmbed | `src/common/components/LiteVideoEmbed.tsx` | play (3) |  | 3 | A lightweight embedded video player. |
| "src/common/components/LogoProgress::LogoProgress" | LogoProgress | `src/common/components/LogoProgress.tsx` |  |  | 2 | A progress indicator built around the product logo. |
| "src/common/components/MediaStreamPreview::MediaStreamPreview" | MediaStreamPreview | `src/common/components/MediaStreamPreview.tsx` |  |  | 0 | A preview of a live media stream. |
| "src/common/components/RichMenu::RichMenuButton" | RichMenuButton | `src/common/components/RichMenu.tsx` | placement (6) | disabled, only, open | 2 | The trigger button for a rich menu. |
| "src/common/components/RichMenu::RichMenu" | RichMenu | `src/common/components/RichMenu.tsx` |  | disabled, only, open | 2 | A menu container supporting rich item content. |
| "src/common/components/RichMenu::RichMenuItem" | RichMenuItem | `src/common/components/RichMenu.tsx` |  | disabled, only, open | 12 | An item within a rich menu. |
| "src/common/components/Section::Section" | Section | `src/common/components/Section.tsx` |  |  | 2 | A layout section for grouping content. |
| "src/common/components/StackedBarBreakdown::StackedBarBreakdown" | StackedBarBreakdown | `src/common/components/StackedBarBreakdown.tsx` |  |  | 0 | A stacked bar showing a breakdown of parts of a whole. |
| "src/common/components/StarIcons::Starred" | Starred | `src/common/components/StarIcons.tsx` |  |  | 1 | An icon representing a starred state. |
| "src/common/components/StarIcons::StarredNoXL2" | StarredNoXL2 | `src/common/components/StarIcons.tsx` |  |  | 1 | A starred icon variant without the XL2 treatment. |
| "src/common/components/StarIcons::UnStarredNoXL2" | UnStarredNoXL2 | `src/common/components/StarIcons.tsx` |  |  | 0 | An unstarred icon variant without the XL2 treatment. |
| "src/common/components/StarIcons::StarredState" | StarredState | `src/common/components/StarIcons.tsx` |  |  | 4 | An icon that reflects the current starred or unstarred state. |
| "src/common/components/StarIcons::StarIconUnstyled" | StarIconUnstyled | `src/common/components/StarIcons.tsx` |  |  | 2 | Base star glyph without applied styling, intended to be composed or styled by callers. |
| "src/common/components/StarIcons::StarredToggle" | StarredToggle | `src/common/components/StarIcons.tsx` |  |  | 1 | Interactive star control for toggling a starred/favorited state. |
| "src/common/components/SubMenu::SubMenuHost" | SubMenuHost | `src/common/components/SubMenu.tsx` |  | required | 2 | Container that hosts a nested submenu opened from a parent menu. |
| "src/common/components/SubMenu::SubMenuItem" | SubMenuItem | `src/common/components/SubMenu.tsx` |  | required | 4 | Menu item that opens or belongs to a nested submenu. |
| "src/common/components/TooltipOutlined::TooltipOutlined" | TooltipOutlined | `src/common/components/TooltipOutlined.tsx` |  |  | 53 | Tooltip variant with an outlined appearance for hover/focus hints. |
| "src/common/components/VideoPlayerVimeo::VideoPlayerVimeo" | VideoPlayerVimeo | `src/common/components/VideoPlayerVimeo.tsx` | play (3) |  | 0 | Embedded player for Vimeo-hosted video. |
| "src/common/components/VideoPlayerYouTube::VideoPlayerYouTube" | VideoPlayerYouTube | `src/common/components/VideoPlayerYouTube.tsx` | play (3) |  | 1 | Embedded player for YouTube-hosted video. |
| "src/common/components/camera/CameraCaptureModal::CameraCaptureModal" | CameraCaptureModal | `src/common/components/camera/CameraCaptureModal.tsx` |  |  | 1 | Modal dialog for capturing an image from the device camera. |
| "src/common/components/diff/DiffViewer::DiffViewer" | DiffViewer | `src/common/components/diff/DiffViewer.tsx` | oldType (6), newType (6), initialViewType (2) |  | 1 | Displays differences between two pieces of content. |
| "src/common/components/dnd-dt/GlobalDragOverlay::GlobalDragOverlay" | GlobalDragOverlay | `src/common/components/dnd-dt/GlobalDragOverlay.tsx` |  |  | 1 | Full-window overlay shown during drag-and-drop operations using the DataTransfer API. |
| "src/common/components/dnd-window/DraggableWindowTitle::DraggableWindowTitle" | DraggableWindowTitle | `src/common/components/dnd-window/DraggableWindowTitle.tsx` |  | active | 0 | Title bar that acts as the drag handle for a movable floating window. |
| "src/common/components/dnd-window/JoyFloatingWindow::JoyFloatingWindow" | JoyFloatingWindow | `src/common/components/dnd-window/JoyFloatingWindow.tsx` |  |  | 0 | Floating, draggable window container built on the Joy UI library. |
| "src/common/components/folders/FoldersAddButton::FoldersAddButton" | FoldersAddButton | `src/common/components/folders/FoldersAddButton.tsx` |  |  | 2 | Button for creating a new folder. |
| "src/common/components/folders/FoldersSelectPopup::FoldersSelectPopup" | FoldersSelectPopup | `src/common/components/folders/FoldersSelectPopup.tsx` |  |  | 2 | Popup for choosing a folder from the available set. |
| "src/common/components/forms/FormChipControl::FormChipControl" | FormChipControl | `src/common/components/forms/FormChipControl.tsx` |  |  | 0 | Form control rendered as a single selectable chip. |
| "src/common/components/forms/FormChipGroupControl::FormChipGroupControl" | FormChipGroupControl | `src/common/components/forms/FormChipGroupControl.tsx` |  |  | 0 | Form control presenting a group of chips for choosing among options. |
| "src/common/components/forms/FormChipModelControl::FormChipModelControl" | FormChipModelControl | `src/common/components/forms/FormChipModelControl.tsx` |  |  | 6 | Chip-based form control for selecting a model. |
| "src/common/components/forms/FormInputKey::FormInputKey" | FormInputKey | `src/common/components/forms/FormInputKey.tsx` | size (3) | required | 29 | Form input for entering an API key or similar secret. |
| "src/common/components/forms/FormLabelStart::FormLabelStart" | FormLabelStart | `src/common/components/forms/FormLabelStart.tsx` |  |  | 73 | Label placed at the start of a form row, shared by the form controls. |
| "src/common/components/forms/FormNumberInput::FormNumberInput" | FormNumberInput | `src/common/components/forms/FormNumberInput.tsx` | size (3) |  | 0 | Form input for numeric values. |
| "src/common/components/forms/FormRadioControl::FormRadioControl" | FormRadioControl | `src/common/components/forms/FormRadioControl.tsx` |  |  | 0 | Form control offering mutually exclusive options as radio buttons. |
| "src/common/components/forms/FormSelectControl::FormSelectControl" | FormSelectControl | `src/common/components/forms/FormSelectControl.tsx` |  |  | 0 | Form control for selecting one option from a dropdown. |
| "src/common/components/forms/FormSliderControl::FormSliderControl" | FormSliderControl | `src/common/components/forms/FormSliderControl.tsx` | size (3), valueLabelDisplay (3) |  | 12 | Form control for choosing a value along a slider range. |
| "src/common/components/forms/FormSwitchControl::FormSwitchControl" | FormSwitchControl | `src/common/components/forms/FormSwitchControl.tsx` | size (3) | checked | 26 | Form control for a boolean on/off switch. |
| "src/common/components/forms/FormTextField::FormTextField" | FormTextField | `src/common/components/forms/FormTextField.tsx` |  |  | 23 | Form control for free-text input. |
| "src/common/components/forms/SetupFormClientSideToggle::SetupFormClientSideToggle" | SetupFormClientSideToggle | `src/common/components/forms/SetupFormClientSideToggle.tsx` |  | checked | 21 | Setup-form toggle for enabling client-side operation. |
| "src/common/components/forms/SetupFormCorsHint::SetupFormCorsHint" | SetupFormCorsHint | `src/common/components/forms/SetupFormCorsHint.tsx` |  |  | 3 | Hint shown in setup forms about CORS requirements. |
| "src/common/components/forms/SetupFormRefetchButton::SetupFormRefetchButton" | SetupFormRefetchButton | `src/common/components/forms/SetupFormRefetchButton.tsx` |  | disabled | 24 | Button in setup forms to re-fetch remote data. |
| "src/common/components/icons/3rdparty/AuthGitHubIcon::AuthGitHubIcon" | AuthGitHubIcon | `src/common/components/icons/3rdparty/AuthGitHubIcon.tsx` |  |  | 0 | GitHub brand icon used for authentication. |
| "src/common/components/icons/3rdparty/AuthGoogleIcon::AuthGoogleIcon" | AuthGoogleIcon | `src/common/components/icons/3rdparty/AuthGoogleIcon.tsx` |  |  | 0 | Google brand icon used for authentication. |
| "src/common/components/icons/3rdparty/DiscordIcon::DiscordIcon" | DiscordIcon | `src/common/components/icons/3rdparty/DiscordIcon.tsx` |  |  | 0 | Discord brand icon. |
| "src/common/components/icons/CalloutTopRightIcon::CalloutTopRightIcon" | CalloutTopRightIcon | `src/common/components/icons/CalloutTopRightIcon.tsx` |  |  | 1 | Icon depicting a callout pointing to the top right. |
| "src/common/components/icons/ChatBeamIcon::ChatBeamIcon" | ChatBeamIcon | `src/common/components/icons/ChatBeamIcon.tsx` |  |  | 7 | Icon representing the chat Beam feature. |
| "src/common/components/icons/ChatMulticastOffIcon::ChatMulticastOffIcon" | ChatMulticastOffIcon | `src/common/components/icons/ChatMulticastOffIcon.tsx` |  |  | 1 | Icon for the chat multicast feature in its off state. |
| "src/common/components/icons/ChatMulticastOnIcon::ChatMulticastOnIcon" | ChatMulticastOnIcon | `src/common/components/icons/ChatMulticastOnIcon.tsx` |  |  | 3 | Icon for the chat multicast feature in its on state. |
| "src/common/components/icons/CodiconSplitHorizontal::CodiconSplitHorizontal" | CodiconSplitHorizontal | `src/common/components/icons/CodiconSplitHorizontal.tsx` |  |  | 1 | Codicon-style icon for splitting a view horizontally. |
| "src/common/components/icons/CodiconSplitHorizontalRemove::CodiconSplitHorizontalRemove" | CodiconSplitHorizontalRemove | `src/common/components/icons/CodiconSplitHorizontalRemove.tsx` |  |  | 1 | Codicon-style icon for removing a horizontal split. |
| "src/common/components/icons/CodiconSplitVertical::CodiconSplitVertical" | CodiconSplitVertical | `src/common/components/icons/CodiconSplitVertical.tsx` |  |  | 1 | Codicon-style icon for splitting a view vertically. |
| "src/common/components/icons/CodiconSplitVerticalRemove::CodiconSplitVerticalRemove" | CodiconSplitVerticalRemove | `src/common/components/icons/CodiconSplitVerticalRemove.tsx` |  |  | 1 | Codicon-style icon for removing a vertical split. |
| "src/common/components/icons/CodiconUnsplit::CodiconUnsplit" | CodiconUnsplit | `src/common/components/icons/CodiconUnsplit.tsx` |  |  | 0 | Codicon-style icon for collapsing split panes back into one. |
| "src/common/components/icons/DeviceSymbols::DeviceFormFactorIcon" | DeviceFormFactorIcon | `src/common/components/icons/DeviceSymbols.tsx` |  |  | 0 | Icon that represents a device form factor (desktop, tablet or mobile), used wherever the UI needs to indicate which kind of device something belongs to. |
| "src/common/components/icons/DeviceSymbols::DeviceFormChip" | DeviceFormChip | `src/common/components/icons/DeviceSymbols.tsx` |  |  | 0 | Compact chip that pairs a device form-factor symbol with a short label, for tagging items by device type. |
| "src/common/components/icons/FoldersToggleOff::FoldersToggleOff" | FoldersToggleOff | `src/common/components/icons/FoldersToggleOff.tsx` |  |  | 1 | Icon for the inactive state of a folders toggle, shown when folder grouping is turned off. |
| "src/common/components/icons/FoldersToggleOn::FoldersToggleOn" | FoldersToggleOn | `src/common/components/icons/FoldersToggleOn.tsx` |  |  | 1 | Icon for the active state of a folders toggle, shown when folder grouping is turned on. |
| "src/common/components/icons/LayoutSidebarRight::LayoutSidebarRight" | LayoutSidebarRight | `src/common/components/icons/LayoutSidebarRight.tsx` |  |  | 2 | Layout icon depicting a right-hand sidebar, used on controls that open or arrange a side panel. |
| "src/common/components/icons/LiveFilePatchIcon::LiveFilePatchIcon" | LiveFilePatchIcon | `src/common/components/icons/LiveFilePatchIcon.tsx` |  |  | 2 | Icon signalling a live file patch, used where the app applies or displays changes to a linked file. |
| "src/common/components/icons/MarkHighlightIcon::MarkHighlightIcon" | MarkHighlightIcon | `src/common/components/icons/MarkHighlightIcon.tsx` |  |  | 1 | Icon for the text mark/highlight feature, matching the mark-highlight effect token in the styles. |
| "src/common/components/icons/WindowPaneRightOpen::WindowPaneRightOpen" | WindowPaneRightOpen | `src/common/components/icons/WindowPaneRightOpen.tsx` |  |  | 0 | Icon showing a window with its right pane open, for controls that toggle a secondary pane. |
| "src/common/components/icons/big-agi/BigAgiCircleIcon::BigAgiCircleIcon" | BigAgiCircleIcon | `src/common/components/icons/big-agi/BigAgiCircleIcon.tsx` |  |  | 0 | Circular variant of the Big-AGI brand mark, used for logo and identity placements. |
| "src/common/components/icons/big-agi/BigAgiCircleInnerIcon::BigAgiCircleInnerIcon" | BigAgiCircleInnerIcon | `src/common/components/icons/big-agi/BigAgiCircleInnerIcon.tsx` |  |  | 0 | Inner-element variant of the circular Big-AGI brand mark, for smaller or layered brand usage. |
| "src/common/components/icons/big-agi/BigAgiSquircleIcon::BigAgiSquircleIcon" | BigAgiSquircleIcon | `src/common/components/icons/big-agi/BigAgiSquircleIcon.tsx` |  |  | 5 | Squircle-shaped variant of the Big-AGI brand mark, suited to app-icon style placements. |
| "src/common/components/icons/phosphor/PhBookOpenText::PhBookOpenText" | PhBookOpenText | `src/common/components/icons/phosphor/PhBookOpenText.tsx` |  |  | 7 | Phosphor-style open-book icon, for documentation, reading or reference content. |
| "src/common/components/icons/phosphor/PhChats::PhChats" | PhChats | `src/common/components/icons/phosphor/PhChats.tsx` |  |  | 0 | Phosphor-style chats icon, representing conversations in navigation and lists. |
| "src/common/components/icons/phosphor/PhChatsDuotone::PhChatsDuotone" | PhChatsDuotone | `src/common/components/icons/phosphor/PhChatsDuotone.tsx` |  |  | 0 | Duotone variant of the chats icon, for emphasized or selected conversation states. |
| "src/common/components/icons/phosphor/PhDesktop::PhDesktop" | PhDesktop | `src/common/components/icons/phosphor/PhDesktop.tsx` |  |  | 0 | Phosphor-style desktop icon, denoting the desktop device class. |
| "src/common/components/icons/phosphor/PhDeviceMobile::PhDeviceMobile" | PhDeviceMobile | `src/common/components/icons/phosphor/PhDeviceMobile.tsx` |  |  | 0 | Phosphor-style mobile phone icon, denoting the mobile device class. |
| "src/common/components/icons/phosphor/PhDeviceTablet::PhDeviceTablet" | PhDeviceTablet | `src/common/components/icons/phosphor/PhDeviceTablet.tsx` |  |  | 0 | Phosphor-style tablet icon, denoting the tablet device class. |
| "src/common/components/icons/phosphor/PhGearSixIcon::PhGearSixIcon" | PhGearSixIcon | `src/common/components/icons/phosphor/PhGearSixIcon.tsx` |  |  | 5 | Phosphor-style gear icon, used for settings and preferences entry points. |
| "src/common/components/icons/phosphor/PhGift::PhGift" | PhGift | `src/common/components/icons/phosphor/PhGift.tsx` |  |  | 5 | Phosphor-style gift icon, for announcements of new features or rewards. |
| "src/common/components/icons/phosphor/PhHouse::PhHouse" | PhHouse | `src/common/components/icons/phosphor/PhHouse.tsx` |  |  | 2 | Phosphor-style house icon, for the home destination in navigation. |
| "src/common/components/icons/phosphor/PhImageSquare::PhImageSquare" | PhImageSquare | `src/common/components/icons/phosphor/PhImageSquare.tsx` |  |  | 2 | Phosphor-style image icon, for image generation or image content areas. |
| "src/common/components/icons/phosphor/PhKey::PhKey" | PhKey | `src/common/components/icons/phosphor/PhKey.tsx` |  |  | 2 | Phosphor-style key icon, for API keys, credentials and access settings. |
| "src/common/components/icons/phosphor/PhListChecks::PhListChecks" | PhListChecks | `src/common/components/icons/phosphor/PhListChecks.tsx` |  |  | 0 | Phosphor-style checklist icon, for tasks, selections or completion lists. |
| "src/common/components/icons/phosphor/PhMegaphone::PhMegaphone" | PhMegaphone | `src/common/components/icons/phosphor/PhMegaphone.tsx` |  |  | 0 | Phosphor-style megaphone icon, for news and announcements. |
| "src/common/components/icons/phosphor/PhPaintBrush::PhPaintBrush" | PhPaintBrush | `src/common/components/icons/phosphor/PhPaintBrush.tsx` |  |  | 3 | Phosphor-style paintbrush icon, for drawing or visual-creation features. |
| "src/common/components/icons/phosphor/PhPencilSimple::PhPencilSimple" | PhPencilSimple | `src/common/components/icons/phosphor/PhPencilSimple.tsx` |  |  | 0 | Phosphor-style pencil icon, for edit and rename actions. |
| "src/common/components/icons/phosphor/PhRamble::PhRamble" | PhRamble | `src/common/components/icons/phosphor/PhRamble.tsx` |  |  | 0 | Phosphor-style icon for the Ramble feature within the app. |
| "src/common/components/icons/phosphor/PhRobot::PhRobot" | PhRobot | `src/common/components/icons/phosphor/PhRobot.tsx` |  |  | 2 | Phosphor-style robot icon, representing AI assistants or personas. |
| "src/common/components/icons/phosphor/PhSlidersHorizontalIcon::PhSlidersHorizontalIcon" | PhSlidersHorizontalIcon | `src/common/components/icons/phosphor/PhSlidersHorizontalIcon.tsx` |  |  | 1 | Phosphor-style horizontal sliders icon, for tuning parameters and options. |
| "src/common/components/icons/phosphor/PhSlidersIcon::PhSlidersIcon" | PhSlidersIcon | `src/common/components/icons/phosphor/PhSlidersIcon.tsx` |  |  | 0 | Phosphor-style vertical sliders icon, an alternate form for parameter controls. |
| "src/common/components/icons/phosphor/PhSquaresFour::PhSquaresFour" | PhSquaresFour | `src/common/components/icons/phosphor/PhSquaresFour.tsx` |  |  | 1 | Phosphor-style four-squares icon, for grid views or an apps/modules launcher. |
| "src/common/components/icons/phosphor/PhTerminal::PhTerminal" | PhTerminal | `src/common/components/icons/phosphor/PhTerminal.tsx` |  |  | 0 | Phosphor-style terminal icon, for code, console or developer features. |
| "src/common/components/icons/phosphor/PhTreeStructure::PhTreeStructure" | PhTreeStructure | `src/common/components/icons/phosphor/PhTreeStructure.tsx` |  |  | 4 | Phosphor-style tree-structure icon, for hierarchical or branching views. |
| "src/common/components/icons/phosphor/PhUsers::PhUsers" | PhUsers | `src/common/components/icons/phosphor/PhUsers.tsx` |  |  | 0 | Phosphor-style users icon, for people, personas or multi-participant features. |
| "src/common/components/icons/phosphor/PhVoice::PhVoice" | PhVoice | `src/common/components/icons/phosphor/PhVoice.tsx` |  |  | 6 | Phosphor-style voice icon, for speech input and voice features. |
| "src/common/components/icons/phosphor/PhWrench::PhWrench" | PhWrench | `src/common/components/icons/phosphor/PhWrench.tsx` |  |  | 0 | Phosphor-style wrench icon, for tools and configuration. |
| "src/common/components/icons/vendors/AlibabaCloudIcon::AlibabaCloudIcon" | AlibabaCloudIcon | `src/common/components/icons/vendors/AlibabaCloudIcon.tsx` |  |  | 0 | Vendor logo for Alibaba Cloud, used to identify that provider in model and service listings. |
| "src/common/components/icons/vendors/AnthropicIcon::AnthropicIcon" | AnthropicIcon | `src/common/components/icons/vendors/AnthropicIcon.tsx` |  |  | 1 | Vendor logo for Anthropic, used to identify that provider in model and service listings. |
| "src/common/components/icons/vendors/ArceeAIIcon::ArceeAIIcon" | ArceeAIIcon | `src/common/components/icons/vendors/ArceeAIIcon.tsx` |  |  | 0 | Vendor logo for Arcee AI, used to identify that provider in model and service listings. |
| "src/common/components/icons/vendors/AzureIcon::AzureIcon" | AzureIcon | `src/common/components/icons/vendors/AzureIcon.tsx` |  |  | 0 | Vendor logo for Microsoft Azure, used to identify that provider in model and service listings. |
| "src/common/components/icons/vendors/BasetenIcon::BasetenIcon" | BasetenIcon | `src/common/components/icons/vendors/BasetenIcon.tsx` |  |  | 0 | Brand icon identifying the Baseten provider wherever a vendor is shown. |
| "src/common/components/icons/vendors/BedrockIcon::BedrockIcon" | BedrockIcon | `src/common/components/icons/vendors/BedrockIcon.tsx` |  |  | 0 | Brand icon identifying the Bedrock provider. |
| "src/common/components/icons/vendors/CerebrasIcon::CerebrasIcon" | CerebrasIcon | `src/common/components/icons/vendors/CerebrasIcon.tsx` |  |  | 0 | Brand icon identifying the Cerebras provider. |
| "src/common/components/icons/vendors/ChutesAIIcon::ChutesAIIcon" | ChutesAIIcon | `src/common/components/icons/vendors/ChutesAIIcon.tsx` |  |  | 0 | Brand icon identifying the Chutes AI provider. |
| "src/common/components/icons/vendors/ClaudeCrabIcon::ClaudeCrabIcon" | ClaudeCrabIcon | `src/common/components/icons/vendors/ClaudeCrabIcon.tsx` |  |  | 1 | Brand icon identifying Claude (crab mark). |
| "src/common/components/icons/vendors/CloudflareIcon::CloudflareIcon" | CloudflareIcon | `src/common/components/icons/vendors/CloudflareIcon.tsx` |  |  | 0 | Brand icon identifying the Cloudflare provider. |
| "src/common/components/icons/vendors/CohereIcon::CohereIcon" | CohereIcon | `src/common/components/icons/vendors/CohereIcon.tsx` |  |  | 0 | Brand icon identifying the Cohere provider. |
| "src/common/components/icons/vendors/DeepseekIcon::DeepseekIcon" | DeepseekIcon | `src/common/components/icons/vendors/DeepseekIcon.tsx` |  |  | 0 | Brand icon identifying the Deepseek provider. |
| "src/common/components/icons/vendors/ElevenLabsIcon::ElevenLabsIcon" | ElevenLabsIcon | `src/common/components/icons/vendors/ElevenLabsIcon.tsx` |  |  | 0 | Brand icon identifying the ElevenLabs provider. |
| "src/common/components/icons/vendors/FireworksAIIcon::FireworksAIIcon" | FireworksAIIcon | `src/common/components/icons/vendors/FireworksAIIcon.tsx` |  |  | 0 | Brand icon identifying the Fireworks AI provider. |
| "src/common/components/icons/vendors/GeminiIcon::GeminiIcon" | GeminiIcon | `src/common/components/icons/vendors/GeminiIcon.tsx` |  |  | 0 | Brand icon identifying Gemini. |
| "src/common/components/icons/vendors/GroqIcon::GroqIcon" | GroqIcon | `src/common/components/icons/vendors/GroqIcon.tsx` |  |  | 0 | Brand icon identifying the Groq provider. |
| "src/common/components/icons/vendors/InworldIcon::InworldIcon" | InworldIcon | `src/common/components/icons/vendors/InworldIcon.tsx` |  |  | 0 | Brand icon identifying the Inworld provider. |
| "src/common/components/icons/vendors/LMStudioIcon::LMStudioIcon" | LMStudioIcon | `src/common/components/icons/vendors/LMStudioIcon.tsx` |  |  | 0 | Brand icon identifying LM Studio. |
| "src/common/components/icons/vendors/LocalAIIcon::LocalAIIcon" | LocalAIIcon | `src/common/components/icons/vendors/LocalAIIcon.tsx` |  |  | 1 | Brand icon identifying LocalAI. |
| "src/common/components/icons/vendors/MetaAIIcon::MetaAIIcon" | MetaAIIcon | `src/common/components/icons/vendors/MetaAIIcon.tsx` |  |  | 0 | Brand icon identifying Meta AI. |
| "src/common/components/icons/vendors/MiniMaxIcon::MiniMaxIcon" | MiniMaxIcon | `src/common/components/icons/vendors/MiniMaxIcon.tsx` |  |  | 0 | Brand icon identifying the MiniMax provider. |
| "src/common/components/icons/vendors/MistralIcon::MistralIcon" | MistralIcon | `src/common/components/icons/vendors/MistralIcon.tsx` |  |  | 0 | Brand icon identifying the Mistral provider. |
| "src/common/components/icons/vendors/ModularIcon::ModularIcon" | ModularIcon | `src/common/components/icons/vendors/ModularIcon.tsx` |  |  | 0 | Brand icon identifying the Modular provider. |
| "src/common/components/icons/vendors/MoonshotIcon::MoonshotIcon" | MoonshotIcon | `src/common/components/icons/vendors/MoonshotIcon.tsx` |  |  | 0 | Brand icon identifying the Moonshot provider. |
| "src/common/components/icons/vendors/NousResearchIcon::NousResearchIcon" | NousResearchIcon | `src/common/components/icons/vendors/NousResearchIcon.tsx` |  |  | 0 | Brand icon identifying Nous Research. |
| "src/common/components/icons/vendors/NovitaAIIcon::NovitaAIIcon" | NovitaAIIcon | `src/common/components/icons/vendors/NovitaAIIcon.tsx` |  |  | 0 | Brand icon identifying the Novita AI provider. |
| "src/common/components/icons/vendors/NvidiaIcon::NvidiaIcon" | NvidiaIcon | `src/common/components/icons/vendors/NvidiaIcon.tsx` |  |  | 1 | Brand icon identifying the Nvidia provider. |
| "src/common/components/icons/vendors/OllamaIcon::OllamaIcon" | OllamaIcon | `src/common/components/icons/vendors/OllamaIcon.tsx` |  |  | 1 | Brand icon identifying Ollama. |
| "src/common/components/icons/vendors/OpenAIIcon::OpenAIIcon" | OpenAIIcon | `src/common/components/icons/vendors/OpenAIIcon.tsx` |  |  | 1 | Brand icon identifying the OpenAI provider. |
| "src/common/components/icons/vendors/OpenRouterIcon::OpenRouterIcon" | OpenRouterIcon | `src/common/components/icons/vendors/OpenRouterIcon.tsx` |  |  | 0 | Brand icon identifying the OpenRouter provider. |
| "src/common/components/icons/vendors/PerplexityIcon::PerplexityIcon" | PerplexityIcon | `src/common/components/icons/vendors/PerplexityIcon.tsx` |  |  | 0 | Brand icon identifying the Perplexity provider. |
| "src/common/components/icons/vendors/SakanaAIIcon::SakanaAIIcon" | SakanaAIIcon | `src/common/components/icons/vendors/SakanaAIIcon.tsx` |  |  | 0 | Brand icon identifying the Sakana AI provider. |
| "src/common/components/icons/vendors/TogetherIcon::TogetherIcon" | TogetherIcon | `src/common/components/icons/vendors/TogetherIcon.tsx` |  |  | 0 | Brand icon identifying the Together provider. |
| "src/common/components/icons/vendors/XAIIcon::XAIIcon" | XAIIcon | `src/common/components/icons/vendors/XAIIcon.tsx` |  |  | 0 | Brand icon identifying the xAI provider. |
| "src/common/components/icons/vendors/ZAIIcon::ZAIIcon" | ZAIIcon | `src/common/components/icons/vendors/ZAIIcon.tsx` |  |  | 0 | Brand icon identifying the Z.AI provider. |
| "src/common/components/modals/ConfirmationModal::ConfirmationModal" | ConfirmationModal | `src/common/components/modals/ConfirmationModal.tsx` |  |  | 26 | Modal that asks the user to confirm or cancel an action before it proceeds. |
| "src/common/components/modals/GoodModal::GoodModal" | GoodModal | `src/common/components/modals/GoodModal.tsx` | reason (3) | open | 33 | The shared base modal shell on which the app's other dialogs are built. |
| "src/common/components/modals/SherpaModal::SherpaModal" | SherpaModal | `src/common/components/modals/SherpaModal.tsx` |  |  | 0 | Guided, step-oriented modal used to walk the user through a flow. |
| "src/common/components/modals/ViewDocPartModal::ViewDocPartModal" | ViewDocPartModal | `src/common/components/modals/ViewDocPartModal.tsx` |  |  | 1 | Modal for viewing a document part attached to or produced in a conversation. |
| "src/common/components/modals/ViewImageRefPartModal::ViewImageRefPartModal" | ViewImageRefPartModal | `src/common/components/modals/ViewImageRefPartModal.tsx` |  |  | 4 | Modal for viewing an image reference part at full size. |
| "src/common/components/snackbar/SnackbarInsert::SnackbarInsert" | SnackbarInsert | `src/common/components/snackbar/SnackbarInsert.tsx` |  |  | 1 | Transient snackbar notification surface inserted into the page for brief feedback messages. |
| "src/common/from-v1/FromV1ImportBanner::FromV1ImportBanner" | FromV1ImportBanner | `src/common/from-v1/FromV1ImportBanner.tsx` |  |  | 1 | Banner prompting users to import data from the previous (v1) version of the app. |
| "src/common/layout/container/ContainerLayout::ContainerLayout" | ContainerLayout | `src/common/layout/container/ContainerLayout.tsx` |  |  | 1 | Centered container layout shell for pages that do not use the full app chrome. |
| "src/common/layout/optima/ChromelessFloatingButtons::ChromelessFloatingButtons" | ChromelessFloatingButtons | `src/common/layout/optima/ChromelessFloatingButtons.tsx` |  |  | 1 | Floating action buttons shown when the main layout runs in chromeless mode without the standard bars. |
| "src/common/layout/optima/ChromelessItemButton::ChromelessItemButton" | ChromelessItemButton | `src/common/layout/optima/ChromelessItemButton.tsx` |  |  | 1 | A button for items in the Optima shell rendered without visible chrome. |
| "src/common/layout/optima/InvertedBar::InvertedBar" | InvertedBar | `src/common/layout/optima/InvertedBar.tsx` | direction (2) |  | 3 | A bar container in the Optima layout using an inverted color treatment. |
| "src/common/layout/optima/Modals::Modals" | Modals | `src/common/layout/optima/Modals.tsx` |  |  | 2 | Mounts the application's modal dialogs within the Optima layout. |
| "src/common/layout/optima/OptimaLayout::OptimaLayout" | OptimaLayout | `src/common/layout/optima/OptimaLayout.tsx` |  |  | 2 | The root layout component that assembles the Optima shell. |
| "src/common/layout/optima/OptimaMOTD::OptimaMOTD" | OptimaMOTD | `src/common/layout/optima/OptimaMOTD.tsx` |  |  | 1 | Displays a message-of-the-day within the Optima layout. |
| "src/common/layout/optima/PageCore::PageCore" | PageCore | `src/common/layout/optima/PageCore.tsx` |  |  | 2 | The core page region of the Optima layout. |
| "src/common/layout/optima/PageWrapper::PageWrapper" | PageWrapper | `src/common/layout/optima/PageWrapper.tsx` |  |  | 1 | Wraps page content inside the Optima layout. |
| "src/common/layout/optima/bar/OptimaBar::CenterItemsPortal" | CenterItemsPortal | `src/common/layout/optima/bar/OptimaBar.tsx` |  |  | 0 | Portal target for items placed in the center of the Optima bar. |
| "src/common/layout/optima/bar/OptimaBar::CenterItemsFallback" | CenterItemsFallback | `src/common/layout/optima/bar/OptimaBar.tsx` |  |  | 0 | Fallback content shown in the Optima bar center when no portal items are provided. |
| "src/common/layout/optima/bar/OptimaBar::OptimaBar" | OptimaBar | `src/common/layout/optima/bar/OptimaBar.tsx` |  |  | 1 | The top bar of the Optima layout. |
| "src/common/layout/optima/bar/OptimaBarDropdown::OptimaBarDropdown" | OptimaBarDropdown | `src/common/layout/optima/bar/OptimaBarDropdown.tsx` |  |  | 0 | A dropdown control used within the Optima bar. |
| "src/common/layout/optima/drawer/DesktopDrawer::DesktopDrawer" | DesktopDrawer | `src/common/layout/optima/drawer/DesktopDrawer.tsx` |  |  | 1 | The drawer implementation for desktop viewports. |
| "src/common/layout/optima/drawer/MobileDrawer::DrawerContentPortal" | DrawerContentPortal | `src/common/layout/optima/drawer/MobileDrawer.tsx` |  |  | 0 | Portal target for drawer content on mobile. |
| "src/common/layout/optima/drawer/MobileDrawer::MobileDrawer" | MobileDrawer | `src/common/layout/optima/drawer/MobileDrawer.tsx` |  |  | 1 | The drawer implementation for mobile viewports. |
| "src/common/layout/optima/drawer/OptimaDrawerHeader::OptimaDrawerHeader" | OptimaDrawerHeader | `src/common/layout/optima/drawer/OptimaDrawerHeader.tsx` |  |  | 3 | Header area of the Optima drawer. |
| "src/common/layout/optima/drawer/OptimaDrawerList::OptimaDrawerList" | OptimaDrawerList | `src/common/layout/optima/drawer/OptimaDrawerList.tsx` |  |  | 3 | List container for items within the Optima drawer. |
| "src/common/layout/optima/nav/BringTheLove::BringTheLove" | BringTheLove | `src/common/layout/optima/nav/BringTheLove.tsx` |  |  | 2 | A navigation element in the Optima nav; its specific purpose is not stated in the list. |
| "src/common/layout/optima/nav/DesktopNav::DesktopNav" | DesktopNav | `src/common/layout/optima/nav/DesktopNav.tsx` |  |  | 1 | The navigation rail for desktop viewports. |
| "src/common/layout/optima/nav/MobileNav::MobileNav" | MobileNav | `src/common/layout/optima/nav/MobileNav.tsx` |  |  | 0 | The navigation component for mobile viewports. |
| "src/common/layout/optima/nav/MobileNavItems::MobileNavItems" | MobileNavItems | `src/common/layout/optima/nav/MobileNavItems.tsx` |  |  | 1 | The set of navigation items rendered in the mobile nav. |
| "src/common/layout/optima/page/OptimaAppPageHeading::OptimaAppPageHeading" | OptimaAppPageHeading | `src/common/layout/optima/page/OptimaAppPageHeading.tsx` |  |  | 0 | Heading component for app pages within the Optima layout. |
| "src/common/layout/optima/panel/DesktopPanel::DesktopPanel" | DesktopPanel | `src/common/layout/optima/panel/DesktopPanel.tsx` |  |  | 1 | The side panel implementation for desktop viewports. |
| "src/common/layout/optima/panel/MobilePanel::MobilePanel" | MobilePanel | `src/common/layout/optima/panel/MobilePanel.tsx` |  |  | 1 | The side panel implementation for mobile viewports. |
| "src/common/layout/optima/panel/OptimaPanelGroupedList::OptimaPanelGroupGutter" | OptimaPanelGroupGutter | `src/common/layout/optima/panel/OptimaPanelGroupedList.tsx` |  |  | 1 | Gutter spacing element between groups in the panel's grouped list. |
| "src/common/layout/optima/panel/OptimaPanelGroupedList::OptimaPanelGroupedList" | OptimaPanelGroupedList | `src/common/layout/optima/panel/OptimaPanelGroupedList.tsx` |  |  | 10 | A grouped list layout used inside the Optima panel. |
| "src/common/layout/optima/panel/PanelContentPortal::PanelContentPortal" | PanelContentPortal | `src/common/layout/optima/panel/PanelContentPortal.tsx` |  |  | 3 | Portal target for content injected into the panel. |
| "src/common/layout/optima/panel/PopupPanel::PopupPanel" | PopupPanel | `src/common/layout/optima/panel/PopupPanel.tsx` |  |  | 1 | A panel presented as a popup. |
| "src/common/layout/optima/panel/items/PreferencesListItem::PreferencesListItem" | PreferencesListItem | `src/common/layout/optima/panel/items/PreferencesListItem.tsx` |  |  | 2 | A list item for preferences entries inside the panel. |
| "src/common/layout/optima/portals/OptimaPortalsIn::OptimaDrawerIn" | OptimaDrawerIn | `src/common/layout/optima/portals/OptimaPortalsIn.tsx` |  |  | 3 | Portal source that sends content into the Optima drawer. |
| "src/common/layout/optima/portals/OptimaPortalsIn::OptimaPanelIn" | OptimaPanelIn | `src/common/layout/optima/portals/OptimaPortalsIn.tsx` |  |  | 4 | Portal source that sends content into the Optima panel. |
| "src/common/layout/optima/scratchclip/ScratchClip::ScratchClip" | ScratchClip | `src/common/layout/optima/scratchclip/ScratchClip.tsx` |  |  | 1 | A scratch clip component in the Optima layout; its specific purpose is not stated in the list. |
| "src/common/layout/overlays/OverlaysInsert::OverlaysInsert" | OverlaysInsert | `src/common/layout/overlays/OverlaysInsert.tsx` |  |  | 1 | Insertion point for application overlays. |
| "src/common/logger/viewer/LogEntryDetails::LogEntryDetails" | LogEntryDetails | `src/common/logger/viewer/LogEntryDetails.tsx` |  |  | 1 | Shows the details of a single log entry in the logger viewer. |
| "src/common/logger/viewer/LoggerViewerDialog::LogViewerDialog" | LogViewerDialog | `src/common/logger/viewer/LoggerViewerDialog.tsx` |  |  | 1 | A dialog for viewing application logs. |
| "src/common/providers/ProviderBackendCapabilities::ProviderBackendCapabilities" | ProviderBackendCapabilities | `src/common/providers/ProviderBackendCapabilities.tsx` |  |  | 1 | A provider that supplies backend capability information to the app. |
| "src/common/providers/ProviderTheming::ProviderTheming" | ProviderTheming | `src/common/providers/ProviderTheming.tsx` |  |  | 1 | A provider that applies theming to the application. |
| "src/common/providers/single-tab/ProviderSingleTab::SherpaLoading" | SherpaLoading | `src/common/providers/single-tab/ProviderSingleTab.tsx` |  |  | 0 | Loading state shown by the single-tab provider. |
| "src/common/providers/single-tab/ProviderSingleTab::ProviderSingleTab" | ProviderSingleTab | `src/common/providers/single-tab/ProviderSingleTab.tsx` |  |  | 1 | A provider that enforces single-tab operation. |
| "src/common/render-decay/RenderDecayZone::RenderDecayZone" | RenderDecayZone | `src/common/render-decay/RenderDecayZone.tsx` |  | active | 3 | A zone wrapper related to render decay; its specific behavior is not stated in the list. |
| "src/common/scroll-to-bottom/ScrollToBottom::DebugBorderBox" | DebugBorderBox | `src/common/scroll-to-bottom/ScrollToBottom.tsx` |  |  | 0 | A debug-only bordered box used with the scroll-to-bottom utility. |
| "src/common/scroll-to-bottom/ScrollToBottom::ScrollToBottom" | ScrollToBottom | `src/common/scroll-to-bottom/ScrollToBottom.tsx` |  |  | 5 | Scroll container wrapper that manages scroll-to-bottom behaviour for long content such as chat streams. |
| "src/common/scroll-to-bottom/ScrollToBottomButton::ScrollToBottomButton" | ScrollToBottomButton | `src/common/scroll-to-bottom/ScrollToBottomButton.tsx` |  |  | 5 | Floating button that jumps the ScrollToBottom container back to its end. |
| "src/common/stores/llms/components/LLMSearchFilterInput::LLMSearchFilterInput" | LLMSearchFilterInput | `src/common/stores/llms/components/LLMSearchFilterInput.tsx` | size (3) |  | 0 | Text input for searching and filtering the list of available LLMs. |
| "src/common/stores/workspace/WorkspaceIdProvider::WorkspaceIdProvider" | WorkspaceIdProvider | `src/common/stores/workspace/WorkspaceIdProvider.tsx` |  |  | 2 | Context provider that supplies the current workspace id to descendants; non-visual. |
| "src/common/stores/workspace/WorkspaceLiveFilePicker::WorkspaceLiveFilePicker" | WorkspaceLiveFilePicker | `src/common/stores/workspace/WorkspaceLiveFilePicker.tsx` |  |  | 1 | Picker for selecting a live file from the current workspace. |
| "src/modules/aifn/digrams/DiagramsModal::DiagramsModal" | DiagramsModal | `src/modules/aifn/digrams/DiagramsModal.tsx` |  |  | 0 | Modal for the AI diagrams function, used to generate and view diagrams. |
| "src/modules/aifn/flatten/FlattenerModal::StylesList" | StylesList | `src/modules/aifn/flatten/FlattenerModal.tsx` |  |  | 0 | List of flattening styles to choose from inside the FlattenerModal. |
| "src/modules/aifn/flatten/FlattenerModal::FlatteningProgress" | FlatteningProgress | `src/modules/aifn/flatten/FlattenerModal.tsx` |  |  | 0 | Progress indicator shown while a conversation flattening operation runs. |
| "src/modules/aifn/flatten/FlattenerModal::FlattenerModal" | FlattenerModal | `src/modules/aifn/flatten/FlattenerModal.tsx` |  |  | 0 | Modal hosting the conversation flattening AI function, composing StylesList and FlatteningProgress. |
| "src/modules/aix/client/debugger/AixDebuggerDialog::AixDebuggerDialog" | AixDebuggerDialog | `src/modules/aix/client/debugger/AixDebuggerDialog.tsx` |  |  | 1 | Dialog that opens the AIX client debugger for inspecting model requests. |
| "src/modules/aix/client/debugger/AixDebuggerFrame::AixDebuggerFrame" | AixDebuggerFrame | `src/modules/aix/client/debugger/AixDebuggerFrame.tsx` |  |  | 1 | Displays a single captured debugger frame within the AIX debugger. |
| "src/modules/aix/client/debugger/AixDebuggerMeasurementsTable::AixDebuggerMeasurementsTable" | AixDebuggerMeasurementsTable | `src/modules/aix/client/debugger/AixDebuggerMeasurementsTable.tsx` |  |  | 1 | Table of measurements collected by the AIX debugger. |
| "src/modules/aix/client/debugger/DebugAdvancedOptions::DebugAdvancedOptions" | DebugAdvancedOptions | `src/modules/aix/client/debugger/DebugAdvancedOptions.tsx` |  |  | 1 | Advanced option controls for the AIX debugger. |
| "src/modules/aix/client/debugger/DebugPayloadOverride::DebugPayloadOverride" | DebugPayloadOverride | `src/modules/aix/client/debugger/DebugPayloadOverride.tsx` |  |  | 1 | Control for overriding the request payload when debugging AIX calls. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::ASRxConfigureEngineFull" | ASRxConfigureEngineFull | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 1 | Full configuration panel for a single ASR (speech recognition) engine. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::ManualCredentials" | ManualCredentials | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Section for entering ASR engine credentials manually. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::PanelFooter" | PanelFooter | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Footer area of the ASR engine configuration panel. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::PersonalDictionaryRow" | PersonalDictionaryRow | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Row representing one entry in the ASR personal dictionary. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::DeepgramParameters" | DeepgramParameters | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Parameter controls specific to the Deepgram ASR engine. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::DictionaryModal" | DictionaryModal | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Modal for managing the ASR personal dictionary entries. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::GeminiParameters" | GeminiParameters | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Parameter controls specific to the Gemini ASR engine. |
| "src/modules/asrx/components/ASRxConfigureEngineFull::OpenAIParameters" | OpenAIParameters | `src/modules/asrx/components/ASRxConfigureEngineFull.tsx` |  |  | 0 | Parameter controls specific to the OpenAI ASR engine. |
| "src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines" | ASRxConfigureEngines | `src/modules/asrx/components/ASRxConfigureEngines.tsx` |  |  | 1 | Overview for selecting and configuring the available ASR engines. |
| "src/modules/beam/BeamExplainer::BeamExplainer" | BeamExplainer | `src/modules/beam/BeamExplainer.tsx` |  |  | 1 | Explanatory content introducing how the Beam feature works. |
| "src/modules/beam/BeamUpstreamResume::BeamUpstreamResume" | BeamUpstreamResume | `src/modules/beam/BeamUpstreamResume.tsx` |  |  | 2 | Control for resuming a Beam session from its upstream conversation. |
| "src/modules/beam/BeamView::BeamView" | BeamView | `src/modules/beam/BeamView.tsx` | operation (2) | disabled | 2 | Top-level view for a Beam session, hosting the scatter and gather phases. |
| "src/modules/beam/components/BeamCardNotice::BeamCardNotice" | BeamCardNotice | `src/modules/beam/components/BeamCardNotice.tsx` |  |  | 2 | Inline notice displayed within a Beam card. |
| "src/modules/beam/components/BeamCardNotice::BeamModelUnavailable" | BeamModelUnavailable | `src/modules/beam/components/BeamCardNotice.tsx` |  |  | 3 | BeamCardNotice variant indicating the selected model is unavailable. |
| "src/modules/beam/gather/BeamFusionGrid::FusionAddButton" | FusionAddButton | `src/modules/beam/gather/BeamFusionGrid.tsx` |  |  | 0 | Button to add a new fusion to the BeamFusionGrid. |
| "src/modules/beam/gather/BeamFusionGrid::BeamFusionGrid" | BeamFusionGrid | `src/modules/beam/gather/BeamFusionGrid.tsx` |  |  | 1 | Grid laying out fusion cards in the Beam gather phase. |
| "src/modules/beam/gather/BeamGatherPane::BeamGatherPane" | BeamGatherPane | `src/modules/beam/gather/BeamGatherPane.tsx` |  | disabled | 1 | Pane for the Beam gather phase, where ray outputs are merged. |
| "src/modules/beam/gather/Fusion::Fusion" | Fusion | `src/modules/beam/gather/Fusion.tsx` |  | disabled | 1 | Card representing a single fusion (merge) of Beam ray outputs. |
| "src/modules/beam/gather/FusionControls::FusionControls" | FusionControls | `src/modules/beam/gather/FusionControls.tsx` |  |  | 0 | Action controls attached to a Fusion card. |
| "src/modules/beam/gather/FusionInputsWait::FusionInputsWait" | FusionInputsWait | `src/modules/beam/gather/FusionInputsWait.tsx` |  |  | 1 | Waiting state shown while a fusion's input rays are still completing. |
| "src/modules/beam/gather/FusionInstructionsEditor::EditableChatInstructionPrompt" | EditableChatInstructionPrompt | `src/modules/beam/gather/FusionInstructionsEditor.tsx` |  |  | 0 | Editable prompt field for a chat-type fusion instruction. |
| "src/modules/beam/gather/FusionInstructionsEditor::EditableInstruction" | EditableInstruction | `src/modules/beam/gather/FusionInstructionsEditor.tsx` |  |  | 0 | Editable representation of a single fusion instruction. |
| "src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor" | FusionInstructionsEditor | `src/modules/beam/gather/FusionInstructionsEditor.tsx` |  |  | 1 | Editor for the ordered set of instructions that drive a fusion. |
| "src/modules/beam/gather/instructions/UserInputChecklistComponent::UserInputChecklistComponent" | UserInputChecklistComponent | `src/modules/beam/gather/instructions/UserInputChecklistComponent.tsx` |  |  | 1 | Checklist that collects user input during a fusion instruction step. |
| "src/modules/beam/scatter/BeamRay::RayControls" | RayControls | `src/modules/beam/scatter/BeamRay.tsx` |  | disabled | 0 | Action controls attached to a BeamRay card. |
| "src/modules/beam/scatter/BeamRay::BeamRay" | BeamRay | `src/modules/beam/scatter/BeamRay.tsx` |  | disabled | 1 | Card representing one model response (ray) in the Beam scatter phase. |
| "src/modules/beam/scatter/BeamRayGrid::BeamRayGrid" | BeamRayGrid | `src/modules/beam/scatter/BeamRayGrid.tsx` |  |  | 1 | Grid layout that arranges the individual rays (parallel responses) in the Beam scatter view. |
| "src/modules/beam/scatter/BeamScatterInput::BeamScatterInput" | BeamScatterInput | `src/modules/beam/scatter/BeamScatterInput.tsx` |  | disabled | 1 | Input area for the Beam scatter step where the user provides the prompt to scatter. |
| "src/modules/beam/scatter/BeamScatterPane::BeamScatterPane" | BeamScatterPane | `src/modules/beam/scatter/BeamScatterPane.tsx` |  |  | 1 | Main pane for the Beam scatter phase, hosting its controls and content. |
| "src/modules/beam/scatter/BeamScatterPaneDropdown::DialogNamePreset" | DialogNamePreset | `src/modules/beam/scatter/BeamScatterPaneDropdown.tsx` |  | open | 0 | Dialog for naming a preset from the scatter pane dropdown. |
| "src/modules/beam/scatter/BeamScatterPaneDropdown::BeamScatterDropdown" | BeamScatterDropdown | `src/modules/beam/scatter/BeamScatterPaneDropdown.tsx` |  | open | 1 | Dropdown menu attached to the scatter pane, including preset-related actions. |
| "src/modules/blocks/AutoBlocksRenderer::AutoBlocksRenderer" | AutoBlocksRenderer | `src/modules/blocks/AutoBlocksRenderer.tsx` | textRenderVariant (3) | active | 4 | Entry point that splits content into blocks and dispatches each to the appropriate block renderer. |
| "src/modules/blocks/OverlayButton::OverlayButton" | OverlayButton | `src/modules/blocks/OverlayButton.tsx` |  |  | 22 | Button shown as an overlay on top of a rendered block. |
| "src/modules/blocks/ScaledTextBlockRenderer::ScaledTextBlockRenderer" | ScaledTextBlockRenderer | `src/modules/blocks/ScaledTextBlockRenderer.tsx` | textRenderVariant (2) |  | 11 | Renders a text block at a scaled size. |
| "src/modules/blocks/ToggleExpansionButton::ToggleExpansionButton" | ToggleExpansionButton | `src/modules/blocks/ToggleExpansionButton.tsx` |  |  | 1 | Button that toggles a block between collapsed and expanded states. |
| "src/modules/blocks/code/RenderCode::RenderCode" | RenderCode | `src/modules/blocks/code/RenderCode.tsx` |  | disabled | 0 | Public code block renderer; owns the code block presentation and renderer selection. |
| "src/modules/blocks/code/RenderCode::RCSyntaxHighlight" | RCSyntaxHighlight | `src/modules/blocks/code/RenderCode.tsx` |  | disabled | 0 | Syntax-highlighting piece used inside the code block renderer. |
| "src/modules/blocks/code/RenderCode::RenderCodeImpl" | RenderCodeImpl | `src/modules/blocks/code/RenderCode.tsx` |  | disabled | 0 | Internal implementation of the code block renderer. |
| "src/modules/blocks/code/RenderCodePanelFrame::RenderCodePanelFrame" | RenderCodePanelFrame | `src/modules/blocks/code/RenderCodePanelFrame.tsx` |  |  | 2 | Frame/chrome wrapping a code panel, providing its header and container. |
| "src/modules/blocks/code/code-renderers/RenderCodeChartJS::RenderCodeChartJS" | RenderCodeChartJS | `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx` |  |  | 1 | Renders code content as a Chart.js chart. |
| "src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame::RenderCodeHtmlIFrame" | RenderCodeHtmlIFrame | `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx` |  |  | 2 | Renders HTML code content inside an iframe. |
| "src/modules/blocks/code/code-renderers/RenderCodeMarkdown::RenderCodeMarkdown" | RenderCodeMarkdown | `src/modules/blocks/code/code-renderers/RenderCodeMarkdown.tsx` |  |  | 1 | Renders code content as formatted Markdown. |
| "src/modules/blocks/code/code-renderers/RenderCodeMermaid::RenderCodeMermaid" | RenderCodeMermaid | `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx` |  |  | 1 | Renders code content as a Mermaid diagram. |
| "src/modules/blocks/code/code-renderers/RenderCodePlantUML::RenderCodePlantUML" | RenderCodePlantUML | `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx` |  |  | 1 | Renders code content as a PlantUML diagram. |
| "src/modules/blocks/code/code-renderers/RenderCodeSVG::RenderCodeSVG" | RenderCodeSVG | `src/modules/blocks/code/code-renderers/RenderCodeSVG.tsx` |  |  | 1 | Renders SVG code content as an image. |
| "src/modules/blocks/code/code-renderers/RenderCodeSyntax::RenderCodeSyntax" | RenderCodeSyntax | `src/modules/blocks/code/code-renderers/RenderCodeSyntax.tsx` |  |  | 1 | Default code renderer that shows source with syntax highlighting. |
| "src/modules/blocks/danger-html/RenderDangerousHtml::RenderDangerousHtml" | RenderDangerousHtml | `src/modules/blocks/danger-html/RenderDangerousHtml.tsx` |  |  | 1 | Renders raw HTML content, flagged as potentially unsafe. |
| "src/modules/blocks/enhanced-code/ERCDiffContext::ERCDiffContextProvider" | ERCDiffContextProvider | `src/modules/blocks/enhanced-code/ERCDiffContext.tsx` |  |  | 1 | Context provider supplying diff state to the enhanced code block. |
| "src/modules/blocks/enhanced-code/ERCDiffModal::ERCDiffModal" | ERCDiffModal | `src/modules/blocks/enhanced-code/ERCDiffModal.tsx` |  |  | 1 | Modal that displays a diff for an enhanced code block. |
| "src/modules/blocks/enhanced-code/EnhancedRenderCode::EnhancedRenderCode" | EnhancedRenderCode | `src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx` |  |  | 0 | Enhanced variant of the code block with additional features such as diffing and a menu. |
| "src/modules/blocks/enhanced-code/EnhancedRenderCodeMenu::EnhancedRenderCodeMenu" | EnhancedRenderCodeMenu | `src/modules/blocks/enhanced-code/EnhancedRenderCodeMenu.tsx` |  |  | 1 | Menu of actions for the enhanced code block. |
| "src/modules/blocks/image/RenderImageRefDBlob::RenderImageRefDBlob" | RenderImageRefDBlob | `src/modules/blocks/image/RenderImageRefDBlob.tsx` |  |  | 5 | Renders an image referenced from a stored data blob. |
| "src/modules/blocks/image/RenderImageURL::RenderImageURL" | RenderImageURL | `src/modules/blocks/image/RenderImageURL.tsx` |  |  | 5 | Renders an image from a URL. |
| "src/modules/blocks/markdown/CustomARenderer::GoogleFavicon" | GoogleFavicon | `src/modules/blocks/markdown/CustomARenderer.tsx` | type (4) |  | 0 | Shows a site favicon next to a link in markdown. |
| "src/modules/blocks/markdown/CustomARenderer::LinkPreview" | LinkPreview | `src/modules/blocks/markdown/CustomARenderer.tsx` |  |  | 0 | Preview shown for a link in rendered markdown. |
| "src/modules/blocks/markdown/CustomARenderer::InertLink" | InertLink | `src/modules/blocks/markdown/CustomARenderer.tsx` |  |  | 0 | Non-navigating link rendering for markdown anchors. |
| "src/modules/blocks/markdown/CustomARenderer::CustomARenderer" | CustomARenderer | `src/modules/blocks/markdown/CustomARenderer.tsx` |  |  | 0 | Custom anchor renderer for markdown links. |
| "src/modules/blocks/markdown/CustomMarkdownRenderer::DelRenderer" | DelRenderer | `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx` |  |  | 0 | Renders deleted/strikethrough markdown text. |
| "src/modules/blocks/markdown/CustomMarkdownRenderer::MarkRenderer" | MarkRenderer | `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx` |  |  | 0 | Renders highlighted (mark) markdown text. |
| "src/modules/blocks/markdown/CustomMarkdownRenderer::CustomMarkdownRenderer" | CustomMarkdownRenderer | `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx` |  |  | 0 | Markdown renderer wired with the custom element renderers. |
| "src/modules/blocks/markdown/CustomTableRenderer::CustomTableRenderer" | CustomTableRenderer | `src/modules/blocks/markdown/CustomTableRenderer.tsx` |  |  | 0 | Custom renderer for markdown tables. |
| "src/modules/blocks/markdown/CustomTaskListRenderer::CustomInputRenderer" | CustomInputRenderer | `src/modules/blocks/markdown/CustomTaskListRenderer.tsx` |  |  | 0 | Renders the checkbox inputs of markdown task lists. |
| "src/modules/blocks/markdown/HostedLinksContext::HostedLinksProvider" | HostedLinksProvider | `src/modules/blocks/markdown/HostedLinksContext.tsx` |  |  | 1 | Context provider supplying hosted link information to markdown rendering. |
| "src/modules/blocks/markdown/RenderMarkdown::RenderMarkdown" | RenderMarkdown | `src/modules/blocks/markdown/RenderMarkdown.tsx` |  |  | 2 | Full markdown block renderer. |
| "src/modules/blocks/markdown/RenderMarkdownLite::RenderMarkdownLite" | RenderMarkdownLite | `src/modules/blocks/markdown/RenderMarkdownLite.tsx` |  |  | 1 | Lightweight markdown renderer for simpler content. |
| "src/modules/blocks/plaintext/RenderPlainText::RenderPlainText" | RenderPlainText | `src/modules/blocks/plaintext/RenderPlainText.tsx` |  |  | 2 | Renders a block as plain text. |
| "src/modules/blocks/wordsdiff/RenderWordsDiff::RenderWordsDiff" | RenderWordsDiff | `src/modules/blocks/wordsdiff/RenderWordsDiff.tsx` |  |  | 2 | Block renderer that displays a word-level diff between two texts. |
| "src/modules/browse/BrowseSettings::BrowseSettings" | BrowseSettings | `src/modules/browse/BrowseSettings.tsx` |  |  | 1 | Settings panel for the browse (web page fetching) module. |
| "src/modules/google/GoogleSearchSettings::GoogleSearchSettings" | GoogleSearchSettings | `src/modules/google/GoogleSearchSettings.tsx` |  |  | 1 | Settings panel for the Google Search integration. |
| "src/modules/llms/components/LLMVendorIcon::LLMVendorIcon" | LLMVendorIcon | `src/modules/llms/components/LLMVendorIcon.tsx` |  |  | 0 | Displays the icon for a given LLM vendor. |
| "src/modules/llms/components/LLMVendorIconSprite::VendorIconSpriteMemo" | VendorIconSpriteMemo | `src/modules/llms/components/LLMVendorIconSprite.tsx` |  |  | 0 | Memoized sprite containing vendor icon glyphs, used to render vendor icons efficiently. |
| "src/modules/llms/components/LLMVendorIconSprite::LLMVendorIconSprite" | LLMVendorIconSprite | `src/modules/llms/components/LLMVendorIconSprite.tsx` |  |  | 8 | Sprite-based vendor icon component that references the shared vendor icon sprite. |
| "src/modules/llms/components/LLMVendorSetup::LLMVendorSetup" | LLMVendorSetup | `src/modules/llms/components/LLMVendorSetup.tsx` | vENDOR_DOCS (24) |  | 1 | Generic container that renders the setup UI for the selected LLM vendor. |
| "src/modules/llms/components/ModelsRefreshAlert::ModelsRefreshIconButton" | ModelsRefreshIconButton | `src/modules/llms/components/ModelsRefreshAlert.tsx` |  |  | 1 | Icon button that triggers a refresh of the models list. |
| "src/modules/llms/components/ModelsRefreshAlert::ModelsRefreshAlert" | ModelsRefreshAlert | `src/modules/llms/components/ModelsRefreshAlert.tsx` |  |  | 1 | Alert prompting the user to refresh their models list. |
| "src/modules/llms/models-modal/AnthropicSkillsConfig::AnthropicSkillsConfig" | AnthropicSkillsConfig | `src/modules/llms/models-modal/AnthropicSkillsConfig.tsx` |  |  | 1 | Configuration UI for Anthropic skills within the models modal. |
| "src/modules/llms/models-modal/LLMOptionsClone::LLMOptionsClone" | LLMOptionsClone | `src/modules/llms/models-modal/LLMOptionsClone.tsx` |  |  | 1 | Controls for cloning a model's options to create a derived model entry. |
| "src/modules/llms/models-modal/LLMOptionsGlobal::LLMOptionsGlobal" | LLMOptionsGlobal | `src/modules/llms/models-modal/LLMOptionsGlobal.tsx` |  |  | 1 | Global (non-per-model) LLM option settings shown in the models modal. |
| "src/modules/llms/models-modal/LLMOptionsModal::LLMOptionsModal" | LLMOptionsModal | `src/modules/llms/models-modal/LLMOptionsModal.tsx` |  |  | 1 | Modal dialog for editing the options of a single LLM. |
| "src/modules/llms/models-modal/LLMParametersEditor::LLMParametersEditor" | LLMParametersEditor | `src/modules/llms/models-modal/LLMParametersEditor.tsx` |  |  | 1 | Editor for a model's generation parameters. |
| "src/modules/llms/models-modal/ModelsChangelogPanel::CountChips" | CountChips | `src/modules/llms/models-modal/ModelsChangelogPanel.tsx` | key (2) |  | 0 | Small chips summarizing counts in the models changelog. |
| "src/modules/llms/models-modal/ModelsChangelogPanel::ModelsChangelogPanel" | ModelsChangelogPanel | `src/modules/llms/models-modal/ModelsChangelogPanel.tsx` |  |  | 1 | Panel listing changes to the available models across services. |
| "src/modules/llms/models-modal/ModelsChangelogPanel::ServiceChangelogRow" | ServiceChangelogRow | `src/modules/llms/models-modal/ModelsChangelogPanel.tsx` |  |  | 0 | Single row in the changelog panel representing one service's model changes. |
| "src/modules/llms/models-modal/ModelsConfiguratorModal::ModelsConfiguratorModal" | ModelsConfiguratorModal | `src/modules/llms/models-modal/ModelsConfiguratorModal.tsx` | reason (3) |  | 1 | Main modal for configuring LLM services and their models. |
| "src/modules/llms/models-modal/ModelsList::ModelItem" | ModelItem | `src/modules/llms/models-modal/ModelsList.tsx` |  |  | 0 | Row representing a single model within the models list. |
| "src/modules/llms/models-modal/ModelsList::ModelsList" | ModelsList | `src/modules/llms/models-modal/ModelsList.tsx` |  |  | 1 | List of configured models, composed of model items. |
| "src/modules/llms/models-modal/ModelsModals::ModelsModals" | ModelsModals | `src/modules/llms/models-modal/ModelsModals.tsx` |  |  | 1 | Coordinator that mounts the models-related modals. |
| "src/modules/llms/models-modal/ModelsServiceSelector::ModelsServiceSelector" | ModelsServiceSelector | `src/modules/llms/models-modal/ModelsServiceSelector.tsx` |  |  | 1 | Selector for choosing which LLM service is being configured. |
| "src/modules/llms/models-modal/ModelsWizard::WizardProviderSetup" | WizardProviderSetup | `src/modules/llms/models-modal/ModelsWizard.tsx` |  |  | 0 | Wizard step for setting up a single provider. |
| "src/modules/llms/models-modal/ModelsWizard::ModelsWizard" | ModelsWizard | `src/modules/llms/models-modal/ModelsWizard.tsx` |  |  | 1 | Guided wizard for configuring model providers. |
| "src/modules/llms/models-modal/OpenRouterWebToolsConfig::OpenRouterWebToolsConfig" | OpenRouterWebToolsConfig | `src/modules/llms/models-modal/OpenRouterWebToolsConfig.tsx` | searchOverride (2) | disabled | 1 | Configuration UI for OpenRouter web tools. |
| "src/modules/llms/vendors/ApproximateCosts::ApproximateCosts" | ApproximateCosts | `src/modules/llms/vendors/ApproximateCosts.tsx` |  |  | 22 | Displays approximate usage costs for a vendor. |
| "src/modules/llms/vendors/alibaba/AlibabaServiceSetup::AlibabaServiceSetup" | AlibabaServiceSetup | `src/modules/llms/vendors/alibaba/AlibabaServiceSetup.tsx` |  |  | 0 | Service setup form for the Alibaba vendor. |
| "src/modules/llms/vendors/anthropic/AnthropicServiceSetup::AnthropicServiceSetup" | AnthropicServiceSetup | `src/modules/llms/vendors/anthropic/AnthropicServiceSetup.tsx` |  |  | 0 | Service setup form for the Anthropic vendor. |
| "src/modules/llms/vendors/azure/AzureServiceSetup::AzureServiceSetup" | AzureServiceSetup | `src/modules/llms/vendors/azure/AzureServiceSetup.tsx` |  |  | 0 | Service setup form for the Azure vendor. |
| "src/modules/llms/vendors/bedrock/BedrockRegionAutocomplete::BedrockRegionAutocomplete" | BedrockRegionAutocomplete | `src/modules/llms/vendors/bedrock/BedrockRegionAutocomplete.tsx` |  |  | 1 | Autocomplete input for selecting an AWS Bedrock region. |
| "src/modules/llms/vendors/bedrock/BedrockServiceSetup::BedrockServiceSetup" | BedrockServiceSetup | `src/modules/llms/vendors/bedrock/BedrockServiceSetup.tsx` |  |  | 0 | Service setup form for the AWS Bedrock vendor. |
| "src/modules/llms/vendors/cerebras/CerebrasServiceSetup::CerebrasServiceSetup" | CerebrasServiceSetup | `src/modules/llms/vendors/cerebras/CerebrasServiceSetup.tsx` |  |  | 0 | Service setup form for the Cerebras vendor. |
| "src/modules/llms/vendors/cohere/CohereServiceSetup::CohereServiceSetup" | CohereServiceSetup | `src/modules/llms/vendors/cohere/CohereServiceSetup.tsx` |  |  | 0 | Service setup form for the Cohere vendor. |
| "src/modules/llms/vendors/deepseek/DeepseekAIServiceSetup::DeepseekAIServiceSetup" | DeepseekAIServiceSetup | `src/modules/llms/vendors/deepseek/DeepseekAIServiceSetup.tsx` |  |  | 0 | Service setup form for the Deepseek AI vendor. |
| "src/modules/llms/vendors/gemini/GeminiServiceSetup::GeminiServiceSetup" | GeminiServiceSetup | `src/modules/llms/vendors/gemini/GeminiServiceSetup.tsx` |  |  | 0 | Service setup form for the Gemini vendor. |
| "src/modules/llms/vendors/groq/GroqServiceSetup::GroqServiceSetup" | GroqServiceSetup | `src/modules/llms/vendors/groq/GroqServiceSetup.tsx` |  |  | 0 | Service setup form for the Groq vendor. |
| "src/modules/llms/vendors/lmstudio/LMStudioServiceSetup::LMStudioServiceSetup" | LMStudioServiceSetup | `src/modules/llms/vendors/lmstudio/LMStudioServiceSetup.tsx` |  |  | 0 | Service setup form for the LM Studio vendor. |
| "src/modules/llms/vendors/localai/LocalAIAdmin::ListItemSwitch" | ListItemSwitch | `src/modules/llms/vendors/localai/LocalAIAdmin.tsx` |  | checked | 0 | List item with a toggle switch, used in the LocalAI admin UI. |
| "src/modules/llms/vendors/localai/LocalAIAdmin::ModelJobStatusChecker" | ModelJobStatusChecker | `src/modules/llms/vendors/localai/LocalAIAdmin.tsx` |  | checked | 0 | Polls and shows the status of a LocalAI model job. |
| "src/modules/llms/vendors/localai/LocalAIAdmin::ModelInstallPanel" | ModelInstallPanel | `src/modules/llms/vendors/localai/LocalAIAdmin.tsx` |  | checked | 0 | Panel for installing models into a LocalAI instance. |
| "src/modules/llms/vendors/localai/LocalAIAdmin::LocalAIAdmin" | LocalAIAdmin | `src/modules/llms/vendors/localai/LocalAIAdmin.tsx` |  | checked | 1 | Administration view for a LocalAI service, used to manage that vendor beyond initial setup. |
| "src/modules/llms/vendors/localai/LocalAIServiceSetup::LocalAIServiceSetup" | LocalAIServiceSetup | `src/modules/llms/vendors/localai/LocalAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting a LocalAI service as a model provider. |
| "src/modules/llms/vendors/metaai/MetaAIServiceSetup::MetaAIServiceSetup" | MetaAIServiceSetup | `src/modules/llms/vendors/metaai/MetaAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Meta AI vendor. |
| "src/modules/llms/vendors/mistral/MistralServiceSetup::MistralServiceSetup" | MistralServiceSetup | `src/modules/llms/vendors/mistral/MistralServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Mistral vendor. |
| "src/modules/llms/vendors/modular/ModularServiceSetup::ModularServiceSetup" | ModularServiceSetup | `src/modules/llms/vendors/modular/ModularServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Modular vendor. |
| "src/modules/llms/vendors/moonshot/MoonshotServiceSetup::MoonshotServiceSetup" | MoonshotServiceSetup | `src/modules/llms/vendors/moonshot/MoonshotServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Moonshot vendor. |
| "src/modules/llms/vendors/nvidianim/NvidiaNIMServiceSetup::NvidiaNIMServiceSetup" | NvidiaNIMServiceSetup | `src/modules/llms/vendors/nvidianim/NvidiaNIMServiceSetup.tsx` |  |  | 0 | Setup form for connecting an NVIDIA NIM service. |
| "src/modules/llms/vendors/ollama/OllamaAdministration::OllamaAdministration" | OllamaAdministration | `src/modules/llms/vendors/ollama/OllamaAdministration.tsx` |  |  | 1 | Administration view for an Ollama service, used to manage that vendor beyond initial setup. |
| "src/modules/llms/vendors/ollama/OllamaServiceSetup::OllamaServiceSetup" | OllamaServiceSetup | `src/modules/llms/vendors/ollama/OllamaServiceSetup.tsx` |  |  | 0 | Setup form for connecting an Ollama service as a model provider. |
| "src/modules/llms/vendors/openai/OpenAIHostAutocomplete::OpenAIHostAutocomplete" | OpenAIHostAutocomplete | `src/modules/llms/vendors/openai/OpenAIHostAutocomplete.tsx` | category (2) |  | 1 | Autocomplete input for choosing the host used by the OpenAI service setup. |
| "src/modules/llms/vendors/openai/OpenAIServiceSetup::NvidiaNIMUpgradeNotice" | NvidiaNIMUpgradeNotice | `src/modules/llms/vendors/openai/OpenAIServiceSetup.tsx` |  |  | 0 | Notice shown within the OpenAI setup flow regarding an upgrade path for NVIDIA NIM. |
| "src/modules/llms/vendors/openai/OpenAIServiceSetup::OpenAIServiceSetup" | OpenAIServiceSetup | `src/modules/llms/vendors/openai/OpenAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the OpenAI vendor; hosts @src/modules/llms/vendors/openai/OpenAIHostAutocomplete::OpenAIHostAutocomplete and the upgrade notice. |
| "src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup" | OpenRouterServiceSetup | `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx` |  |  | 0 | Setup form for connecting the OpenRouter vendor. |
| "src/modules/llms/vendors/perplexity/PerplexityServiceSetup::PerplexityServiceSetup" | PerplexityServiceSetup | `src/modules/llms/vendors/perplexity/PerplexityServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Perplexity vendor. |
| "src/modules/llms/vendors/sakanaai/SakanaAIServiceSetup::SakanaAIServiceSetup" | SakanaAIServiceSetup | `src/modules/llms/vendors/sakanaai/SakanaAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Sakana AI vendor. |
| "src/modules/llms/vendors/togetherai/TogetherAIServiceSetup::TogetherAIServiceSetup" | TogetherAIServiceSetup | `src/modules/llms/vendors/togetherai/TogetherAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Together AI vendor. |
| "src/modules/llms/vendors/xai/XAIServiceSetup::XAIServiceSetup" | XAIServiceSetup | `src/modules/llms/vendors/xai/XAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the xAI vendor. |
| "src/modules/llms/vendors/zai/ZAIServiceSetup::ZAIServiceSetup" | ZAIServiceSetup | `src/modules/llms/vendors/zai/ZAIServiceSetup.tsx` |  |  | 0 | Setup form for connecting the Z.AI vendor. |
| "src/modules/news/components/DocsReaderModal::DocsTierChip" | DocsTierChip | `src/modules/news/components/DocsReaderModal.tsx` | color (2) | first, focus, only, open | 0 | Small chip in the docs reader indicating a tier label on a docs entry. |
| "src/modules/news/components/DocsReaderModal::DocsNewChip" | DocsNewChip | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Small chip in the docs reader marking an entry as new. |
| "src/modules/news/components/DocsReaderModal::DocsHomeView" | DocsHomeView | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Landing view of the docs reader, shown before a section or page is selected. |
| "src/modules/news/components/DocsReaderModal::DocsSectionView" | DocsSectionView | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | View listing the contents of a single docs section. |
| "src/modules/news/components/DocsReaderModal::DocsNavPage" | DocsNavPage | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Single page entry within the docs navigation tree. |
| "src/modules/news/components/DocsReaderModal::DocsNavTree" | DocsNavTree | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Hierarchical navigation of docs sections and pages, composed of @src/modules/news/components/DocsReaderModal::DocsNavPage items. |
| "src/modules/news/components/DocsReaderModal::DocsSearchResults" | DocsSearchResults | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Results list shown when searching within the docs reader. |
| "src/modules/news/components/DocsReaderModal::DocsFailure" | DocsFailure | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Error state shown when docs content cannot be loaded. |
| "src/modules/news/components/DocsReaderModal::DocsPageView" | DocsPageView | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 0 | Renders the body of a selected docs page. |
| "src/modules/news/components/DocsReaderModal::DocsReaderModal" | DocsReaderModal | `src/modules/news/components/DocsReaderModal.tsx` |  | first, focus, only, open | 1 | Modal container for the in-app documentation reader, switching between home, section, page, search and failure views. |
| "src/modules/news/components/WhatsNewIndicators::NewsModals" | NewsModals | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 1 | Mounts the news-related modals (what's new and docs) so indicators can open them. |
| "src/modules/news/components/WhatsNewIndicators::NewCount" | NewCount | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 0 | Numeric badge showing how many news items are unseen. |
| "src/modules/news/components/WhatsNewIndicators::WhatsNewNavDot" | WhatsNewNavDot | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 1 | Dot indicator on the navigation signalling unseen what's-new content. |
| "src/modules/news/components/WhatsNewIndicators::AnnouncementsNavDot" | AnnouncementsNavDot | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 0 | Dot indicator on the navigation signalling unseen announcements. |
| "src/modules/news/components/WhatsNewIndicators::WhatsNewMenuItem" | WhatsNewMenuItem | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 1 | Menu entry that opens the what's-new modal. |
| "src/modules/news/components/WhatsNewIndicators::DocsMenuItem" | DocsMenuItem | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 1 | Menu entry that opens @src/modules/news/components/DocsReaderModal::DocsReaderModal. |
| "src/modules/news/components/WhatsNewIndicators::WhatsNewPanelRow" | WhatsNewPanelRow | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 2 | Row placed in a panel that surfaces what's-new content. |
| "src/modules/news/components/WhatsNewIndicators::WhatsNewEmptyChatLine" | WhatsNewEmptyChatLine | `src/modules/news/components/WhatsNewIndicators.tsx` |  |  | 1 | Single line shown in an empty chat pointing to what's new. |
| "src/modules/news/components/WhatsNewModal::NewsBody" | NewsBody | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 0 | Body content of the what's-new modal. |
| "src/modules/news/components/WhatsNewModal::ChangelogDay" | ChangelogDay | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 0 | Group of changelog entries for one day. |
| "src/modules/news/components/WhatsNewModal::ChangelogLedger" | ChangelogLedger | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 0 | Chronological list of @src/modules/news/components/WhatsNewModal::ChangelogDay groups. |
| "src/modules/news/components/WhatsNewModal::ChangelogPane" | ChangelogPane | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 0 | Pane in the what's-new modal that hosts the changelog ledger. |
| "src/modules/news/components/WhatsNewModal::AnnouncementPane" | AnnouncementPane | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 0 | A single announcement pane rendered inside the what's-new modal. |
| "src/modules/news/components/WhatsNewModal::WhatsNewModal" | WhatsNewModal | `src/modules/news/components/WhatsNewModal.tsx` |  | only | 1 | Modal that presents product news and release announcements to the user. |
| "src/modules/speex/components/SpeexConfigureEngineFull::CredentialsApiKeyInputs" | CredentialsApiKeyInputs | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Input fields for entering API-key credentials for a speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::PreviewButton" | PreviewButton | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Button that previews the currently configured speech engine output. |
| "src/modules/speex/components/SpeexConfigureEngineFull::SpeexConfigureEngineFull" | SpeexConfigureEngineFull | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 1 | Full configuration surface for one speech engine, switching to the engine-specific config block. |
| "src/modules/speex/components/SpeexConfigureEngineFull::ElevenLabsConfig" | ElevenLabsConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the ElevenLabs speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::GeminiConfig" | GeminiConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the Gemini speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::InworldConfig" | InworldConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the Inworld speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::LocalAIConfig" | LocalAIConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the LocalAI speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::OpenAIConfig" | OpenAIConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the OpenAI speech engine. |
| "src/modules/speex/components/SpeexConfigureEngineFull::WebSpeechConfig" | WebSpeechConfig | `src/modules/speex/components/SpeexConfigureEngineFull.tsx` |  |  | 0 | Engine-specific settings block for the browser Web Speech engine. |
| "src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines" | SpeexConfigureEngines | `src/modules/speex/components/SpeexConfigureEngines.tsx` |  |  | 1 | Overview surface listing the available speech engines for configuration. |
| "src/modules/speex/components/SpeexEngineSelect::SpeexEngineSelect" | SpeexEngineSelect | `src/modules/speex/components/SpeexEngineSelect.tsx` |  |  | 0 | Select control for choosing the active speech engine. |
| "src/modules/speex/components/SpeexSystemTest::SpeexSystemTest" | SpeexSystemTest | `src/modules/speex/components/SpeexSystemTest.tsx` |  |  | 1 | Diagnostic control for testing that speech synthesis works on the system. |
| "src/modules/speex/components/SpeexVoiceAutocomplete::SpeexVoiceAutocomplete" | SpeexVoiceAutocomplete | `src/modules/speex/components/SpeexVoiceAutocomplete.tsx` |  |  | 2 | Autocomplete input for finding and picking a voice. |
| "src/modules/speex/components/SpeexVoiceSelect::SpeexVoiceSelect" | SpeexVoiceSelect | `src/modules/speex/components/SpeexVoiceSelect.tsx` |  |  | 4 | Select control for choosing a voice from the current speech engine. |
| "src/modules/t2i/components/T2IConfigureEngineFull::T2IEngineProfilePanel" | T2IEngineProfilePanel | `src/modules/t2i/components/T2IConfigureEngineFull.tsx` |  |  | 0 | Panel displaying a text-to-image engine profile. |
| "src/modules/t2i/components/T2IConfigureEngineFull::T2IEngineProfileEditor" | T2IEngineProfileEditor | `src/modules/t2i/components/T2IConfigureEngineFull.tsx` |  |  | 1 | Editor for the fields of a text-to-image engine profile. |
| "src/modules/t2i/components/T2IConfigureEngineFull::T2IConfigureEngineFull" | T2IConfigureEngineFull | `src/modules/t2i/components/T2IConfigureEngineFull.tsx` |  |  | 1 | Full configuration surface for one text-to-image engine. |
| "src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines" | T2IConfigureEngines | `src/modules/t2i/components/T2IConfigureEngines.tsx` |  |  | 1 | Overview surface listing the available text-to-image engines for configuration. |
| "src/modules/t2i/dalle/DallESettings::DallESettings" | DallESettings | `src/modules/t2i/dalle/DallESettings.tsx` |  |  | 1 | Settings block for the DALL·E text-to-image engine. |
| "src/modules/t2i/gemini/GeminiT2ISettings::GeminiT2ISettings" | GeminiT2ISettings | `src/modules/t2i/gemini/GeminiT2ISettings.tsx` |  |  | 1 | Settings block for the Gemini text-to-image engine. |
| "src/modules/t2i/openrouter/OpenRouterT2ISettings::OpenRouterT2ISettings" | OpenRouterT2ISettings | `src/modules/t2i/openrouter/OpenRouterT2ISettings.tsx` |  |  | 1 | Settings block for the OpenRouter text-to-image engine. |
| "src/modules/trade/BackupRestore::FlashRestore" | FlashRestore | `src/modules/trade/BackupRestore.tsx` | backupType (3) | disabled, file | 1 | Control for restoring application data from a backup. |
| "src/modules/trade/BackupRestore::FlashBackup" | FlashBackup | `src/modules/trade/BackupRestore.tsx` |  | disabled, file | 1 | Control for creating a backup of application data. |
| "src/modules/trade/ExportChats::ExportChats" | ExportChats | `src/modules/trade/ExportChats.tsx` |  |  | 1 | Surface for exporting chats out of the application. |
| "src/modules/trade/ImportChats::ImportChats" | ImportChats | `src/modules/trade/ImportChats.tsx` |  |  | 1 | Surface for importing chats into the application. |
| "src/modules/trade/ImportOutcomeModal::ImportOutcomeModal" | ImportOutcomeModal | `src/modules/trade/ImportOutcomeModal.tsx` |  |  | 1 | Modal reporting the result of a chat import. |
| "src/modules/trade/TradeModal::TradeModal" | TradeModal | `src/modules/trade/TradeModal.tsx` |  |  | 0 | Modal that hosts the import, export and backup flows. |
| "src/modules/trade/claude-code/ExportClaudeCode::ExportClaudeCode" | ExportClaudeCode | `src/modules/trade/claude-code/ExportClaudeCode.tsx` |  | checked | 1 | Export flow targeting the Claude Code format. |
| "src/modules/trade/link/ChatLinkDetails::ChatLinkDetails" | ChatLinkDetails | `src/modules/trade/link/ChatLinkDetails.tsx` |  | open | 1 | Displays the details of a shared chat link. |
| "src/modules/trade/link/ChatLinkExport::ChatLinkExport" | ChatLinkExport | `src/modules/trade/link/ChatLinkExport.tsx` |  |  | 1 | Flow for exporting a chat as a shareable link. |
| "src/modules/youtube/YouTubeURLInput::YouTubeURLInput" | YouTubeURLInput | `src/modules/youtube/YouTubeURLInput.tsx` |  |  | 1 | Input for entering a YouTube URL. |

### Variants, in full

#### InlineError (`src/common/components/InlineError.tsx`:12)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `_style` | `whiteSpace` | `pre-wrap` | 0 |
| `_style` | `wordBreak` | `break-word` | 0 |
| `severity` | `warning` | _declared by the prop type only_ | 1 |
| `severity` | `danger` | _declared by the prop type only_ | 2 |
| `severity` | `info` | _declared by the prop type only_ | 0 |

Rendered 45 time(s) in 39 other file(s).

#### GoodTooltip (`src/common/components/GoodTooltip.tsx`:16)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `placement` | `top` | _declared by the prop type only_ | 6 |
| `placement` | `bottom` | _declared by the prop type only_ | 0 |
| `placement` | `top-start` | _declared by the prop type only_ | 0 |

Rendered 38 time(s) in 23 other file(s).

#### GoodModal (`src/common/components/modals/GoodModal.tsx`:32)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `reason` | `backdropClick` | _declared by the prop type only_ | 0 |
| `reason` | `escapeKeyDown` | _declared by the prop type only_ | 0 |
| `reason` | `closeClick` | _declared by the prop type only_ | 0 |

States targeted in this file: `open`

2 conditional class branch(es) in this file are not a named variant.

Rendered 33 time(s) in 31 other file(s).

#### FormInputKey (`src/common/components/forms/FormInputKey.tsx`:22)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

States targeted in this file: `required`

1 conditional class branch(es) in this file are not a named variant.

Rendered 29 time(s) in 25 other file(s).

#### FormSwitchControl (`src/common/components/forms/FormSwitchControl.tsx`:12)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

States targeted in this file: `checked`

Rendered 26 time(s) in 7 other file(s).

#### ExternalLink (`src/common/components/ExternalLink.tsx`:21)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `icon` | `issue` | _declared by the prop type only_ | 1 |
| `icon` | `public-docs` | _declared by the prop type only_ | 1 |

Rendered 19 time(s) in 12 other file(s).

#### KeyStroke (`src/common/components/KeyStroke.tsx`:25)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 4 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 18 time(s) in 15 other file(s).

#### CloseablePopup (`src/common/components/CloseablePopup.tsx`:68)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 16 time(s) in 14 other file(s).

#### FormSliderControl (`src/common/components/forms/FormSliderControl.tsx`:17)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 2 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |
| `valueLabelDisplay` | `on` | _declared by the prop type only_ | 0 |
| `valueLabelDisplay` | `auto` | _declared by the prop type only_ | 0 |
| `valueLabelDisplay` | `off` | _declared by the prop type only_ | 0 |

Rendered 12 time(s) in 4 other file(s).

#### ScaledTextBlockRenderer (`src/modules/blocks/ScaledTextBlockRenderer.tsx`:15)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `textRenderVariant` | `text` | _declared by the prop type only_ | 4 |
| `textRenderVariant` | `markdown` | _declared by the prop type only_ | 5 |

Rendered 11 time(s) in 10 other file(s).

#### VendorIcon (`src/common/util/dMessageUtils.tsx`:264)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `userCommand` | `draw` | _declared by the prop type only_ | 0 |
| `userCommand` | `react` | _declared by the prop type only_ | 0 |
| `assistantColor` | `danger` | _declared by the prop type only_ | 0 |
| `assistantColor` | `warning` | _declared by the prop type only_ | 0 |
| `assistantColor` | `neutral` | _declared by the prop type only_ | 0 |

Rendered 10 time(s) in 5 other file(s).

#### AppBreadcrumbs (`src/common/components/AppBreadcrumbs.tsx`:27)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 9 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 9 time(s) in 6 other file(s).

#### AutoBlocksRenderer (`src/modules/blocks/AutoBlocksRenderer.tsx`:39)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `textRenderVariant` | `markdown` | _declared by the prop type only_ | 1 |
| `textRenderVariant` | `markdown-user` | _declared by the prop type only_ | 0 |
| `textRenderVariant` | `text` | _declared by the prop type only_ | 0 |

States targeted in this file: `active`

Rendered 4 time(s) in 4 other file(s).

#### ConfirmIconButton (`src/common/components/ConfirmIconButton.tsx`:41)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `side` | `start` | _declared by the prop type only_ | 2 |
| `side` | `end` | _declared by the prop type only_ | 0 |

Rendered 4 time(s) in 4 other file(s).

#### InvertedBar (`src/common/layout/optima/InvertedBar.tsx`:29)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `direction` | `horizontal` | _declared by the prop type only_ | 2 |
| `direction` | `vertical` | _declared by the prop type only_ | 1 |

Rendered 3 time(s) in 3 other file(s).

#### LiteVideoEmbed (`src/common/components/LiteVideoEmbed.tsx`:80)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `play` | `click` | _declared by the prop type only_ | 0 |
| `play` | `auto` | _declared by the prop type only_ | 0 |
| `play` | `ambient` | _declared by the prop type only_ | 0 |

Rendered 3 time(s) in 3 other file(s).

#### BeamView (`src/modules/beam/BeamView.tsx`:26)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `operation` | `copy` | _declared by the prop type only_ | 0 |
| `operation` | `use` | _declared by the prop type only_ | 0 |

States targeted in this file: `disabled`

Rendered 2 time(s) in 2 other file(s).

#### CMEditAttach (`src/apps/chat/components/message/CMEditAttach.tsx`:74)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `variant` | `bar` | _declared by the prop type only_ | 1 |
| `variant` | `group` | _declared by the prop type only_ | 1 |

Rendered 2 time(s) in 2 other file(s).

#### DrawGallery (`src/apps/draw/DrawGallery.tsx`:10)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `domain` | `draw` | _declared by the prop type only_ | 1 |
| `domain` | `app` | _declared by the prop type only_ | 1 |

1 conditional class branch(es) in this file are not a named variant.

Rendered 2 time(s) in 1 other file(s).

#### RichMenuButton (`src/common/components/RichMenu.tsx`:84)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `placement` | `top-start` | _declared by the prop type only_ | 0 |
| `placement` | `top` | _declared by the prop type only_ | 0 |
| `placement` | `top-end` | _declared by the prop type only_ | 0 |
| `placement` | `bottom-start` | _declared by the prop type only_ | 0 |
| `placement` | `bottom` | _declared by the prop type only_ | 0 |
| `placement` | `bottom-end` | _declared by the prop type only_ | 0 |

States targeted in this file: `disabled`, `only`, `open`

Rendered 2 time(s) in 1 other file(s).

#### TokenTooltip (`src/apps/chat/components/composer/tokens/TokenTooltip.tsx`:142)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `placement` | `top` | _declared by the prop type only_ | 0 |
| `placement` | `top-end` | _declared by the prop type only_ | 1 |

Rendered 2 time(s) in 2 other file(s).

#### AppCall (`src/apps/call/AppCall.tsx`:26)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `backTo` | `app-chat` | _declared by the prop type only_ | 0 |
| `backTo` | `app-call-contacts` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### AppChat (`src/apps/chat/AppChat.tsx`:98)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `direction` | `back` | _declared by the prop type only_ | 0 |
| `direction` | `forward` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### BlockPartError_NetDisconnected (`src/apps/chat/components/message/fragments-content/BlockPartError_NetDisconnected.tsx`:15)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `disconnectionKind` | `net-client-closed` | _declared by the prop type only_ | 0 |
| `disconnectionKind` | `net-server-closed` | _declared by the prop type only_ | 0 |
| `disconnectionKind` | `net-unknown-closed` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### ChipExpander (`src/common/components/ChipExpander.tsx`:19)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### ChipToggleButton (`src/common/components/ChipToggleButton.tsx`:17)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### DiffViewer (`src/common/components/diff/DiffViewer.tsx`:46)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `oldType` | `added` | _declared by the prop type only_ | 0 |
| `oldType` | `removed` | _declared by the prop type only_ | 0 |
| `oldType` | `modifiedLeft` | _declared by the prop type only_ | 0 |
| `oldType` | `unchanged` | _declared by the prop type only_ | 0 |
| `oldType` | `empty` | _declared by the prop type only_ | 0 |
| `oldType` | `expander` | _declared by the prop type only_ | 0 |
| `newType` | `added` | _declared by the prop type only_ | 0 |
| `newType` | `removed` | _declared by the prop type only_ | 0 |
| `newType` | `modifiedRight` | _declared by the prop type only_ | 0 |
| `newType` | `unchanged` | _declared by the prop type only_ | 0 |
| `newType` | `empty` | _declared by the prop type only_ | 0 |
| `newType` | `expander` | _declared by the prop type only_ | 0 |
| `initialViewType` | `split` | _declared by the prop type only_ | 0 |
| `initialViewType` | `unified` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### FlashRestore (`src/modules/trade/BackupRestore.tsx`:660)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `backupType` | `full` | _declared by the prop type only_ | 0 |
| `backupType` | `partial` | _declared by the prop type only_ | 0 |
| `backupType` | `auto-before-restore` | _declared by the prop type only_ | 0 |

States targeted in this file: `disabled`, `file`

Rendered 1 time(s) in 1 other file(s).

#### LLMVendorSetup (`src/modules/llms/components/LLMVendorSetup.tsx`:101)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `vENDOR_DOCS` | `alibaba` | `connect-alibaba` | 0 |
| `vENDOR_DOCS` | `anthropic` | `connect-anthropic` | 0 |
| `vENDOR_DOCS` | `azure` | `connect-azure` | 0 |
| `vENDOR_DOCS` | `bedrock` | `connect-bedrock` | 0 |
| `vENDOR_DOCS` | `cerebras` | `connect-cerebras` | 0 |
| `vENDOR_DOCS` | `cohere` | `connect-cohere` | 0 |
| `vENDOR_DOCS` | `deepseek` | `connect-deepseek` | 0 |
| `vENDOR_DOCS` | `googleai` | `connect-gemini` | 0 |
| `vENDOR_DOCS` | `groq` | `connect-groq` | 0 |
| `vENDOR_DOCS` | `lmstudio` | `connect-lmstudio` | 0 |
| `vENDOR_DOCS` | `localai` | `connect-localai` | 0 |
| `vENDOR_DOCS` | `metaai` | `connect-meta` | 0 |
| `vENDOR_DOCS` | `mistral` | `connect-mistral` | 0 |
| `vENDOR_DOCS` | `modular` | `connect-modular` | 0 |
| `vENDOR_DOCS` | `moonshot` | `connect-moonshot-ai` | 0 |
| `vENDOR_DOCS` | `nvidianim` | `connect-nvidia-nim` | 0 |
| `vENDOR_DOCS` | `ollama` | `connect-ollama` | 0 |
| `vENDOR_DOCS` | `openai` | `connect-openai` | 0 |
| `vENDOR_DOCS` | `openrouter` | `connect-openrouter` | 0 |
| `vENDOR_DOCS` | `perplexity` | `connect-perplexity` | 0 |
| `vENDOR_DOCS` | `sakanaai` | `connect-sakana` | 0 |
| `vENDOR_DOCS` | `togetherai` | `connect-together` | 0 |
| `vENDOR_DOCS` | `xai` | `connect-xai` | 0 |
| `vENDOR_DOCS` | `zai` | `connect-zai` | 0 |

Rendered 1 time(s) in 1 other file(s).

#### ModelsConfiguratorModal (`src/modules/llms/models-modal/ModelsConfiguratorModal.tsx`:53)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `reason` | `backdropClick` | _declared by the prop type only_ | 0 |
| `reason` | `escapeKeyDown` | _declared by the prop type only_ | 0 |
| `reason` | `closeClick` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### OpenAIHostAutocomplete (`src/modules/llms/vendors/openai/OpenAIHostAutocomplete.tsx`:72)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `category` | `Example Proxies` | _declared by the prop type only_ | 0 |
| `category` | `Example Providers` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### OpenRouterWebToolsConfig (`src/modules/llms/models-modal/OpenRouterWebToolsConfig.tsx`:51)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `searchOverride` | `force_on` | _declared by the prop type only_ | 0 |
| `searchOverride` | `force_off` | _declared by the prop type only_ | 0 |

States targeted in this file: `disabled`

Rendered 1 time(s) in 1 other file(s).

#### SortableDocAttachmentButton (`src/apps/chat/components/message/fragments-attachment-doc/DocumentAttachmentFragments.tsx`:26)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `renderVariant` | `chat-message` | _declared by the prop type only_ | 0 |
| `renderVariant` | `data-editor` | _declared by the prop type only_ | 0 |

1 conditional class branch(es) in this file are not a named variant.

Rendered 1 time(s) in 1 other file(s).

#### VideoPlayerYouTube (`src/common/components/VideoPlayerYouTube.tsx`:5)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `play` | `click` | _declared by the prop type only_ | 0 |
| `play` | `auto` | _declared by the prop type only_ | 1 |
| `play` | `ambient` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### ZeroGallery (`src/apps/draw/gallery/ZeroGallery.tsx`:26)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `domain` | `draw` | _declared by the prop type only_ | 0 |
| `domain` | `app` | _declared by the prop type only_ | 0 |

Rendered 1 time(s) in 1 other file(s).

#### CountChips (`src/modules/llms/models-modal/ModelsChangelogPanel.tsx`:121)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `key` | `label` | _declared by the prop type only_ | 0 |
| `key` | `change` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### DocsTierChip (`src/modules/news/components/DocsReaderModal.tsx`:557)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `color` | `primary` | _declared by the prop type only_ | 0 |
| `color` | `accent` | _declared by the prop type only_ | 0 |

States targeted in this file: `first`, `focus`, `only`, `open`

1 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### FeatureBadge (`src/common/components/FeatureBadge.tsx`:14)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

States targeted in this file: `active`

Rendered 0 time(s) in 0 other file(s).

#### FormNumberInput (`src/common/components/forms/FormNumberInput.tsx`:31)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### GoogleFavicon (`src/modules/blocks/markdown/CustomARenderer.tsx`:59)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `type` | `social` | _declared by the prop type only_ | 0 |
| `type` | `academic` | _declared by the prop type only_ | 0 |
| `type` | `news` | _declared by the prop type only_ | 0 |
| `type` | `default` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### ImageTitleEditorOverlay (`src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx`:148)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `renderVariant` | `chat-message` | _declared by the prop type only_ | 0 |
| `renderVariant` | `data-editor` | _declared by the prop type only_ | 0 |

5 conditional class branch(es) in this file are not a named variant.

Rendered 0 time(s) in 0 other file(s).

#### LiveFeedButton (`src/common/attachment-drafts/attachment-sources/AttachmentSources.tsx`:44)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `mode` | `menu-compact` | _declared by the prop type only_ | 0 |
| `mode` | `menu-rich` | _declared by the prop type only_ | 0 |
| `mode` | `inline-buttons` | _declared by the prop type only_ | 0 |
| `mode` | `menu-message` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### LLMSearchFilterInput (`src/common/stores/llms/components/LLMSearchFilterInput.tsx`:24)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `size` | `sm` | _declared by the prop type only_ | 0 |
| `size` | `md` | _declared by the prop type only_ | 0 |
| `size` | `lg` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### ShortcutItem (`src/apps/chat/components/StatusBar.tsx`:145)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `symbol` | `Ctrl` | _declared by the prop type only_ | 0 |
| `symbol` | `Alt` | _declared by the prop type only_ | 0 |
| `symbol` | `Shift` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).

#### VendorIconSprite (`src/modules/llms/components/LLMVendorIconSprite.tsx`:50)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `vI` | `alibaba` | `vi-alibaba` | 0 |
| `vI` | `anthropic` | `vi-anthropic` | 0 |
| `vI` | `azure` | `vi-azure` | 0 |
| `vI` | `bedrock` | `vi-bedrock` | 0 |
| `vI` | `cerebras` | `vi-cerebras` | 0 |
| `vI` | `cohere` | `vi-cohere` | 0 |
| `vI` | `deepseek` | `vi-deepseek` | 0 |
| `vI` | `googleai` | `vi-googleai` | 0 |
| `vI` | `groq` | `vi-groq` | 0 |
| `vI` | `lmstudio` | `vi-lmstudio` | 0 |
| `vI` | `localai` | `vi-localai` | 0 |
| `vI` | `metaai` | `vi-metaai` | 0 |
| `vI` | `mistral` | `vi-mistral` | 0 |
| `vI` | `modular` | `vi-modular` | 0 |
| `vI` | `moonshot` | `vi-moonshot` | 0 |
| `vI` | `nvidianim` | `vi-nvidianim` | 0 |
| `vI` | `ollama` | `vi-ollama` | 0 |
| `vI` | `openai` | `vi-openai` | 0 |
| `vI` | `openrouter` | `vi-openrouter` | 0 |
| `vI` | `perplexity` | `vi-perplexity` | 0 |
| `vI` | `sakanaai` | `vi-sakanaai` | 0 |
| `vI` | `togetherai` | `vi-togetherai` | 0 |
| `vI` | `xai` | `vi-xai` | 0 |
| `vI` | `zai` | `vi-zai` | 0 |

Rendered 0 time(s) in 0 other file(s).

#### VideoPlayerVimeo (`src/common/components/VideoPlayerVimeo.tsx`:5)

| axis | value | classes | call sites |
| --- | --- | --- | --- |
| `play` | `click` | _declared by the prop type only_ | 0 |
| `play` | `auto` | _declared by the prop type only_ | 0 |
| `play` | `ambient` | _declared by the prop type only_ | 0 |

Rendered 0 time(s) in 0 other file(s).
