# Website Shooter

A simple web application that helps you quickly categorize websites from a list as either "Good" or "Irrelevant" using keyboard shortcuts. Features a sleek dark mode interface with light mode option. Includes a comparison tool to filter lists of websites against your database.

## Features

- Load up to 50 websites at once
- Navigate through websites with a "Next Site" button
- Dark mode by default with light mode toggle option
- Color-coded tables: light green for good sites and light pastel red for irrelevant sites
- Use keyboard shortcuts for quick actions:
  - `Ctrl + Q`: Open the current website in a new tab
  - `Ctrl + A`: Add the current website to "Good Sites"
  - `Ctrl + S`: Add the current website to "Irrelevant Sites"

  - `Ctrl + F`: Find text on page
  - `Ctrl + R`: Refresh page
  - `Ctrl + C` and `Ctrl + V`: Copy and paste
- View categorized websites in separate tables
- Remove websites from either category if needed
- Copy entire tables to clipboard with a single click
- Clear entire tables with a single click
- Display current London time with a sleek digital clock in the top right corner
- Right-click functionality enabled for context menus
- Combined chronological view of all sites with filtering options
- Compare & Filter tool to check lists against your database:
  - Normalize URLs by removing "http://", "https://", and "www." prefixes
  - Filter out matching sites from your comparison list
  - Copy filtered results to clipboard

## How to Use

### Main Tool

1. Open `index.html` in your web browser
2. Choose between dark mode (default) and light mode using the toggle switch
3. Enter your list of websites in the text area (one URL per line)
4. Click "Load Sites" to begin
5. Use the keyboard shortcuts or buttons to categorize each site
6. The current site will automatically advance to the next one after categorization
7. Manage your tables with the table action buttons:
   - Click "Copy Table" to copy all URLs in a table to your clipboard
   - Click "Delete Table" to clear all entries from a table
8. Use the navigation links at the top to switch between the main tool and the compare tool

### Compare & Filter Tool

1. Click on the "Compare & Filter" navigation link at the top of the page
2. Your existing database of sites (good, irrelevant, and combined) will be loaded automatically
3. Paste your list of sites to compare in the "Sites to Compare" text area (one URL per line)
4. Click "Compare & Filter" to process the list
5. The tool will normalize all URLs (removing "http://", "https://", and "www." prefixes) and filter out any matches
6. View the results in the "Results" section:
   - "Filtered Sites" shows sites that don't match your database
   - "Removed Sites" shows sites that were filtered out
7. Use the "Copy Filtered Results" button to copy only the sites that don't match your database
8. Use the "Copy Removed Sites" button to copy the sites that were filtered out (matches found in database)

## Optimized Workflow

For the fastest site processing:

1. Load your list of websites
2. Click "Next Site & Open" to go to the next site and open it automatically
3. Review the site in the new tab
4. Close the tab when done (returns to the app)
5. Use `Ctrl+A` to categorize as good or `Ctrl+S` to categorize as irrelevant
6. Repeat steps 2-5

## Tips

- URLs without http:// or https:// will automatically have https:// added
- You can click on any URL in the tables to open it in a new tab
- The application runs entirely in your browser - no data is sent to any server
- The app uses custom keyboard shortcuts: Ctrl+Q to open sites, Ctrl+A to add to good sites, and Ctrl+S to add to irrelevant sites
- The app disables some browser control key combinations (Ctrl+P, Ctrl+W, etc.) when you're using the app
- Ctrl+C, Ctrl+V, Ctrl+F, and Ctrl+R are specifically enabled to allow copying, pasting, finding, and refreshing
- Right-click context menu is enabled for easy access to browser functions
- Note: Some browsers may still enforce certain shortcuts like Ctrl+W for security reasons
- These restrictions only apply to the app page itself - when viewing external sites in other tabs, normal browser shortcuts work as expected
- The London time display shows the current time in London, UK
- Your theme preference (dark or light mode) will be saved for your next visit