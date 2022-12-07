import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordSingleSignOnField extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Title/label override for customization. */
    customizedLabel?: string;
    /** Label that would be used if no customizedLabel is provided. Read only. */
    defaultLabel?: string;
    /** Id used to identity the field type. This is an internal id and possible values are param_1, param_2, param_userName, param_password. */
    fieldId?: string;
    /** Type of the credential. The values can be text, password. */
    type?: string;
}
