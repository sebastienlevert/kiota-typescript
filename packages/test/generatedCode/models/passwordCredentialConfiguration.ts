import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordCredentialConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The maxLifetime property */
    maxLifetime?: Duration;
    /** Enforces the policy for an app created on or after the enforcement date. For existing applications, the enforcement date would be backdated. To apply to all applications, this date would be null. */
    restrictForAppsCreatedAfterDateTime?: Date;
    /** The restrictionType property */
    restrictionType?: AppCredentialRestrictionType;
}
