import {PrintCertificateSigningRequest} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreatePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The certificateSigningRequest property */
    certificateSigningRequest?: PrintCertificateSigningRequest;
    /** The connectorId property */
    connectorId?: string;
    /** The displayName property */
    displayName?: string;
    /** The hasPhysicalDevice property */
    hasPhysicalDevice?: boolean;
    /** The manufacturer property */
    manufacturer?: string;
    /** The model property */
    model?: string;
    /** The physicalDeviceId property */
    physicalDeviceId?: string;
}
