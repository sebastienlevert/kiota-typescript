import {serializeDeviceComplianceScheduledActionForRule} from '../../../../models/serializeDeviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleActionsForRulesPostRequestBody(writer: SerializationWriter, scheduleActionsForRulesPostRequestBody: ScheduleActionsForRulesPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("deviceComplianceScheduledActionForRules", scheduleActionsForRulesPostRequestBody.deviceComplianceScheduledActionForRules as any, serializeDeviceComplianceScheduledActionForRule);
}
