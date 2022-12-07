import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ReferencedObject extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the referenced object. Must match one of the objects in the directory definition. */
    referencedObjectName?: string;
    /** Currently not supported. Name of the property in the referenced object, the value for which is used as the reference. */
    referencedProperty?: string;
}
