import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExcludeTarget extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The object identifier of an Azure Active Directory user or group. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** The targetType property */
    targetType?: AuthenticationMethodTargetType;
}
