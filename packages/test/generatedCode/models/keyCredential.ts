import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface KeyCredential extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Custom key identifier */
    customKeyIdentifier?: string;
    /** Friendly name for the key. Optional. */
    displayName?: string;
    /** The date and time at which the credential expires. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    endDateTime?: Date;
    /** Value for the key credential. Should be a Base64 encoded value. Returned only on $select for a single object, that is, GET applications/{applicationId}?$select=keyCredentials or GET servicePrincipals/{servicePrincipalId}?$select=keyCredentials; otherwise, it is always null. */
    key?: string;
    /** The unique identifier for the key. */
    keyId?: string;
    /** The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    startDateTime?: Date;
    /** The type of key credential; for example, Symmetric, AsymmetricX509Cert. */
    type?: string;
    /** A string that describes the purpose for which the key can be used; for example, Verify. */
    usage?: string;
}
