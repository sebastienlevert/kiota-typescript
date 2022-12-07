import {WritebackConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupWritebackConfiguration extends Partial<Parsable>, WritebackConfiguration {
    /** Indicates the target on-premise group type the cloud object will be written back as. Nullable. The possible values are: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup.If the cloud group is a unified (Microsoft 365) group, this property can be one of the following: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup. Azure AD security groups can be written back as universalSecurityGroup. If isEnabled or the NewUnifiedGroupWritebackDefault group setting is true but this property is not explicitly configured: Microsoft 365 groups will be written back as universalDistributionGroup by defaultSecurity groups will be written back as universalSecurityGroup by default */
    onPremisesGroupType?: string;
}
