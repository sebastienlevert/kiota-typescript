import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget, ExcludeTarget} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRegistrationCampaign extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Users and groups of users that are excluded from being prompted to set up the authentication method. */
    excludeTargets?: ExcludeTarget[];
    /** Users and groups of users that are prompted to set up the authentication method. */
    includeTargets?: AuthenticationMethodsRegistrationCampaignIncludeTarget[];
    /** The OdataType property */
    odataType?: string;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt. */
    snoozeDurationInDays?: number;
    /** The state property */
    state?: AdvancedConfigState;
}
