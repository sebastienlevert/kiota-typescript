import {IdentityProvider, IdentityProviderBase, IdentityUserFlow, IdentityUserFlowAttributeAssignment, UserFlowApiConnectorConfiguration, UserFlowLanguageConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface B2xIdentityUserFlow extends IdentityUserFlow, Partial<Parsable> {
    /** Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration. */
    apiConnectorConfiguration?: UserFlowApiConnectorConfiguration;
    /** The identity providers included in the user flow. */
    identityProviders?: IdentityProvider[];
    /** The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows. */
    languages?: UserFlowLanguageConfiguration[];
    /** The user attribute assignments included in the user flow. */
    userAttributeAssignments?: IdentityUserFlowAttributeAssignment[];
    /** The userFlowIdentityProviders property */
    userFlowIdentityProviders?: IdentityProviderBase[];
}
