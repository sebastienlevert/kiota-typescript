import {ConfigurationManagerClientState} from './configurationManagerClientState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerClientHealthState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Error code for failed state. */
    errorCode?: number;
    /** Datetime for last sync with configuration manager management point. */
    lastSyncDateTime?: Date;
    /** Configuration manager client state */
    state?: ConfigurationManagerClientState;
}
