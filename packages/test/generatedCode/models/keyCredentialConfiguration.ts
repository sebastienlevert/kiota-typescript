import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface KeyCredentialConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The maxLifetime property */
    maxLifetime?: Duration;
    /** Timestamp when the policy is enforced for all apps created on or after the specified date. For existing applications, the enforcement date would be back dated. To apply to all applications regardless of their creation date, this property would be null. Nullable. */
    restrictForAppsCreatedAfterDateTime?: Date;
    /** The restrictionType property */
    restrictionType?: AppKeyCredentialRestrictionType;
}
