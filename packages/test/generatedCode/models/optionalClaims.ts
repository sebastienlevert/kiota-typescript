import {OptionalClaim} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OptionalClaims extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The optional claims returned in the JWT access token. */
    accessToken?: OptionalClaim[];
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The optional claims returned in the JWT ID token. */
    idToken?: OptionalClaim[];
    /** The OdataType property */
    odataType?: string;
    /** The optional claims returned in the SAML token. */
    saml2Token?: OptionalClaim[];
}
