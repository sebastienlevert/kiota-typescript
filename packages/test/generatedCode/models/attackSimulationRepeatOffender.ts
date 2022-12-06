import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationRepeatOffender extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The user in an attack simulation and training campaign. */
    attackSimulationUser?: AttackSimulationUser;
    /** The OdataType property */
    odataType?: string;
    /** Number of repeat offences of the user in attack simulation and training campaigns. */
    repeatOffenceCount?: number;
}
