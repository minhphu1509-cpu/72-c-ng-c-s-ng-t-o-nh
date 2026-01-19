
import { Tool } from './types';

export const CATEGORIES = [
  "📐 Kiến trúc & Nội thất (24)",
  "📸 Chỉnh sửa Ảnh (15)",
  "🎨 Sáng tạo & Marketing (24)"
];

// Dữ liệu cho bộ điều khiển Architectural Matrix
export const ARCH_MATERIALS = [
  "Bê tông trần (Raw Concrete)", "Kính (Glass Facade)", "Gạch nung (Red Brick)", "Gỗ tự nhiên (Natural Timber)", 
  "Vữa trắng (White Stucco)", "Thép rỉ (Corten Steel)", "Tường cây (Green Wall)", "Đá Marble (Marble Stone)"
];

export const ARCH_VIBES = [
  "Sương sớm (Foggy Morning)", "Giờ vàng (Golden Hour)", "Mưa Cyberpunk (Rainy Cyberpunk)", "Bắc Âu trong trẻo (Nordic Clear)", 
  "Nắng nhiệt đới (Tropical Sunlight)", "Tối giản (Minimalist White)", "Hoàng hôn (Dusk Lighting)", "Studio (Studio Clay)"
];

export const EXTERIOR_ANGLES = [
  { id: 'ext_front', label: 'Mặt đứng chính (Front)', icon: 'Home' },
  { id: 'ext_bird', label: 'Chim bay (Bird\'s Eye)', icon: 'Plane' },
  { id: 'ext_worm', label: 'Góc thấp (Worm\'s Eye)', icon: 'ArrowUp' },
  { id: 'ext_corner', label: 'Phối cảnh góc (Corner)', icon: 'Box' },
  { id: 'ext_street', label: 'Tầm mắt người (Street View)', icon: 'User' },
  { id: 'ext_detail', label: 'Chi tiết (Detail)', icon: 'ZoomIn' }
];

export const INTERIOR_ANGLES = [
  { id: 'int_wide', label: 'Toàn cảnh (Wide Angle)', icon: 'Maximize' },
  { id: 'int_eye', label: 'Ngang mắt (Eye Level)', icon: 'Eye' },
  { id: 'int_top', label: 'Nhìn từ trên (Top View)', icon: 'ArrowDown' },
  { id: 'int_close', label: 'Cận cảnh (Close-up)', icon: 'Camera' },
  { id: 'int_bokeh', label: 'Nghệ thuật (Bokeh)', icon: 'Sparkles' },
  { id: 'int_iso', label: 'Isometric', icon: 'Box' }
];

export const CAMERA_LENSES = [
  "14mm (Siêu rộng)", "24mm (Góc rộng)", "35mm (Tiêu chuẩn)", "50mm (Chân dung)", "85mm (Tele)", "135mm (Macro)"
];

export const CLEANUP_TARGETS = [
  "Giàn giáo (Scaffolding)",
  "Đống xà bần & Rác (Debris)",
  "Vật liệu xây dựng (Materials)",
  "Công nhân (Workers)",
  "Xe cẩu & Máy xúc (Machinery)",
  "Bạt che & Lưới an toàn (Tarps)",
  "Dây điện loằng ngoằng (Wires)",
  "Cỏ dại & Bụi rậm (Vegetation)"
];

// --- CONSTANTS FOR ID PHOTO TOOL (T056) ---
export const ID_PHOTO_SIZES = [
  { id: 'vn_3x4', label: '3x4 cm (Hồ sơ thường)', ratio: '3:4' },
  { id: 'vn_4x6', label: '4x6 cm (Hồ sơ/CV)', ratio: '2:3' },
  { id: 'passport_std', label: '3.5x4.5 cm (Hộ chiếu)', ratio: '3.5:4.5' },
  { id: 'us_visa', label: '5x5 cm (US Visa)', ratio: '1:1' }
];

export const ID_BACKGROUNDS = [
  { id: 'white', label: 'Trắng (White)', color: '#FFFFFF' },
  { id: 'blue', label: 'Xanh dương (Blue)', color: '#4488EE' },
  { id: 'grey', label: 'Xám (Grey)', color: '#AAAAAA' }
];

export const ID_CLOTHING = [
  { id: 'keep', label: 'Giữ nguyên (Original)' },
  { id: 'shirt_white', label: 'Sơ mi trắng (White Shirt)' },
  { id: 'suit_black', label: 'Vest đen (Black Suit)' },
  { id: 'suit_navy', label: 'Vest xanh (Navy Suit)' },
  { id: 'ao_dai', label: 'Áo dài trắng (VN)' }
];

// --- CONSTANTS FOR LAYOUT TOOL (T015) ---
export const LAYOUT_TOPICS = [
  "Nhà ở / Chung cư (Housing/Apartment)",
  "Bảo tàng / Triển lãm (Museum/Exhibition)",
  "Trường học / Giáo dục (School/Education)",
  "Bệnh viện / Y tế (Hospital/Healthcare)",
  "Trung tâm Văn hóa (Cultural Center)",
  "Quy hoạch Đô thị (Urban Planning)",
  "Resort / Nghỉ dưỡng (Hospitality/Resort)",
  "Cao ốc Văn phòng (Office Tower)",
  "Công trình Tôn giáo (Religious/Church/Temple)",
  "Nội thất Nhà ở (Residential Interior)",
  "Nội thất Thương mại (Commercial Interior)",
  "Công trình Công cộng (Public Space)"
];

export const LAYOUT_COLOR_SCHEMES = [
  { id: 'monochrome_bw', label: 'Đen Trắng (Monochrome)', color: '#333333' },
  { id: 'blueprint_blue', label: 'Xanh Blueprint (Technical)', color: '#0044cc' },
  { id: 'earthy_beige', label: 'Tông Đất (Earthy/Beige)', color: '#d2b48c' },
  { id: 'pastel_soft', label: 'Pastel Nhẹ nhàng', color: '#ffb6c1' },
  { id: 'dark_mode_neon', label: 'Dark Mode + Neon', color: '#1a1a1a' },
  { id: 'nature_green', label: 'Xanh Eco (Nature)', color: '#4caf50' },
  { id: 'brick_terracotta', label: 'Đỏ Gạch (Terracotta)', color: '#cc4e33' },
  { id: 'minimal_white', label: 'Trắng Tinh khôi (Minimal)', color: '#ffffff' }
];

export const LAYOUT_FONTS = [
  "Roboto (Modern/Clean/Standard)",
  "Helvetica (Sans-Serif/Neutral)",
  "Times New Roman (Serif/Classic)",
  "Roboto Mono (Technical/Code)",
  "Architects Daughter (Handwritten)"
];

