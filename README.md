# project-3
## Project Proposal: "Disclosure Hub" - Analyzing Disclosure Forms of Oakland Elected Officials
Data visulizations are just ideas it'll be more informed by what I have once it's in the database, the idea is to show how finacial interests intersect with Oakland elceted officials.
## Introduction:
Transparency is pivotal in preserving the trust between the public and elected officials. "Disclosure Hub" aims to create a seamless platform to visualize and analyze the varying disclosures made by Oakland's elected officials. By collating forms like 460s, 803s, 802s, 700 and lobbyist activity reports, the project intends to offer a comprehensive perspective on these officials' disclosed interactions, finances, and potential influences.

## Objective:
To provide users with an intuitive interface where they can delve into the diverse disclosures of Oakland elected officials, discern patterns, and gain insight into potential areas of interest or concern.

## Dataset:

Integrate data for forms 460s, 803s, 802s, 700s and lobbyist activity reports specific to Oakland elected officials. Bellow each form is listed and where it is availiable from.

- **Form 700** (Statements of Economic Interests) - Search for SEI Statements (netfile.com) and Swagger UI (netfile.com)
- **Form 803** (behested payments) - Charitable Contributions at the Request of an Elected Official - Behested Payment Reports (FPPC Form 803) | Open Data Portal (oaklandca.gov)
- **Form 802** (ticket distribution) - Ticket Distribution Disclosure - FPPC Form 802 ~ City of Oakland, California (oaklandnet.com)
- **Form 410** (committee statment of organization) - Candidate Contributions (Show Me the Money) | Open Data Portal (oaklandca.gov)
- **Form 460** (campaign finance) - Candidate Contributions (Show Me the Money) | Open Data Portal (oaklandca.gov)
- **Lobbyist Activity Reports** (contact with lobbyists) - Lobbyist Reports Filed (oaklandca.gov)

### User Interaction and Interface:

An interactive dashboard with dropdown menus and search bars, allowing users to select specific elected officials or form types.
### Data Visualizations:

#### Form 460s - Campaign Finances:

- **Top Contributors**: A bar chart displaying the top contributors (by total amount) to specific officials or overall for a selected time frame.
- **Office-wise Campaign Finances**: Pie charts showing the total contributions received by candidates for each office (like Mayor, City Council District 6) for the chosen election year.
- **Contribution Over Time**: A line chart displaying the pattern of campaign contributions over time.
- **Retrieval**: Socrata Open Data API
- **Note**: While this fits with this project it is largely redundant as a very similar project "Show Me the Money" already exists. There are easily more than 100 records.
#### Form 803s - Behested Payments:

- **Payments Distribution**: A pie chart showcasing the distribution of behested payments among various officials.
- **Top Payors**: A bar chart highlighting the most frequent or highest-value payors.
- **Purpose Breakdown**: A treemap visualization detailing the specific purposes for which behested payments were made.
- **Retrieval**: Socrata Open Data API
- **Note**: Given the length of the current Mayor's administration (the mayor is repsonsible for the majority of behested payments) there will not be many records but if I include previous Mayors' administrations there would be more, there have been 187 form 803s filed since 3/1/2017 by all filers.
#### Form 802s - Ticket Distributions:

- **Top Ticket Distributors**: A bar chart delineating officials who distribute the most tickets.
- **Ticket Purpose Distribution**: A pie chart showcasing the primary reasons for ticket distribution.
- **Ticket Source Breakdown**: A column chart detailing the entities/sources of tickets received by the city.
- **Retrival**: Webscraping
- **Note**: Significantly more than 100 records.
#### Form 700s - Economic Interests:

- **Types of Economic Interests**: Pie charts representing the different types of economic interests disclosed (like Trusts, Business Entities, Incomes, etc.).
- **Value Distribution**: A histogram showcasing the distribution of values of these economic interests across different categories.
- **Retrieval**: Netfile API
- **Note**: Form 700s are annual reports, so for just the elected officials there wouldn't be many forms but I still think this is vaulable for the project and depending on how many disclosure the official make there could be 100+ economic interests but this is hardly guaranteed. Also it might be interesting to look at the aggragate data of all form 700s. While form 700s are publicly availiable the majority of filers likely do not expect the level of public scrutiny as an elected official and thus would only be represented in aggragate.
#### Lobbyist Reports:

- **Most Lobbied Officials**: A bar chart representing officials who are frequently lobbied.
- **Client Industry**: Pie or bar chart depending on the number of categories show what industries are most represented among lobbying efforts on elected officials.
- **Frequent Clients**: Bar graph of the most represented clients.
- **Retrieval**: Webscraping
- **Note**: From an intial viewing there are very likely more than 100 contacts logged across all elected officials.
