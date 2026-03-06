# Website Features Update

## New Features Added

### 1. Wahl-o-Mat Results View
- Added a new view mode selector to switch between "Einzelantworten" (individual answers) and "Parteiübereinstimmung" (party matching)
- The party matching view displays the percentage compatibility between AI models and political parties
- Results are visualized with:
  - Color-coded horizontal bars (green for high match, orange for medium, red for low)
  - Percentage values clearly displayed
  - Sorted by highest to lowest match

### 2. Enhanced Filtering
- All filters (Model, UI, Lauf, Search) now work across both views
- Filtering is consistent and updates both views appropriately
- The question selector is hidden in the party results view (not relevant there)

### 3. Mobile-Friendly Improvements
- Enhanced responsive design with better breakpoints
- Mobile-specific optimizations at 768px and 480px widths
- Stack layout on small screens for party bars
- Reduced padding and font sizes for better mobile readability
- Single-column grid layouts on mobile devices
- Touch-friendly button sizes

### 4. Visual Enhancements
- Color-coded party scores (green/orange/red gradients)
- Improved card layouts for party results
- Better spacing and typography
- Smooth transitions on bar charts
- Professional score badges with gradients

## Data Sources
- `results.csv` - Individual question responses
- `wahl-o-mat-results.csv` - Party matching percentages

## How to Use

### Viewing Party Results
1. Select "Parteiübereinstimmung" from the "Ansicht" dropdown
2. Use filters to narrow down specific models, UIs, or runs
3. View color-coded bars showing compatibility with each party
4. See comparison table at the bottom

### Viewing Individual Responses
1. Select "Einzelantworten" from the "Ansicht" dropdown
2. Choose which questions to display using the question selector
3. Filter by model, UI, or run
4. View detailed response grid

## Mobile Testing
The website has been optimized for:
- Desktop (1400px+)
- Tablet (768px - 1400px)
- Mobile (320px - 768px)

Test on different screen sizes to see responsive adjustments.