export const LAYOUT_TEMPLATES = [
  { id: 'layout_competition', name: 'Bảng thi tuyển', desc: 'Mật độ cao, ấn tượng mạnh (High Density)', icon: 'Trophy' },
  { id: 'layout_hero', name: 'Tâm điểm (Hero)', desc: '1 Ảnh lớn chủ đạo + chi tiết nhỏ (Cinematic)', icon: 'Layout' },
  { id: 'layout_grid', name: 'Lưới cân bằng', desc: 'Lưới 2x2 hoặc 3x3 cân bằng (Clean)', icon: 'Grid' },
  { id: 'layout_process', name: 'Diễn giải (Process)', desc: 'Diễn giải quá trình từ ý tưởng (Diagrammatic)', icon: 'GitMerge' },
  { id: 'layout_magazine', name: 'Tạp chí (Magazine)', desc: 'Nhiều khoảng trắng, nghệ thuật (Editorial)', icon: 'BookOpen' },
  { id: 'layout_deconstruct', name: 'Phá cách', desc: 'Bố cục phá cách, cắt xẻ (Dynamic)', icon: 'Scissors' },
  { id: 'layout_split', name: 'Chia đôi (Split)', desc: 'Chia đôi: Kỹ thuật & Phối cảnh', icon: 'Columns' }
];

export const PAPER_SIZES = ["A0 (841x1189mm)", "A1 (594x841mm)", "Horizontal Presentation (16:9)", "Square (1:1)"];

export const LAYOUT_ELEMENTS = [
  "Mặt bằng tổng thể (Masterplan)",
  "Sơ đồ phân tích (Diagrams)",
  "Mặt cắt kỹ thuật (Sections)",
  "Tiểu cảnh (Vignettes)",
  "Thuyết minh dự án (Project Text)",
  "Biểu đồ vật liệu (Material Board)",
  "Phối cảnh chim bay (Aerial View)",
  "Chi tiết cấu tạo (Details)",
  "Mặt đứng (Elevations)",
  "Sơ đồ giao thông (Circulation)"
];

export const LAYOUT_STYLES = [
  "Swiss Style (Minimalist & Typographic)",
  "Beaux-Arts (Classical & Watercolor)",
  "Technical Blueprint (Lineart & Blue)",
  "Modern Arch Daily (Clean & White)",
  "Cyberpunk/Neon (Dark Mode)",
  "Eco/Green (Organic & Soft)"
];

// --- CONSTANTS FOR MATERIAL TOOL (T064) ---
export const MATERIAL_CATEGORIES = [
  { id: 'WOOD', label: 'Gỗ (Wood)', icon: 'TreeDeciduous' },
  { id: 'STONE', label: 'Đá (Stone)', icon: 'Hexagon' },
  { id: 'FABRIC', label: 'Vải (Fabric)', icon: 'Shirt' },
  { id: 'METAL', label: 'Kim loại (Metal)', icon: 'Hammer' },
  { id: 'CONCRETE', label: 'Bê tông (Concrete)', icon: 'Component' },
  { id: 'GLASS', label: 'Kính (Glass)', icon: 'Glasses' },
];

export const MATERIAL_AREAS = [
  { id: 'floor', label: 'Sàn nhà (Flooring)' },
  { id: 'wall', label: 'Tường (Walls)' },
  { id: 'ceiling', label: 'Trần (Ceiling)' },
  { id: 'kitchen_counter', label: 'Mặt bếp (Countertop)' },
  { id: 'kitchen_cabinet', label: 'Tủ bếp (Cabinets)' },
  { id: 'sofa', label: 'Sofa/Ghế' },
  { id: 'curtain', label: 'Rèm cửa (Curtains)' },
  { id: 'facade', label: 'Mặt tiền (Exterior Facade)' },
];

export const MATERIAL_COLLECTIONS: Record<string, {id: string, label: string, prompt: string, color: string}[]> = {
  WOOD: [
    { id: 'oak_light', label: 'Sồi sáng (Light Oak)', prompt: 'Natural light oak wood texture, fine grain, matte finish', color: '#C2B280' },
    { id: 'walnut_dark', label: 'Óc chó (Dark Walnut)', prompt: 'Premium dark walnut wood, rich grain, satin finish', color: '#5C4033' },
    { id: 'wood_herringbone', label: 'Sàn xương cá', prompt: 'Herringbone wood flooring pattern, oak texture', color: '#DEB887' },
    { id: 'wood_shou_sugi', label: 'Gỗ cháy (Shou Sugi Ban)', prompt: 'Charred black wood texture, deep texture', color: '#2F2F2F' },
    { id: 'plywood_birch', label: 'Plywood Birch', prompt: 'Raw birch plywood texture, light Scandinavian style', color: '#F5DEB3' },
  ],
  STONE: [
    { id: 'marble_carrara', label: 'Marble Carrara', prompt: 'White Carrara marble with soft grey veins, polished', color: '#F0F0F0' },
    { id: 'marble_nero', label: 'Marble Nero', prompt: 'Black Marquina marble with white veins, high gloss', color: '#1A1A1A' },
    { id: 'terrazzo_color', label: 'Terrazzo', prompt: 'Colorful terrazzo stone texture, speckled pattern', color: '#D3D3D3' },
    { id: 'granite_grey', label: 'Granite Grey', prompt: 'Speckled grey granite stone, rough texture', color: '#808080' },
    { id: 'travertine', label: 'Travertine', prompt: 'Beige travertine stone, porous texture', color: '#E3DAC9' },
  ],
  FABRIC: [
    { id: 'linen_beige', label: 'Linen Beige', prompt: 'Natural beige linen fabric, woven texture', color: '#F5F5DC' },
    { id: 'velvet_blue', label: 'Nhung xanh (Velvet)', prompt: 'Royal blue velvet fabric, soft sheen', color: '#000080' },
    { id: 'leather_cognac', label: 'Da bò (Cognac Leather)', prompt: 'Vintage cognac leather, distressed texture', color: '#9E5B40' },
    { id: 'boucle_white', label: 'Vải Boucle', prompt: 'White boucle fabric, looped texture, cozy', color: '#FFFDD0' },
  ],
  METAL: [
    { id: 'brass_brushed', label: 'Đồng xước (Brass)', prompt: 'Brushed gold brass metal, metallic sheen', color: '#B5A642' },
    { id: 'steel_stainless', label: 'Inox (Stainless Steel)', prompt: 'Brushed stainless steel, silver, modern', color: '#C0C0C0' },
    { id: 'copper_patina', label: 'Đồng rỉ (Patina)', prompt: 'Aged copper with green patina texture', color: '#43B3AE' },
  ],
  CONCRETE: [
    { id: 'concrete_raw', label: 'Bê tông thô', prompt: 'Raw grey concrete, industrial look, air bubbles', color: '#888888' },
    { id: 'concrete_polished', label: 'Bê tông mài', prompt: 'Polished concrete floor, reflective, industrial', color: '#A9A9A9' },
    { id: 'brick_white', label: 'Gạch thẻ trắng', prompt: 'White subway tiles, ceramic texture', color: '#FFFFFF' },
    { id: 'brick_red', label: 'Gạch nung đỏ', prompt: 'Exposed red brick wall, rough texture', color: '#B22222' },
  ],
  GLASS: [
    { id: 'glass_clear', label: 'Kính trong', prompt: 'Clear glass, transparency, reflections', color: '#E0FFFF' },
    { id: 'glass_frosted', label: 'Kính mờ', prompt: 'Frosted glass, translucent, matte', color: '#F0FFFF' },
    { id: 'glass_reeded', label: 'Kính gân (Reeded)', prompt: 'Reeded fluted glass texture, vertical lines', color: '#D1E8E2' },
  ]
};

