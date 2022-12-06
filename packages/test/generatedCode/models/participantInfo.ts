import {EndpointType} from './endpointType';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only. */
    countryCode?: string;
    /** The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only. */
    endpointType?: EndpointType;
    /** The identity property */
    identity?: IdentitySet;
    /** The language culture string. Read-only. */
    languageId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The participant ID of the participant. Read-only. */
    participantId?: string;
    /** The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only. */
    region?: string;
}
