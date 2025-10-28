import {Plot} from "../domain/model/plot.entity.js";

export class PlotAssembler {
    static toEntityFromResource(resource) {
        return new Plot({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['plots'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}