// --- CONSTANTS FOR MATERIAL BOARD TOOL (T061) ---
export const MATBOARD_STYLES = [
  { id: 'japandi', label: 'Japandi (Gỗ + Trắng)', prompt: 'Japandi style, light oak wood, cream fabric, minimalist aesthetic' },
  { id: 'industrial', label: 'Industrial (Bê tông + Thép)', prompt: 'Industrial style, raw concrete, brushed metal, leather, dark tones' },
  { id: 'luxury', label: 'Luxury (Đá + Vàng)', prompt: 'Luxury style, marble stone, brass accents, velvet, rich colors' },
  { id: 'tropical', label: 'Tropical (Mây tre + Xanh)', prompt: 'Tropical style, rattan, linen, green plant leaves, terracotta' },
  { id: 'scandi', label: 'Scandinavian (Pastel)', prompt: 'Scandinavian style, pastel colors, light wood, soft textures' },
  { id: 'midcentury', label: 'Mid-Century Modern', prompt: 'Mid-century modern style, walnut wood, geometric patterns, bold colors' },
];

export const MATBOARD_LAYOUTS = [
  { id: 'knolling', label: 'Knolling (Lưới vuông)', prompt: 'Knolling photography, objects arranged at 90 degree angles, organized grid layout, clean spacing, top-down view' },
  { id: 'organic', label: 'Organic (Xếp lớp)', prompt: 'Organic flatlay composition, overlapping samples, natural arrangement, artistic mess, soft shadows' },
  { id: 'minimal', label: 'Tối giản (Ít đồ)', prompt: 'Minimalist composition, negative space, few key items, clean background, focus on texture' },
  { id: 'diagonal', label: 'Đường chéo (Diagonal)', prompt: 'Diagonal composition, dynamic arrangement, flow from corner to corner' },
];

export const MATBOARD_ITEMS = [
  { id: 'wood_sample', label: 'Mẫu gỗ (Wood)', icon: 'TreeDeciduous' },
  { id: 'stone_sample', label: 'Mẫu đá (Stone)', icon: 'Hexagon' },
  { id: 'fabric_swatch', label: 'Vải (Fabric)', icon: 'Shirt' },
  { id: 'paint_chips', label: 'Thẻ màu (Paint)', icon: 'Palette' },
  { id: 'metal_trim', label: 'Kim loại (Metal)', icon: 'Hammer' },
  { id: 'tile_sample', label: 'Gạch lát (Tile)', icon: 'Grid' },
  { id: 'plant_leaf', label: 'Lá cây (Plant)', icon: 'Leaf' },
  { id: 'sketch', label: 'Phác thảo (Sketch)', icon: 'PenTool' },
  { id: 'coffee', label: 'Cà phê (Decor)', icon: 'Coffee' },
  { id: 'tech', label: 'Điện thoại/iPad', icon: 'Smartphone' },
];

// --- UPDATED CONSTANTS FOR PAINT TOOL (T068) ---
export const PAINT_TARGETS = [
  { id: 'walls_ext', label: 'Tường ngoại thất (Exterior Walls)', prompt: 'exterior building walls' },
  { id: 'walls_int', label: 'Tường nội thất (Interior Walls)', prompt: 'interior room walls' },
  { id: 'roof', label: 'Mái (Roof/Tiles)', prompt: 'roofing material' },
  { id: 'facade_accent', label: 'Điểm nhấn mặt tiền (Accent)', prompt: 'architectural accents and trim' },
  { id: 'window_frames', label: 'Khung cửa (Window Frames)', prompt: 'window frames and door frames' },
  { id: 'ceiling', label: 'Trần nhà (Ceiling)', prompt: 'ceiling surface' },
  { id: 'kitchen_cab', label: 'Tủ bếp (Kitchen Cabinets)', prompt: 'kitchen cabinetry' },
];

export const PAINT_FINISHES = [
  { id: 'matte', label: 'Mờ (Matte)', prompt: 'flat matte paint finish' },
  { id: 'satin', label: 'Bóng mờ (Satin)', prompt: 'smooth satin paint finish' },
  { id: 'gloss', label: 'Bóng (High Gloss)', prompt: 'high-gloss reflective finish' },
  { id: 'stucco', label: 'Gai sần (Stucco)', prompt: 'textured stucco finish' },
  { id: 'metallic', label: 'Kim loại (Metallic)', prompt: 'metallic paint finish' },
];

export const PAINT_PALETTES = {
  NEUTRALS: [
    { id: 'white_pure', label: 'Pure White', color: '#FFFFFF', prompt: 'Pure White' },
    { id: 'white_cream', label: 'Cream', color: '#FDFDD0', prompt: 'Cream White' },
    { id: 'grey_light', label: 'Light Grey', color: '#D3D3D3', prompt: 'Light Grey' },
    { id: 'grey_warm', label: 'Warm Grey', color: '#A9A9A9', prompt: 'Warm Grey' },
    { id: 'charcoal', label: 'Charcoal', color: '#36454F', prompt: 'Charcoal Grey' },
    { id: 'black_jet', label: 'Jet Black', color: '#1A1A1A', prompt: 'Jet Black' },
  ],
  EARTH: [
    { id: 'beige', label: 'Beige', color: '#F5F5DC', prompt: 'Beige' },
    { id: 'terracotta', label: 'Terracotta', color: '#E2725B', prompt: 'Terracotta' },
    { id: 'brown_coffee', label: 'Coffee', color: '#6F4E37', prompt: 'Coffee Brown' },
    { id: 'sand', label: 'Sand', color: '#C2B280', prompt: 'Sand' },
    { id: 'olive', label: 'Olive', color: '#808000', prompt: 'Olive Green' },
  ],
  COOL: [
    { id: 'navy', label: 'Navy Blue', color: '#000080', prompt: 'Navy Blue' },
    { id: 'slate', label: 'Slate Blue', color: '#6A5ACD', prompt: 'Slate Blue' },
    { id: 'teal', label: 'Teal', color: '#008080', prompt: 'Teal' },
    { id: 'sage', label: 'Sage', color: '#9DC183', prompt: 'Sage Green' },
    { id: 'mint', label: 'Mint', color: '#98FF98', prompt: 'Mint Green' },
  ],
  BOLD: [
    { id: 'red_brick', label: 'Brick Red', color: '#CB4154', prompt: 'Brick Red' },
    { id: 'mustard', label: 'Mustard', color: '#FFDB58', prompt: 'Mustard Yellow' },
    { id: 'coral', label: 'Coral', color: '#FF7F50', prompt: 'Coral' },
    { id: 'forest', label: 'Forest', color: '#228B22', prompt: 'Forest Green' },
    { id: 'indigo', label: 'Indigo', color: '#4B0082', prompt: 'Indigo' },
  ]
};

