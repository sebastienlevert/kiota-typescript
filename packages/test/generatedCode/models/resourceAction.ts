import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Allowed Actions */
    allowedResourceActions?: string[];
    /** Not Allowed Actions. */
    notAllowedResourceActions?: string[];
    /** The OdataType property */
    odataType?: string;
}
