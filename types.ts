

export interface Tool {
  id: string;
  name: string;
  description: string;
  iconName: string; // Using Lucide icon names conceptually
  category: string;
}

export type ViewMode = 'GRID' | 'EXECUTION';

export interface AppState {
  currentView: ViewMode;
  selectedTool: Tool | null;
  activeCategory: string;
  transferredImage?: string | null; // New field to hold image data when switching tools
  searchQuery: string;
}

export interface ControlSettings {
  style: string;
  environment: string;
  weather: string;
  architectStyle: string;
  aspectRatio: string;
  quality: number;
  cfgScale: number;
  seed: string;
  negativePrompt: boolean;
}

export interface HistoryItem {
  id: string;
  toolId: string;
  toolName: string;
  prompt: string;
  imageUrl: string;
  timestamp: number;
  settings?: ControlSettings;
}