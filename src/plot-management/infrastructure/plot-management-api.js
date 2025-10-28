import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const plotsEndpointPath = import.meta.env.VITE_PLOTS_ENDPOINT_PATH;
const inspectionsEndpointPath = import.meta.env.VITE_INSPECTIONS_ENDPOINT_PATH;

export class PublishingApi extends BaseApi {
    #plotsEndpoint;
    #inspectionsEndpoint;

    constructor() {
        super();
        this.#plotsEndpoint = new BaseEndpoint(this, plotsEndpointPath);
        this.#inspectionsEndpoint = new BaseEndpoint(this, inspectionsEndpointPath);
    }

    getPlots() {
        return this.#plotsEndpoint.getAll();
    }

    getPlotById(id) {
        return this.#plotsEndpoint.getById(id);
    }

    createPlot(resource) {
        return this.#plotsEndpoint.create(resource);
    }

    updatePlot(resource) {
        return this.#plotsEndpoint.update(resource.id, resource);
    }

    deletePlot(id) {
        return this.#plotsEndpoint.delete(id);
    }

    getInspections() {
        return this.#inspectionsEndpoint.getAll();
    }

    getInspectionById(id) {
        return this.#inspectionsEndpoint.getById(id);
    }

    createInspection(resource) {
        return this.#inspectionsEndpoint.create(resource);
    }

    updateInspection(resource) {
        return this.#inspectionsEndpoint.update(resource.id, resource);
    }

    deleteInspection(id) {
        return this.#inspectionsEndpoint.delete(id);
    }
}