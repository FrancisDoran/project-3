# Oakland Lobbyist Disclosure Hub

This project aims to provide insights into the lobbying activities in Oakland. Users can explore interactive visualizations to delve into the frequency of lobbyist interactions with officials, the primary subjects of interest, and the major players in the lobbying landscape.

## Getting Started

1. **Clone** the repository to your local machine.
2. **Navigate** to the project's root directory.
3. Run `app.py` from the `api` directory to start the Flask server: 
   ```bash
   cd api
   python app.py
   ```
4. Use a local server or VSCode's Live Server extension to run the `lobbyist_disclosure_hub.html` for frontend visualization.

## File Descriptions

- **`app.js`**: Main JavaScript logic for visualizations and interactions.
- **`app.py`**: Flask API to interact with the backend and serve data.
- **`cleaning.ipynb`**: Jupyter notebook for data cleaning and database creation.
- **`contact_df.csv`**: Raw data collected from web scraping.
- **`form700etl.ipynb`**: Work-in-progress for parsing Form 700 data using the Netfile API.
- **`lobbyist_disclosure_hub.html`**: Frontend UI for the project.
- **`lobbyist.db`**: Database storing the processed data.
- **`lobbyist_reports.ipynb`**: Jupyter notebook dedicated to the web scraping process.
- **`officialCardComponent.js`**: Vue component to display official cards.

## Future Plans
- **Date Filtering:** Soon, you'll be able to filter visualizations based on specific dates and view officials relevant to that time period.
- **Visualization Logic Improvements:** We're looking to enhance the visualization update mechanism for a smoother user experience.
### Complete Disclosure Hub
- **Adding Other City Official Forms:** The priority is as ordered bellow.
- **Form 700s - Economic Interests:** I'm currently working on integrating Form 700 statement of economic interest to provide a more comprehensive overview.
- **Form 802s - Ticket Distributions:** Given the fairly recent ticket distribution scandal (https://www.sfchronicle.com/bayarea/article/Oakland-ethics-commission-slams-sports-ticket-10990764.php) this is worth keeping an eye on, also the forms are currently hosted on the old Oakland city website.
- **Form 803s - Behested Payments:** There are already some charts on data.oaklandca.gov, they focus on total behested sums per year by official, so I could put more focus on payor and payee.
- **Form 460s - Campaign Finances:** Form 460s are campaign finace expenditure and contribution reports, while this fits with this project it is largely redundant as a very similar project "Show Me the Money" already exists. 
## Notes

If you attempt to run the HTML file directly without a local server setup, you may face CORS issues. Ensure the project is being served via a local server for a seamless experience.

---