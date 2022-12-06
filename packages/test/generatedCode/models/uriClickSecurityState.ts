import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UriClickSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The clickAction property */
    clickAction?: string;
    /** The clickDateTime property */
    clickDateTime?: Date;
    /** The id property */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** The sourceId property */
    sourceId?: string;
    /** The uriDomain property */
    uriDomain?: string;
    /** The verdict property */
    verdict?: string;
}
