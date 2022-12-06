import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRegistrationCampaignIncludeTarget extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The object identifier of an Azure Active Directory user or group. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** The authentication method that the user is prompted to register. The value must be microsoftAuthenticator. */
    targetedAuthenticationMethod?: string;
    /** The targetType property */
    targetType?: AuthenticationMethodTargetType;
}
