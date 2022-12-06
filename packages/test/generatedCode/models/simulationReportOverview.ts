import {RecommendedAction, SimulationEventsContent, TrainingEventsContent} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationReportOverview extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** List of recommended actions for a tenant to improve its security posture based on the attack simulation and training campaign attack type. */
    recommendedActions?: RecommendedAction[];
    /** Number of valid users in the attack simulation and training campaign. */
    resolvedTargetsCount?: number;
    /** Summary of simulation events in the attack simulation and training campaign. */
    simulationEventsContent?: SimulationEventsContent;
    /** Summary of assigned trainings in the attack simulation and training campaign. */
    trainingEventsContent?: TrainingEventsContent;
}
