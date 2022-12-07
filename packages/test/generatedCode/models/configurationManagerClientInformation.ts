import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerClientInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Configuration Manager Client Id from SCCM */
    clientIdentifier?: string;
    /** Configuration Manager Client version from SCCM */
    clientVersion?: string;
    /** Configuration Manager Client blocked status from SCCM */
    isBlocked?: boolean;
}
