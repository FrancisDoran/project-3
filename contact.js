let allData = [];

// Fetch data and populate dropdowns initially
d3.json("http://127.0.0.1:5000/api/data").then(data => {
    allData = data;
    populateDropdowns(data);
    updateVisualization(allData);  // Display the initial unfiltered data
});

function populateDropdowns(data) {
    const officials = [...new Set(allData.map(item => item.official_name))];
    const offices = [...new Set(allData.map(item => item.office_name))];

    populateDropdown("#officialDropdown", officials, "Select an Official");
    populateDropdown("#officeDropdown", offices, "Select an Office");
}

function populateDropdown(selector, values, defaultText, retainSelected = true) {
    const dropdown = d3.select(selector);
    const currentSelection = dropdown.property("value");
    dropdown.html("");  // Clear existing options
    
    if (defaultText) {
        dropdown.append("option").text(defaultText).attr("value", "");
    }
    
    dropdown.selectAll("option.data")
        .data(values)
        .enter()
        .append("option")
        .attr("class", "data")
        .text(d => d);

    // If we want to retain a selection and it's still a relevant option, restore it
    if (retainSelected && values.includes(currentSelection)) {
        dropdown.property("value", currentSelection);
    }
}

function updateVisualization(data, selectedOfficial, selectedOffice) {
    let filteredData = data;

    // Apply filters
    if (selectedOfficial && selectedOfficial !== "Select an Official") {
        filteredData = filteredData.filter(d => d.official_name === selectedOfficial);
    }

    if (selectedOffice && selectedOffice !== "Select an Office") {
        filteredData = filteredData.filter(d => d.office_name === selectedOffice);
    }

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
        title: 'Lobbying Positions per Official',
        barmode: 'stack',
        xaxis: { title: 'Officials' },
        yaxis: { title: 'Count' }
    };

    Plotly.newPlot('visualization', traces, layout);
}


d3.select("#officialDropdown").on("change", function() {
    const selectedOfficial = d3.select("#officialDropdown").property("value");
    
    if (selectedOfficial && selectedOfficial !== "Select an Official") {
        const relevantOffices = [...new Set(allData.filter(d => d.official_name === selectedOfficial).map(item => item.office_name))];
        populateDropdown("#officeDropdown", relevantOffices, "Select an Office");
    } else {
        populateDropdowns(allData);
    }

    const selectedOffice = d3.select("#officeDropdown").property("value");
    updateVisualization(allData, selectedOfficial, selectedOffice);
});

d3.select("#officeDropdown").on("change", function() {
    const selectedOffice = d3.select("#officeDropdown").property("value");

    if (selectedOffice && selectedOffice !== "Select an Office") {
        const relevantOfficials = [...new Set(allData.filter(d => d.office_name === selectedOffice).map(item => item.official_name))];
        populateDropdown("#officialDropdown", relevantOfficials, "Select an Official");
    } else {
        populateDropdowns(allData);
    }

    const selectedOfficial = d3.select("#officialDropdown").property("value");
    updateVisualization(allData, selectedOfficial, selectedOffice);
});
