import {SimulationReportOverview, UserSimulationDetails} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationReport extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Overview of an attack simulation and training campaign. */
    overview?: SimulationReportOverview;
    /** The tenant users and their online actions in an attack simulation and training campaign. */
    simulationUsers?: UserSimulationDetails[];
}
