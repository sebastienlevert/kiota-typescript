import {ContactRelationship} from './contactRelationship';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RelatedContact extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Indicates whether the user has been consented to access student data. */
    accessConsent?: boolean;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the contact. Required. */
    displayName?: string;
    /** Primary email address of the contact. Required. */
    emailAddress?: string;
    /** Mobile phone number of the contact. */
    mobilePhone?: string;
    /** The OdataType property */
    odataType?: string;
    /** The relationship property */
    relationship?: ContactRelationship;
}
