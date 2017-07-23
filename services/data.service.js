class DataService {
    constructor(model) {
        this.model = model;
        model.sync({ force: false });
    }

    getAll() {
        return this.model.findAll();
    }

    create(item) {
        return this.model.create(item);
    }
}

module.exports = DataService;
