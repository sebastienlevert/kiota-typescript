import {PhysicalAddress} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InstitutionData extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Short description of the institution the user studied at. */
    description?: string;
    /** Name of the institution the user studied at. */
    displayName?: string;
    /** The location property */
    location?: PhysicalAddress;
    /** Link to the institution or department homepage. */
    webUrl?: string;
}
