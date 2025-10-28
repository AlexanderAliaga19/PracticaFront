import {Plot} from "./plot.entity.js";

export class Inspection{
    constructor({id = null, plotID = null, observations = '', recomendedtActions = ''
    , cropStatus = "", inspectionDate = null, plot = null})
    {
        this.id = id;
        this.plotID = plotID;
        this.observations = observations;
        this.recomendedtActions = recomendedtActions;
        this.cropStatus = cropStatus;
        this.inspectionDate = inspectionDate;
        this.plot = plot instanceof Plot ? plot :null;
    }
}