// --- NEW CONSTANTS FOR PLAN 2.5D TOOL (T067) ---
export const PLAN_STYLES = [
  { id: 'plan_real', label: 'Chân thực (Realistic)', prompt: 'Photorealistic 3D floor plan rendering, ambient occlusion, realistic textures, soft lighting, top-down isometric view' },
  { id: 'plan_watercolor', label: 'Màu nước (Watercolor)', prompt: 'Artistic watercolor architectural illustration, soft edges, pastel color palette, hand-painted style' },
  { id: 'plan_ink', label: 'Bút kim (Ink Pen)', prompt: 'Technical ink pen sketch, black and white, hatching details, clean lines, architectural sketching style' },
  { id: 'plan_blueprint', label: 'Bản vẽ kỹ thuật (Blueprint)', prompt: 'Classic architectural blueprint, white lines on blue background, technical annotations style' },
  { id: 'plan_pencil', label: 'Phác thảo chì (Pencil)', prompt: 'Soft graphite pencil sketch, artistic shading, hand-drawn sketch style' },
  { id: 'plan_marker', label: 'Bút Marker (Marker)', prompt: 'Alcohol marker rendering style, vibrant colors, sharp strokes, architectural presentation' },
];

export const PLAN_FLOORS = [
  { id: 'floor_wood', label: 'Sàn gỗ (Wood)', prompt: 'light oak wood flooring' },
  { id: 'floor_tile', label: 'Gạch (Tile)', prompt: 'large format ceramic tiles' },
  { id: 'floor_concrete', label: 'Bê tông (Concrete)', prompt: 'polished concrete flooring' },
  { id: 'floor_carpet', label: 'Thảm (Carpet)', prompt: 'soft beige carpet' },
];

export const PLAN_WALLS = [
  { id: 'wall_low', label: 'Tường thấp (Low Walls)', prompt: 'low-cut walls, 1 meter height, revealing interior' },
  { id: 'wall_full', label: 'Tường cao (Full Height)', prompt: 'full height walls, cutaway section view' },
  { id: 'wall_black', label: 'Nét cắt đen (Black Poché)', prompt: 'solid black wall section cut' },
];

export const PLAN_FURNITURE = [
  { id: 'furn_sparse', label: 'Ít đồ (Minimal)', prompt: 'minimal furniture, spacious layout, decluttered' },
  { id: 'furn_standard', label: 'Tiêu chuẩn (Standard)', prompt: 'standard furniture layout, functional arrangement' },
  { id: 'furn_lived', label: 'Sống động (Lived-in)', prompt: 'highly detailed furniture, lived-in clutter, books, plants, decor items' },
];

// --- NEW CONSTANTS FOR FACADE TOOL (T002) ---
export const FACADE_TYPES = [
  { id: 'type_villa', label: 'Biệt thự (Villa)', prompt: 'Modern luxury villa, private residence' },
  { id: 'type_townhouse', label: 'Nhà phố (Townhouse)', prompt: 'Urban townhouse, narrow facade, vertical orientation' },
  { id: 'type_office', label: 'Văn phòng (Office)', prompt: 'Commercial office building, corporate look' },
  { id: 'type_shop', label: 'Shophouse', prompt: 'Retail shophouse, ground floor shopfront, upper residential' },
  { id: 'type_apt', label: 'Chung cư (Apartment)', prompt: 'High-rise residential apartment tower, balconies' },
];

export const FACADE_STYLES = [
  { id: 'st_modern', label: 'Hiện đại (Modern)', prompt: 'Modern architecture, clean lines, boxy forms, flat roof' },
  { id: 'st_indochine', label: 'Indochine', prompt: 'Indochine style, french colonial details, wooden shutters, tile roof' },
  { id: 'st_neoclassic', label: 'Tân cổ điển (Neoclassical)', prompt: 'Neoclassical architecture, columns, moldings, symmetry, grand entrance' },
  { id: 'st_minimal', label: 'Tối giản (Minimalist)', prompt: 'Minimalist architecture, white volumes, absence of ornament, pure form' },
  { id: 'st_green', label: 'Kiến trúc Xanh (Eco)', prompt: 'Eco-green architecture, vertical gardens, hanging plants, sustainable design' },
  { id: 'st_brutalist', label: 'Thô mộc (Brutalist)', prompt: 'Brutalist style, raw concrete, heavy massing, geometric shapes' },
  { id: 'st_parametric', label: 'Parametric (Zaha)', prompt: 'Parametric architecture, fluid curves, organic forms, futuristic facade' },
];

export const FACADE_MATERIALS = [
  { id: 'mat_concrete_wood', label: 'Bê tông + Gỗ', prompt: 'combination of raw concrete and warm natural wood slats' },
  { id: 'mat_white_glass', label: 'Trắng + Kính', prompt: 'pristine white stucco mixed with floor-to-ceiling glass windows' },
  { id: 'mat_brick_steel', label: 'Gạch + Thép', prompt: 'exposed red brick paired with black steel frames' },
  { id: 'mat_stone_glass', label: 'Đá + Kính', prompt: 'natural stone cladding and reflective glass curtain wall' },
];

export const FACADE_OPENINGS = [
  { id: 'open_high', label: 'Kính lớn (High Glass)', prompt: 'high transparency, large glass curtain walls, open facade' },
  { id: 'open_med', label: 'Trung bình (Balanced)', prompt: 'balanced solid and void ratio, punched windows' },
  { id: 'open_low', label: 'Kín đáo (Private)', prompt: 'mostly solid walls, narrow windows, privacy screens, brise-soleil' },
];

// --- NEW CONSTANTS FOR RESORT TOOL (T011) ---
export const RESORT_STYLES = [
  { id: 'resort_bali', label: 'Bali Tropical', prompt: 'Balinese tropical resort, thatched roofs, open pavilions, infinity pools, lush jungle' },
  { id: 'resort_med', label: 'Địa Trung Hải', prompt: 'Mediterranean coastal resort, white plaster walls, terracotta tiles, arches, blue ocean view' },
  { id: 'resort_zen', label: 'Zen/Japanese', prompt: 'Japanese Zen wellness retreat, minimalism, wood and stone, tranquil gardens, onsen baths' },
  { id: 'resort_modern', label: 'Modern Luxury', prompt: 'Ultra-modern luxury resort, sleek concrete and glass, floating structures, LED lighting' },
  { id: 'resort_eco', label: 'Eco-Lodge', prompt: 'Sustainable Eco-lodge, bamboo architecture, integrated into nature, treehouses, green roofs' },
  { id: 'resort_maldives', label: 'Maldives Water Villa', prompt: 'Overwater bungalows, crystal clear turquoise water, wooden decks, private plunge pools' },
];

export const RESORT_ENVIRONMENTS = [
  { id: 'env_beach', label: 'Bãi biển (Beachfront)', prompt: 'pristine white sand beach, turquoise ocean, coconut palms' },
  { id: 'env_jungle', label: 'Rừng nhiệt đới (Jungle)', prompt: 'dense tropical rainforest, waterfall, misty mountains' },
  { id: 'env_cliff', label: 'Vách đá (Cliffside)', prompt: 'dramatic cliff edge overlooking the sea, panoramic views' },
  { id: 'env_desert', label: 'Sa mạc (Desert Oasis)', prompt: 'desert oasis, sand dunes, palm grove, warm sunset' },
  { id: 'env_mountain', label: 'Núi cao (Mountain)', prompt: 'snowy mountain peaks, alpine forest, cozy atmosphere' },
];

