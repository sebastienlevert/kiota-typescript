import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {ConditionalAccessConditionSet} from './index';
import {RiskLevel} from './riskLevel';
import {serializeConditionalAccessApplications} from './serializeConditionalAccessApplications';
import {serializeConditionalAccessClientApplications} from './serializeConditionalAccessClientApplications';
import {serializeConditionalAccessDevices} from './serializeConditionalAccessDevices';
import {serializeConditionalAccessLocations} from './serializeConditionalAccessLocations';
import {serializeConditionalAccessPlatforms} from './serializeConditionalAccessPlatforms';
import {serializeConditionalAccessUsers} from './serializeConditionalAccessUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessConditionSet(writer: SerializationWriter, conditionalAccessConditionSet: ConditionalAccessConditionSet | undefined = {}) : void {
            writer.writeObjectValueFromMethod("applications", conditionalAccessConditionSet.applications as any, serializeConditionalAccessApplications);
            writer.writeObjectValueFromMethod("clientApplications", conditionalAccessConditionSet.clientApplications as any, serializeConditionalAccessClientApplications);
            writer.writeEnumValue<ConditionalAccessClientApp>("clientAppTypes", conditionalAccessConditionSet.clientAppTypes);
            writer.writeObjectValueFromMethod("devices", conditionalAccessConditionSet.devices as any, serializeConditionalAccessDevices);
            writer.writeObjectValueFromMethod("locations", conditionalAccessConditionSet.locations as any, serializeConditionalAccessLocations);
            writer.writeStringValue("@odata.type", conditionalAccessConditionSet.odataType);
            writer.writeObjectValueFromMethod("platforms", conditionalAccessConditionSet.platforms as any, serializeConditionalAccessPlatforms);
            writer.writeEnumValue<RiskLevel>("servicePrincipalRiskLevels", conditionalAccessConditionSet.servicePrincipalRiskLevels);
            writer.writeEnumValue<RiskLevel>("signInRiskLevels", conditionalAccessConditionSet.signInRiskLevels);
            writer.writeEnumValue<RiskLevel>("userRiskLevels", conditionalAccessConditionSet.userRiskLevels);
            writer.writeObjectValueFromMethod("users", conditionalAccessConditionSet.users as any, serializeConditionalAccessUsers);
}
