import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StoragePlanInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Indicates whether there are higher storage quota plans available. Read-only. */
    upgradeAvailable?: boolean;
}