export const RESORT_FOCAL_POINTS = [
  { id: 'focal_pool', label: 'Hồ bơi vô cực (Infinity Pool)', prompt: 'large infinity edge swimming pool merging with horizon' },
  { id: 'focal_fire', label: 'Lửa trại chìm (Sunken Fire Pit)', prompt: 'sunken lounge area with a modern cozy fire pit' },
  { id: 'focal_bar', label: 'Quầy Bar (Pool Bar)', prompt: 'luxury swim-up pool bar with underwater stools' },
  { id: 'focal_tub', label: 'Bồn tắm (Outdoor Tub)', prompt: 'freestanding stone bathtub in a private tropical garden' },
  { id: 'focal_deck', label: 'Sàn ngắm cảnh (Viewing Deck)', prompt: 'cantilevered wooden observation deck overlooking the view' }
];

export const RESORT_VIEWS = [
  { id: 'view_eye', label: 'Ngang mắt (Eye Level)', prompt: 'eye-level perspective' },
  { id: 'view_drone', label: 'Trên cao (Drone/Aerial)', prompt: 'high-angle drone shot capturing the layout' },
  { id: 'view_water', label: 'Từ mặt nước (Water Level)', prompt: 'low-angle shot from the water surface' },
  { id: 'view_int', label: 'Từ trong ra (Inside-Out)', prompt: 'view from inside the bedroom looking out to the landscape' }
];

export const RESORT_TIMES = [
  { id: 'time_golden', label: 'Giờ vàng (Golden Hour)', prompt: 'golden hour lighting, warm sun, long shadows, romantic atmosphere' },
  { id: 'time_blue', label: 'Giờ xanh (Blue Hour)', prompt: 'twilight blue hour, interior lights glowing, magical mood' },
  { id: 'time_noon', label: 'Trưa nắng (Sunny Noon)', prompt: 'bright sunny midday, high contrast, vibrant colors' },
  { id: 'time_night', label: 'Đêm trăng (Starry Night)', prompt: 'night scene, starry sky, ambient pool lighting, cozy' },
];

// --- NEW CONSTANTS FOR LUXURY INTERIOR TOOL (T003) ---
export const LUXURY_STYLES = [
  { id: 'lux_neoclassic', label: 'Tân cổ điển (Neo-Classic)', prompt: 'Neoclassical luxury style, crown molding, crystal chandeliers, velvet furniture, symmetry' },
  { id: 'lux_italian', label: 'Ý hiện đại (Italian Modern)', prompt: 'Italian modern luxury, sleek low-profile furniture, leather, marble floors, sophisticated' },
  { id: 'lux_artdeco', label: 'Art Deco', prompt: 'Art Deco glamour, geometric patterns, gold brass accents, bold colors, velvet textures' },
  { id: 'lux_wabisabi', label: 'Wabi-Sabi Luxury', prompt: 'High-end Wabi-Sabi, raw textures, plaster walls, natural wood, stone, earthy tones, minimalist luxury' },
  { id: 'lux_penthouse', label: 'Penthouse Modern', prompt: 'Urban penthouse style, floor-to-ceiling windows, city skyline view, open concept, dark tones' },
];

export const LUXURY_ROOMS = [
  { id: 'room_living', label: 'Phòng khách (Living Room)', prompt: 'Grand living room' },
  { id: 'room_master', label: 'Master Suite', prompt: 'Luxurious master bedroom suite' },
  { id: 'room_kitchen', label: 'Bếp (Gourmet Kitchen)', prompt: 'High-end gourmet kitchen with island' },
  { id: 'room_bath', label: 'Phòng tắm (Spa Bathroom)', prompt: 'Spa-like marble bathroom with freestanding tub' },
  { id: 'room_wine', label: 'Hầm rượu (Wine Cellar)', prompt: 'Climate-controlled luxury wine cellar and tasting room' },
  { id: 'room_cinema', label: 'Rạp phim (Home Cinema)', prompt: 'Private home cinema theater with plush seating' },
  { id: 'room_closet', label: 'Phòng thay đồ (Walk-in)', prompt: 'Boutique-style walk-in closet with island' },
];

export const LUXURY_MATERIALS = [
  { id: 'mat_marble_gold', label: 'Đá Marble + Vàng', prompt: 'Calacatta gold marble, polished brass accents, white palette' },
  { id: 'mat_wood_leather', label: 'Gỗ tối + Da', prompt: 'Dark walnut wood paneling, cognac leather, masculine luxury' },
  { id: 'mat_velvet_brass', label: 'Nhung + Đồng', prompt: 'Rich velvet upholstery, brushed brass fixtures, jewel tones' },
  { id: 'mat_concrete_glass', label: 'Bê tông + Kính', prompt: 'Polished concrete, frameless glass, modern industrial luxury' },
];

export const LUXURY_MOODS = [
  { id: 'mood_moody', label: 'Trầm ấm (Moody)', prompt: 'Moody atmosphere, dramatic shadows, dim lighting, cozy and intimate' },
  { id: 'mood_bright', label: 'Sáng & Thoáng (Bright)', prompt: 'Bright and airy, flooded with natural light, soft shadows, fresh' },
  { id: 'mood_royal', label: 'Hoàng gia (Royal)', prompt: 'Warm royal lighting, golden glow, opulent atmosphere' },
];

export const LUXURY_BRANDS = [
  { id: 'brand_minotti', label: 'Minotti Style (Modern Italian)', prompt: 'Minotti style furniture, sleek lines, low profile, grey and earthy tones' },
  { id: 'brand_poliform', label: 'Poliform Style (Sophisticated)', prompt: 'Poliform style, refined elegance, glass and metal details' },
  { id: 'brand_hermes', label: 'Hermès Style (Leather & Detail)', prompt: 'Hermès Home style, cognac leather, saddle stitching, warm orange accents' },
  { id: 'brand_restoration', label: 'RH Modern (Rustic Luxury)', prompt: 'Restoration Hardware Modern style, reclaimed wood, heavy linen, neutral palette' },
  { id: 'brand_none', label: 'Không cụ thể (Generic Luxury)', prompt: 'high-end bespoke furniture' }
];

export const LUXURY_CEILINGS = [
  { id: 'ceil_double', label: 'Thông tầng (Double Height)', prompt: 'grand double-height ceiling with statement chandelier' },
  { id: 'ceil_coffered', label: 'Trần ô vuông (Coffered)', prompt: 'classic coffered ceiling design with hidden lighting' },
  { id: 'ceil_wood', label: 'Ốp gỗ (Wood Cladding)', prompt: 'warm natural wood slat ceiling' },
  { id: 'ceil_flat', label: 'Phẳng hiện đại (Flat Minimal)', prompt: 'clean flat minimalist ceiling with recessed lights' }
];

