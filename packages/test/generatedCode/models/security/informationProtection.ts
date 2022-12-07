import {Entity} from '../';
import {InformationProtectionPolicySetting, SensitivityLabel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends Entity, Partial<Parsable> {
    /** The labelPolicySettings property */
    labelPolicySettings?: InformationProtectionPolicySetting;
    /** Read the Microsoft Purview Information Protection labels for the user or organization. */
    sensitivityLabels?: SensitivityLabel[];
}
