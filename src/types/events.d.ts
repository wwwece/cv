type AppEventType =
  | 'app-loaded'
  | 'page-view'
  | 'hello'
  | 'toggle-color-theme-to-color'
  | 'toggle-color-theme-to-bw'
  | 'intro-restarted'
  | 'intro-finished'
  | 'link-clicked'
  | 'flip-all-clicked';

interface AppEvent {
  event: EventType;
  sessionID: string;
  timestamp: string;
  origin: string;
  path?: string;
  linkTarget?: string;
  screenWidth?: number;
  screenHeight?: number;
  colorTheme?: ColorTheme;
  employer?: string;
}
