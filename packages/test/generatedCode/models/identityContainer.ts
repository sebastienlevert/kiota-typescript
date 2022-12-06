import {B2xIdentityUserFlow, ConditionalAccessRoot, Entity, IdentityApiConnector, IdentityProviderBase, IdentityUserFlowAttribute} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityContainer extends Entity, Partial<Parsable> {
    /** Represents entry point for API connectors. */
    apiConnectors?: IdentityApiConnector[];
    /** Represents entry point for B2X/self-service sign-up identity userflows. */
    b2xUserFlows?: B2xIdentityUserFlow[];
    /** the entry point for the Conditional Access (CA) object model. */
    conditionalAccess?: ConditionalAccessRoot;
    /** The identityProviders property */
    identityProviders?: IdentityProviderBase[];
    /** Represents entry point for identity userflow attributes. */
    userFlowAttributes?: IdentityUserFlowAttribute[];
}