// --- UPDATED CONSTANTS FOR DIAGRAM TOOL (T072) ---
export const DIAGRAM_TYPES = [
  { id: 'exploded', label: 'Bóc tách (Exploded Axonometric)', prompt: 'Technical Exploded Axonometric diagram. Vertically separated structural layers (Roof, Slabs, Structure, Ground). Components must float with consistent spacing. Clean parallel lines, no perspective distortion.' },
  { id: 'circulation', label: 'Giao thông (Circulation)', prompt: 'Circulation Analysis diagram. Translucent building volume with bold, continuous arrows indicating movement paths. Distinct colors for pedestrian vs vehicle flow. Logical accessibility routes.' },
  { id: 'zoning', label: 'Phân khu (Program/Zoning)', prompt: '3D Programmatic Zoning diagram. Color-coded solid geometric blocks representing functions. Clear separation of volumes. Isometric view with sharp edges.' },
  { id: 'climate', label: 'Khí hậu (Environmental)', prompt: 'Environmental Analysis diagram. Scientific visualization of Sun path (Solstice/Equinox arcs), Wind flow vectors (CFD style), and Radiation heat map. Technical precision.' },
  { id: 'structure', label: 'Kết cấu (Structural Frame)', prompt: 'Structural Frame Analysis. Highlight load-bearing elements: Columns, Beams, Cores. X-Ray view style. Precise grid alignment.' },
  { id: 'geometry', label: 'Hình học (Geometry Evolution)', prompt: 'Form Generation diagram. Step-by-step massing evolution. boolean operations (Union, Subtract). Pure white clay style with edge outlines.' },
  { id: 'urban', label: 'Quy hoạch (Urban Layout)', prompt: 'Urban Planning diagram. 3D massing model of a city block. Color-coded land use, street hierarchy, green space distribution. Large scale perspective.' },
  { id: 'materiality', label: 'Vật liệu (Materiality Study)', prompt: 'Materiality Analysis diagram. Building skin broken down into specific material callouts. Close-up technical view of assembly.' },
];

export const DIAGRAM_VIEWS = [
  { id: 'iso_se', label: 'Isometric (South-East)', prompt: 'Isometric projection from South-East. Parallel lines, true scale.' },
  { id: 'iso_sw', label: 'Isometric (South-West)', prompt: 'Isometric projection from South-West. Parallel lines, true scale.' },
  { id: 'top', label: 'Mặt bằng (Top Down)', prompt: 'Orthographic Top-down plan view. Flat 2D, map style.' },
  { id: 'front', label: 'Mặt đứng (Front Elevation)', prompt: 'Orthographic Front elevation. Flat 2D, technical drawing.' },
  { id: 'persp', label: 'Phối cảnh (Perspective)', prompt: '3-Point Perspective view from street level. Dramatic scale.' },
];

export const DIAGRAM_ANNOTATIONS = [
  { id: 'style_cad', label: 'Kỹ thuật (CAD/Blueprint)', prompt: 'CAD drawing style. Thin black vector lines on white background. Technical dimension lines, dashed hidden lines. Blueprint aesthetic.' },
  { id: 'style_clean', label: 'Hiện đại (Clean Vector)', prompt: 'Modern Vector illustration. Flat colors, no gradients. Thick outline weights. Minimalist typography. Diagrammatic clarity.' },
  { id: 'style_sketch', label: 'Phác thảo (Architect Sketch)', prompt: 'Architectural Hand-sketch. loose ink lines, marker coloring. overlapping corners. conceptual look.' },
  { id: 'style_3d', label: '3D Clay (White Model)', prompt: '3D White Clay Render. Ambient Occlusion shadows. Soft lighting. Material-less form focus.' },
];

// --- STAGING TOOLS ---
export const STAGING_ROOM_TYPES = [
  "Phòng khách (Living Room)",
  "Phòng ngủ (Bedroom)",
  "Phòng ăn (Dining Room)",
  "Phòng làm việc (Office)",
  "Phòng trẻ em (Kids Room)",
  "Ban công / Hiên (Balcony/Deck)",
  "Bếp (Kitchen)"
];

export const STAGING_STYLES = [
  "Hiện đại (Modern)",
  "Tối giản (Minimalist)",
  "Scandinavian",
  "Công nghiệp (Industrial)",
  "Sang trọng (Luxury)",
  "Nhiệt đới (Tropical)",
  "Cổ điển (Classic)"
];

// --- MARKETING TOOLS ---
export const LOGO_STYLES = [
  "Minimalist",
  "3D Gradient",
  "Vintage",
  "Mascot",
  "Lettermark",
  "Abstract",
  "Geometric"
];

// --- EDITING TOOLS ---
export const RESTORE_LEVELS = [
  { id: 'low', label: 'Nhẹ (Low)', prompt: 'Minor noise reduction and subtle sharpening' },
  { id: 'medium', label: 'Trung bình (Medium)', prompt: 'Balanced scratch removal and edge enhancement' },
  { id: 'high', label: 'Nặng (High)', prompt: 'Deep texture reconstruction and high-definition facial restoration' }
];

