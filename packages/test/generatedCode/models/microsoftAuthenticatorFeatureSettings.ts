import {AuthenticationMethodFeatureConfiguration} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorFeatureSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Determines whether the user's Authenticator app will show them the client app they are signing into. */
    displayAppInformationRequiredState?: AuthenticationMethodFeatureConfiguration;
    /** Determines whether the user's Authenticator app will show them the geographic location of where the authentication request originated from. */
    displayLocationInformationRequiredState?: AuthenticationMethodFeatureConfiguration;
    /** The OdataType property */
    odataType?: string;
}
