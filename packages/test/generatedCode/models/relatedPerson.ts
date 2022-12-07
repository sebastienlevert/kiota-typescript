import {PersonRelationship} from './personRelationship';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RelatedPerson extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the person. */
    displayName?: string;
    /** The relationship property */
    relationship?: PersonRelationship;
    /** Email address or reference to person within organization. */
    userPrincipalName?: string;
}