// --- MAIN TOOL LIST ---
export const MOCK_TOOLS: Tool[] = [
  // --- ARCHITECTURE & INTERIOR TOOLS ---
  { id: "T072", name: "Sơ đồ Phân tích (Arch Diagrams)", description: "Tạo sơ đồ phân tích kiến trúc: Bóc tách, Giao thông, Khí hậu với kích thước chính xác & logic.", iconName: "GitMerge", category: "ARCH" },
  { id: "T055", name: "Làm sạch công trường (Clean Site)", description: "Tự động xóa giàn giáo, rác thải, xe cẩu để có hiện trạng sạch.", iconName: "HardHat", category: "ARCH" },
  { id: "T054", name: "Tạo ảnh nhất quán (Consistent Views)", description: "Tạo hàng loạt góc chụp ngoại thất/nội thất từ 1 ảnh gốc.", iconName: "Copy", category: "ARCH" },
  { id: "T069", name: "Phủ xanh Công trình (Eco-Green)", description: "Biến công trình bê tông thành kiến trúc xanh, thêm cây dây leo, vườn treo.", iconName: "Leaf", category: "ARCH" },
  { id: "T070", name: "Ánh sáng Cinematic (Relight)", description: "Tạo ánh sáng kịch tính: Hoàng hôn, Giờ xanh, Đêm trăng cho công trình.", iconName: "SunMedium", category: "ARCH" },
  { id: "T071", name: "Phong cách Japandi (Japandi)", description: "Chuyển đổi nội thất sang phong cách Nhật Bản & Bắc Âu (Gỗ sáng, Tối giản).", iconName: "Coffee", category: "ARCH" },
  { id: "T067", name: "Diễn họa Mặt bằng 2.5D (Plan Viz)", description: "Chuyển đổi mặt bằng CAD/2D thành phối cảnh 2.5D (Realistic, Màu nước, Bút kim).", iconName: "Map", category: "ARCH" },
  { id: "T068", name: "Thay đổi màu sơn (Paint Changer)", description: "Đổi màu sơn, vật liệu theo vùng chọn (Tường, Mái, Nội thất) với bảng màu đa dạng.", iconName: "PaintRoller", category: "ARCH" },
  { id: "T064", name: "Đổi vật liệu bề mặt (Material Swap)", description: "Thay đổi vật liệu nội thất (Gỗ, Đá, Vải, Veneer) giữ nguyên ánh sáng.", iconName: "PaintBucket", category: "ARCH" },
  { id: "T065", name: "Render Ảnh thực từ 3D (Raw to Real)", description: "Biến ảnh chụp màn hình 3D (Sketchup/Revit) thành ảnh thực tế với Camera Control.", iconName: "Camera", category: "ARCH" },
  { id: "T060", name: "Nội thất ảo (Virtual Staging)", description: "Điền đầy nội thất vào ảnh phòng trống (Real Estate).", iconName: "Armchair", category: "ARCH" },
  { id: "T061", name: "Bảng Vật liệu (Material Board)", description: "Tạo ảnh Flat-lay các mẫu vật liệu, vải, gỗ nghệ thuật.", iconName: "Layers", category: "ARCH" },
  { id: "T062", name: "Tạo ảnh 360° Panorama (VR)", description: "Tạo ảnh khổ rộng 2:1 để xem kính thực tế ảo.", iconName: "Glasses", category: "ARCH" },
  { id: "T063", name: "Mặt bằng sang 3D (Plan to Iso)", description: "Dựng khối 3D Isometric cắt lớp từ bản vẽ CAD 2D.", iconName: "BoxSelect", category: "ARCH" },
  { id: "T001", name: "Quy hoạch Đô thị Vĩ mô (Masterplan)", description: "Tạo phối cảnh tổng thể khu đô thị từ bản đồ phân khu màu (Zoning Map).", iconName: "Map", category: "ARCH" },
  { id: "T002", name: "Concept Mặt đứng (Facade)", description: "Tìm ý tưởng mặt tiền dựa trên hình khối cơ bản (Massing Model).", iconName: "Building", category: "ARCH" },
  { id: "T003", name: "Nội thất Luxury (Interior)", description: "Thiết kế nội thất cao cấp với vật liệu và ánh sáng thực tế.", iconName: "Armchair", category: "ARCH" },
  { id: "T004", name: "Diễn họa Cảnh quan (Landscape)", description: "Thêm cây xanh, hồ nước, hardscape vào công trình.", iconName: "Flower2", category: "ARCH" },
  { id: "T005", name: "Phác thảo sang Render (Sketch-to-Real)", description: "Chuyển nét vẽ tay loang lổ thành ảnh render sắc nét.", iconName: "PenTool", category: "ARCH" },
  { id: "T006", name: "Mô phỏng Ánh sáng (Light Study)", description: "Render nghiên cứu bóng đổ theo thời gian thực trong ngày.", iconName: "Sun", category: "ARCH" },
  { id: "T007", name: "Kiến trúc Tham số (Parametric)", description: "Tạo các cấu trúc phức tạp, hữu cơ kiểu Zaha Hadid.", iconName: "Waves", category: "ARCH" },
  { id: "T008", name: "Cải tạo Hiện trạng (Renovation)", description: "Chụp ảnh hiện trạng cũ, AI đề xuất phương án cải tạo mới.", iconName: "RefreshCw", category: "ARCH" },
  { id: "T009", name: "Mặt cắt Phối cảnh (Section 3D)", description: "Tạo mặt cắt 3D diễn giải không gian bên trong.", iconName: "Slice", category: "ARCH" },
  { id: "T010", name: "Render Phong cách Mô hình (Maquette)", description: "Giả lập mô hình xốp trắng, gỗ balsa hoặc mica.", iconName: "Box", category: "ARCH" },
  { id: "T011", name: "Resort & Nghỉ dưỡng", description: "Chuyên biệt cho thiết kế Villa biển, Bungalow rừng.", iconName: "Palmtree", category: "ARCH" },
  { id: "T012", name: "Văn phòng Tương lai", description: "Thiết kế không gian làm việc mở, tech-office.", iconName: "Monitor", category: "ARCH" },
  { id: "T013", name: "Nhà ở Xã hội (Micro Living)", description: "Tối ưu hóa không gian nhỏ hẹp, thông minh.", iconName: "Home", category: "ARCH" },
  { id: "T014", name: "Kiến trúc Cổ điển/Indochine", description: "Chuyên sâu các chi tiết phào chỉ, hoài cổ.", iconName: "Landmark", category: "ARCH" },
  { id: "T015", name: "Trình bày Đồ án (Layout)", description: "Dàn trang đồ án tốt nghiệp, bảng thi tuyển kiến trúc chuyên nghiệp.", iconName: "LayoutTemplate", category: "ARCH" },

  // --- PRO PHOTO EDITING TOOLS ---
  { id: "T056", name: "Tạo ảnh thẻ (ID Photo)", description: "Tạo ảnh thẻ căn cước, hộ chiếu chuẩn quốc tế.", iconName: "Contact", category: "PRO_EDIT" },
  { id: "T016", name: "Phục hồi Ảnh cũ/Làm nét", description: "Khôi phục chi tiết ảnh mờ, cũ.", iconName: "ImageUp", category: "PRO_EDIT" },
  { id: "T017", name: "Xóa đối tượng/Người không mong muốn", description: "Loại bỏ người/vật thừa.", iconName: "Eraser", category: "PRO_EDIT" },
  { id: "T018", name: "Thay đổi nền trời", description: "Điều chỉnh bầu trời tự động.", iconName: "CloudSun", category: "PRO_EDIT" },
  { id: "T019", name: "Chỉnh màu AI", description: "Cân bằng màu sắc chuyên nghiệp.", iconName: "Palette", category: "PRO_EDIT" },
  { id: "T020", name: "Tách nền (Remove BG)", description: "Tách chủ thể trong 1 giây.", iconName: "Scissors", category: "PRO_EDIT" },
  { id: "T021", name: "Làm mịn da", description: "Retouch chân dung tự động.", iconName: "UserCheck", category: "PRO_EDIT" },
  { id: "T022", name: "Tăng độ phân giải", description: "Upscale lên 4K/8K.", iconName: "MonitorUp", category: "PRO_EDIT" },
  { id: "T023", name: "Chuyển ảnh thành tranh", description: "Biến ảnh chụp thành nghệ thuật.", iconName: "Brush", category: "PRO_EDIT" },
  { id: "T024", name: "Relight (Đánh sáng lại)", description: "Thay đổi nguồn sáng 3D.", iconName: "SunMedium", category: "PRO_EDIT" },
  { id: "T025", name: "Colorize (Tô màu)", description: "Tô màu cho ảnh đen trắng.", iconName: "Pipette", category: "PRO_EDIT" },
  { id: "T026", name: "Biến đổi khuôn mặt", description: "Thay đổi biểu cảm, tuổi tác.", iconName: "Smile", category: "PRO_EDIT" },
  { id: "T027", name: "Xóa mụn/Vết thâm", description: "Làm đẹp da chi tiết.", iconName: "Sparkles", category: "PRO_EDIT" },
  { id: "T028", name: "Khử nhiễu (Denoise)", description: "Giảm noise cho ảnh thiếu sáng.", iconName: "Waves", category: "PRO_EDIT" },
  { id: "T029", name: "Smart Crop", description: "Cắt ảnh theo bố cục vàng.", iconName: "Crop", category: "PRO_EDIT" },
  { id: "T030", name: "Mở rộng Khung ảnh (Outpainting)", description: "Vẽ thêm chi tiết viền ảnh.", iconName: "Expand", category: "PRO_EDIT" },

  // --- CREATIVE & MARKETING TOOLS ---
  { id: "T066", name: "Tạo ảnh Kinh dị (Horror Maker)", description: "Tạo bối cảnh phim kinh dị, nhà ma ám, nhân vật rùng rợn cho poster phim.", iconName: "Skull", category: "CREATIVE_MKT" },
  { id: "T051", name: "AI Fashion Lookbook (Face Swap)", description: "Ghép gương mặt bạn vào ảnh mẫu/trang phục bất kỳ.", iconName: "UserCog", category: "CREATIVE_MKT" },
  { id: "T031", name: "Thiết kế Logo AI", description: "Tạo logo thương hiệu độc bản vector.", iconName: "Hexagon", category: "CREATIVE_MKT" },
  { id: "T032", name: "Poster Quảng cáo", description: "Tạo poster sự kiện, marketing ấn tượng.", iconName: "Layout", category: "CREATIVE_MKT" },
  { id: "T033", name: "Banner Mạng xã hội", description: "Cover Facebook, YouTube, LinkedIn.", iconName: "Share2", category: "CREATIVE_MKT" },
  { id: "T034", name: "Mascot Thương hiệu", description: "Thiết kế nhân vật đại diện 3D/2D.", iconName: "Ghost", category: "CREATIVE_MKT" },
  { id: "T035", name: "Thiết kế Bao bì", description: "Mockup hộp, chai, túi sản phẩm.", iconName: "Package", category: "CREATIVE_MKT" },
  { id: "T036", name: "Mockup Sản phẩm", description: "Đặt sản phẩm vào bối cảnh studio.", iconName: "Smartphone", category: "CREATIVE_MKT" },
  { id: "T037", name: "Typography Nghệ thuật", description: "Tạo chữ cách điệu, hiệu ứng text 3D.", iconName: "Type", category: "CREATIVE_MKT" },
  { id: "T038", name: "Tạo Sticker/Emoji", description: "Bộ sticker độc quyền cho chat app.", iconName: "Sticker", category: "CREATIVE_MKT" },
  { id: "T039", name: "Minh họa Vector", description: "Tạo hình flat design, vector art.", iconName: "PenTool", category: "CREATIVE_MKT" },
  { id: "T040", name: "Concept Art Game", description: "Thiết kế nhân vật, môi trường game.", iconName: "Gamepad2", category: "CREATIVE_MKT" },
  { id: "T041", name: "Storyboard Phim", description: "Vẽ kịch bản phân cảnh phim/TVC.", iconName: "Film", category: "CREATIVE_MKT" },
  { id: "T042", name: "Bìa Sách/Tạp chí", description: "Thiết kế bìa ấn phẩm xuất bản.", iconName: "BookOpen", category: "CREATIVE_MKT" },
  { id: "T043", name: "Thiết kế UI/UX App", description: "Gợi ý giao diện màn hình ứng dụng.", iconName: "AppWindow", category: "CREATIVE_MKT" },
  { id: "T044", name: "QR Code Nghệ thuật", description: "QR Code AI đẹp mắt, quét được.", iconName: "QrCode", category: "CREATIVE_MKT" },
  { id: "T045", name: "Thiết kế Thời trang", description: "Phác thảo mẫu quần áo, phụ kiện.", iconName: "Shirt", category: "CREATIVE_MKT" },
  { id: "T046", name: "Vẽ Truyện tranh", description: "Tạo trang truyện Manga/Comic.", iconName: "Book", category: "CREATIVE_MKT" },
  { id: "T047", name: "Hình nền 8K", description: "Wallpaper PC/Mobile độ nét cao.", iconName: "Monitor", category: "CREATIVE_MKT" },
  { id: "T048", name: "NFT Art Generator", description: "Tạo bộ sưu tập nghệ thuật số.", iconName: "Coins", category: "CREATIVE_MKT" },
  { id: "T049", name: "Infographic Maker", description: "Trực quan hóa dữ liệu thông minh.", iconName: "BarChart", category: "CREATIVE_MKT" },
  { id: "T050", name: "Thiết kế Hình xăm", description: "Ý tưởng hình xăm nghệ thuật.", iconName: "Feather", category: "CREATIVE_MKT" },
  { id: "T052", name: "Cava Mix", description: "Phối trộn (Remix) layer hình ảnh và phong cách nghệ thuật.", iconName: "Shuffle", category: "CREATIVE_MKT" },
  { id: "T053", name: "Mood Board AI", description: "Tự động sắp xếp ý tưởng, màu sắc thành bảng Moodboard.", iconName: "LayoutDashboard", category: "CREATIVE_MKT" },
];

