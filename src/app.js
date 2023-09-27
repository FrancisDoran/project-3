import officialCard from './officialCardComponent.js';
const app = Vue.createApp({
    data() {
        return {
            allData: [],
            officials: [],
            offices: [],
            selectedOfficial: "All",
            selectedOffice: "All",
            selectedView: 'null',
            clients: [],
            selectedClient: "All",
            landing: true,
            currentOfficial: null,
            officialsList: [ /*These are the currently in office officials and therfore are displayed on the landing page */
                { official_name: 'Sheng Thao', office_name: 'Mayor', image: 'https://city-of-oakland.imgix.net/portraits/Mayor-Thao-Headshot.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Rebecca Kaplan', office_name: 'Council Member, At-Large', image: 'https://city-of-oakland.imgix.net/portraits/Rebecca-Kaplan.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.3475&h=400&q=80&w=400' },
                { official_name: 'Dan Kalb', office_name: 'Council Member, District 1', image: 'https://city-of-oakland.imgix.net/portraits/DanKalb_photo.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Nikki Fortunato Bas', office_name: 'Council Member, District 2', image: 'https://city-of-oakland.imgix.net/portraits/Nikki-3.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Carroll Fife', office_name: 'Council Member, District 3', image: 'https://city-of-oakland.imgix.net/portraits/Carroll-Square-1080.png?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Janani Ramachandran', office_name: 'Council Member, District 4', image: 'https://city-of-oakland.imgix.net/portraits/2021-02-05Janani-6Edit-1.jpeg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Noel Gallo', office_name: 'Council Member, District 5', image: 'https://city-of-oakland.imgix.net/portraits/noel_gallo.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Kevin Jenkins', office_name: 'Council Member, District 6', image: 'https://city-of-oakland.imgix.net/portraits/IMG_1373_2023-01-07-055343_bnnl.PNG?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Treva Reid', office_name: 'Council Member, District 7', image: 'https://city-of-oakland.imgix.net/portraits/treva-reid_portrait_mobile.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Barbara J. Parker', office_name: 'City Attorney', image: 'https://city-of-oakland.imgix.net/portraits/Barbara_Parker_webpage.png?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=391&q=80&w=391' },
                { official_name: 'Asha Reed', office_name: 'City Clerk', image: 'https://city-of-oakland.imgix.net/portraits/Asha-the-Clerk2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&q=80&w=500' },
                { official_name: 'Courtney Ruby', office_name: 'City Auditor', image: 'https://city-of-oakland.imgix.net/portraits/Courtney-Standing-edited-682x1024_200514_053403.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.509&fp-y=0.4638&h=442&q=80&w=442' },
            ],
        };
    },
    mounted() {
        d3.json("http://127.0.0.1:5000/api/data").then(data => {
            this.allData = data;
            this.officials = [...new Set(data.map(item => item.official_name))];
            this.offices = [...new Set(data.map(item => item.office_name))];
            this.clients = [...new Set(data.map(item => item.Client))].sort();
            //this.updateVisualization();
        });
    },
    methods: {
        officialChanged() {
            if (this.selectedOfficial && this.selectedOfficial !== "All") {
                this.offices = [...new Set(this.allData.filter(d => d.official_name === this.selectedOfficial).map(item => item.office_name))];
            } else {
                this.offices = [...new Set(this.allData.map(item => item.office_name))];
            }
            this.updateVisualization();
        },
        officeChanged() {
            if (this.selectedOffice && this.selectedOffice !== "All") {
                this.officials = [...new Set(this.allData.filter(d => d.office_name === this.selectedOffice).map(item => item.official_name))];
            } else {
                this.officials = [...new Set(this.allData.map(item => item.official_name))];
            }
            this.updateVisualization();
        },
        clientChanged() {
            if (this.selectedClient && this.selectedClient !== "All") {
                this.officials = [...new Set(this.allData.filter(d => d.Client === this.selectedClient).map(item => item.official_name))];
                this.offices = [...new Set(this.allData.filter(d => d.Client === this.selectedClient).map(item => item.office_name))];
            } else {
                this.officials = [...new Set(this.allData.map(item => item.official_name))];
                this.offices = [...new Set(this.allData.map(item => item.office_name))];
            }
            this.updateVisualization();
        },
        getFilteredData() {
            let filteredData = this.allData;
        
            // Apply filters
            if (this.selectedOfficial && this.selectedOfficial !== "All") {
                filteredData = filteredData.filter(d => d.official_name === this.selectedOfficial);
            }
        
            if (this.selectedOffice && this.selectedOffice !== "All") {
                filteredData = filteredData.filter(d => d.office_name === this.selectedOffice);
            }
            if (this.selectedClient && this.selectedClient !== "All") {
                filteredData = filteredData.filter(d => d.Client === this.selectedClient);
            }
            return filteredData;
        },        
        handleOfficialSelected(officialName) {
            this.landing = false; // This will hide the other official cards
            this.currentOfficial = this.officialsList.find(official => official.official_name === officialName);
            this.selectedOfficial = officialName;
        },
        
        
        generatePieChart() {
            let filteredData = this.getFilteredData();

            let positions = [...new Set(filteredData.map(item => item.Position))];
            let values = positions.map(pos => filteredData.filter(item => item.Position === pos).length);
        
            let data = [{
                values: values,
                labels: positions,
                type: 'pie'
            }];
        
            Plotly.newPlot('visualization', data);
        },
        generateBarChart() {
            let filteredData = this.getFilteredData();
            let clients = [...new Set(filteredData.map(item => item.Client))];
            let values = clients.map(client => filteredData.filter(item => item.Client === client).length);
        
            let sortedIndices = values.map((item, index) => index).sort((a, b) => values[b] - values[a]);
            let topN = 10;
            let topClients = sortedIndices.slice(0, topN).map(index => clients[index]);
            let topValues = sortedIndices.slice(0, topN).map(index => values[index]);
        
            let data = [{
                x: topClients,
                y: topValues,
                type: 'bar'
            }];
        
            let layout = {
                title: 'Most Frequent Lobbyists',
                margin: {
                    l: 50,
                    r: 50,
                    b: 100,
                    t: 50
                },
                xaxis: {
                    tickangle: -45,
                    automargin: true
                }
            };
        
            Plotly.newPlot('visualization', data, layout);
        },
        
        generateStackedBarChart() {
            let filteredData = this.getFilteredData();
        
            // Generate data for the stacked bar chart
            let officials = [...new Set(filteredData.map(item => item.official_name))];
            let positions = [...new Set(filteredData.map(item => item.Position))];

            let traces = positions.map(position => {
                return {
                    name: position,
                    type: 'bar',
                    x: officials,
                    y: officials.map(official => {
                        return filteredData.filter(item => item.official_name === official && item.Position === position).length;
                    })
                };
            });

            let layout = {
                title: 'Count of Lobbyist Contacts with Officials and Lobbyist Position',
                barmode: 'stack',
                xaxis: { title: 'Officials' },
                yaxis: { title: 'Count' },
                margin: {
                    l: 50,   // Left margin
                    r: 50,   // Right margin
                    b: 100,  // Bottom margin
                    t: 50    // Top margin
                },
            };

            Plotly.newPlot('visualization', traces, layout);
                    
        },
        updateVisualization() {
            switch (this.selectedView) {
                case 'stackedBar':
                    this.generateStackedBarChart();
                    break;
                case 'donutChart':
                    this.generateDonutChart();
                    break;
                case 'pieChart':
                    this.generatePieChart();
                    break;
                case 'barChart':
                    this.generateBarChart();
                    break;
                default:
                    console.error('Invalid selectedView:', this.selectedView);
            }
        },        
        goBackToLanding() {
            this.landing = true;
            this.selectedOfficial = "All";
            this.selectedOffice = "All";
            this.updateVisualization();
        },
        generateDonutChart() {
            let filteredData = this.getFilteredData();
    
            let subjects = [...new Set(filteredData.map(item => item.Subject))];
            
            let subjectCounts = subjects.map(subject => {
                return filteredData.filter(item => item.Subject === subject).length;
            });
    
            let traces = [{
                values: subjectCounts,
                labels: subjects,
                type: 'pie',
                hole: .4 
            }];
    
            let layout = {
                title: 'Subjects Breakdown',
            };
    
            Plotly.newPlot('visualization', traces, layout);
        },
    },
    watch: {
        selectedView: function() {
            this.updateVisualization();
        }
    },
});
app.component('official-card', officialCard);
app.mount("#app");