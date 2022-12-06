import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityResource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Name of the resource that is related to current alert. Required. */
    resource?: string;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related. */
    resourceType?: SecurityResourceType;
}