export const STYLE_OPTIONS = [
  "Chân thực (Photorealistic)", 
  "Kinh dị (Horror / Thriller)",
  "Kiến trúc: Hiện đại Tối giản", 
  "Kiến trúc: Indochine", 
  "Kiến trúc: Tân cổ điển", 
  "Kiến trúc: Thô mộc (Brutalism)", 
  "Kiến trúc: Nhiệt đới (Tropical)",
  "Kiến trúc: Parametric",
  "Kiến trúc: Japandi", 
  "Kiến trúc: Xanh (Eco-Green)",
  "Render: V-Ray 6", 
  "Render: Corona", 
  "Render: Unreal Engine 5",
  "Render: Lumion Cinematic",
  "Render: Phác thảo (Sketch)",
  "Anime", 
  "Anime: Studio Ghibli",
  "Anime: Makoto Shinkai",
  "Cyberpunk", 
  "Cyberpunk: Blade Runner",
  "Cinematic (Điện ảnh)", 
  "Fantasy (Huyền ảo)",
  "Fantasy: Dark Fantasy",
  "Fantasy: High Fantasy",
  "Sci-Fi: Tương lai",
  "Nghệ thuật: Sơn dầu",
  "Nghệ thuật: Màu nước",
  "Nghệ thuật: Digital Art",
  "Nghệ thuật: Concept Art",
  "3D Character: Disney/Pixar",
  "Retro: Vaporwave",
  "Retro: 80s Synthwave"
];

export const ENV_OPTIONS = [
  "Ban ngày (Daylight)", 
  "Giờ vàng (Golden Hour)", 
  "Giờ xanh (Blue Hour)", 
  "Trời âm u (Overcast)", 
  "Ban đêm (Night City)", 
  "Ánh sáng Studio", 
  "Đèn Neon", 
  "Sương mù/Mưa (Foggy)",
  "U ám / Kinh dị (Haunted)"
];

export const WEATHER_OPTIONS = [
  "None (Mặc định)",
  "Clear Sky (Trời quang)",
  "Light Rain (Mưa nhỏ)",
  "Heavy Rain (Mưa lớn)",
  "Drizzle (Mưa phùn)",
  "Snow (Tuyết)",
  "Thunderstorm (Sấm chớp)",
  "Storm (Giông bão)",
  "Overcast (Âm u)",
  "Fog (Sương mù)",
  "Hail (Mưa đá)"
];

export const ARCHITECT_STYLES = [
  "None (Mặc định)",
  "Zaha Hadid (Parametric/Fluid)",
  "Frank Lloyd Wright (Organic/Prairie)",
  "Le Corbusier (Modernism/Concrete)",
  "Mies van der Rohe (Minimalism/Concrete)",
  "Tadao Ando (Concrete/Light)",
  "Norman Foster (High-Tech)",
  "Santiago Calatrava (Biomorphic)",
  "Renzo Piano (Sustainable/Light)",
  "Rem Koolhaas (Deconstructivism)",
  "Bjarke Ingels - BIG (Playful/Green)",
  "Kengo Kuma (Wood/Japanese)",
  "Antoni Gaudí (Catalan Modernism)",
  "Vo Trong Nghia (Green/Bamboo)"
];
