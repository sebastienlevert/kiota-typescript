import {deserializeIntoDeviceComplianceScheduledActionForRule} from '../../../../models/deserializeIntoDeviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleActionsForRulesPostRequestBody(scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceComplianceScheduledActionForRules": n => { scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceScheduledActionForRule) as any ; },
    }
}
