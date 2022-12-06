import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateLinkPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The expirationDateTime property */
    expirationDateTime?: Date;
    /** The message property */
    message?: string;
    /** The password property */
    password?: string;
    /** The retainInheritedPermissions property */
    retainInheritedPermissions?: boolean;
    /** The scope property */
    scope?: string;
    /** The type property */
    type?: string;
}
