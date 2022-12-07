import {Entity, SecurityBaselineContributingPolicy, SettingSource} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityBaselineSettingState extends Entity, Partial<Parsable> {
    /** The policies that contribute to this setting instance */
    contributingPolicies?: SecurityBaselineContributingPolicy[];
    /** The error code if the setting is in error state */
    errorCode?: string;
    /** The setting category id which this setting belongs to */
    settingCategoryId?: string;
    /** The setting category name which this setting belongs to */
    settingCategoryName?: string;
    /** The setting id guid */
    settingId?: string;
    /** The setting name that is being reported */
    settingName?: string;
    /** The policies that contribute to this setting instance */
    sourcePolicies?: SettingSource[];
    /** Security Baseline Compliance State */
    state?: SecurityBaselineComplianceState;
}
