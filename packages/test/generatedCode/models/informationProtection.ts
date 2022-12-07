import {Bitlocker, DataLossPreventionPolicy, Entity, InformationProtectionPolicy, SensitivityLabel, SensitivityPolicySettings, ThreatAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends Entity, Partial<Parsable> {
    /** The bitlocker property */
    bitlocker?: Bitlocker;
    /** The dataLossPreventionPolicies property */
    dataLossPreventionPolicies?: DataLossPreventionPolicy[];
    /** The policy property */
    policy?: InformationProtectionPolicy;
    /** The sensitivityLabels property */
    sensitivityLabels?: SensitivityLabel[];
    /** The sensitivityPolicySettings property */
    sensitivityPolicySettings?: SensitivityPolicySettings;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?: ThreatAssessmentRequest[];
}
