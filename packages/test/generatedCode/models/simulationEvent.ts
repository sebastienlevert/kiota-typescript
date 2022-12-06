import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationEvent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Count of the simulation event occurrence in an attack simulation and training campaign. */
    count?: number;
    /** Name of the simulation event in an attack simulation and training campaign. */
    eventName?: string;
    /** The OdataType property */
    odataType?: string;
}
