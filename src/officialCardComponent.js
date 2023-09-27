const officialCard = {
    props: ['official'],
    template: `
    <div @click="viewDetails" class="official-card">
        <img :src="official.image" alt="Official Image">
        <h3>{{ official.official_name }}</h3>
        <p>{{ official.office_name }}</p>
    </div>
`,
    methods: {
        viewDetails() {
            this.$emit('view-details', this.official);
        }
    }
};

export default officialCard;
