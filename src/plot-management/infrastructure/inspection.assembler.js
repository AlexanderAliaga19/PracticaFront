import {Inspection} from "../domain/model/inspection.entity.js";


export class InspectionAssembler {
    static toEntityFromResource(resource) {
        return new Inspection({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['inspections'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}