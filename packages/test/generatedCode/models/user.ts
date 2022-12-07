import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface User extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email property */
    email?: string;
    /** The firstName property */
    firstName?: string;
    /** The id property */
    id?: number;
    /** The lastName property */
    lastName?: string;
    /** The password property */
    password?: string;
    /** The phone property */
    phone?: string;
    /** The username property */
    username?: string;
    /** User Status */
    userStatus?: number;
}
