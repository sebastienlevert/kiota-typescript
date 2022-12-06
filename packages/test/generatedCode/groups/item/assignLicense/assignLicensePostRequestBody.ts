import {AssignedLicense} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignLicensePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The addLicenses property */
    addLicenses?: AssignedLicense[];
    /** The removeLicenses property */
    removeLicenses?: string[];
}
