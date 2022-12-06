import {SimulationEvent} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationEventsContent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Actual percentage of users who fell for the simulated attack in an attack simulation and training campaign. */
    compromisedRate?: number;
    /** List of simulation events in an attack simulation and training campaign. */
    events?: SimulationEvent[];
    /** The OdataType property */
    odataType?: string;
}
