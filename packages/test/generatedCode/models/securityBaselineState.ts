import {Entity, SecurityBaselineSettingState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityBaselineState extends Entity, Partial<Parsable> {
    /** The display name of the security baseline */
    displayName?: string;
    /** The security baseline template id */
    securityBaselineTemplateId?: string;
    /** The security baseline state for different settings for a device */
    settingStates?: SecurityBaselineSettingState[];
    /** Security Baseline Compliance State */
    state?: SecurityBaselineComplianceState;
    /** User Principal Name */
    userPrincipalName?: string;
}
