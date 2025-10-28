export class Plot {
    constructor({id = null, name = '',location = '', hectares = 0,  monitoringStartDate = null})
    {
        this.id = id;
        this.name = name;
        this.location = location
        this.hectares = hectares;
        this.monitoringStartDate = monitoringStartDate;
    }
}