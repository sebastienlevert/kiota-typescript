import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {SignIn} from './index';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeAppliedConditionalAccessPolicy} from './serializeAppliedConditionalAccessPolicy';
import {serializeDeviceDetail} from './serializeDeviceDetail';
import {serializeEntity} from './serializeEntity';
import {serializeSignInLocation} from './serializeSignInLocation';
import {serializeSignInStatus} from './serializeSignInStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignIn(writer: SerializationWriter, signIn: SignIn | undefined = {}) : void {
        serializeEntity(writer, signIn)
            writer.writeStringValue("appDisplayName", signIn.appDisplayName);
            writer.writeStringValue("appId", signIn.appId);
            writer.writeCollectionOfObjectValuesFromMethod("appliedConditionalAccessPolicies", signIn.appliedConditionalAccessPolicies as any, serializeAppliedConditionalAccessPolicy);
            writer.writeStringValue("clientAppUsed", signIn.clientAppUsed);
            writer.writeEnumValue<ConditionalAccessStatus>("conditionalAccessStatus", signIn.conditionalAccessStatus);
            writer.writeStringValue("correlationId", signIn.correlationId);
            writer.writeDateValue("createdDateTime", signIn.createdDateTime);
            writer.writeObjectValueFromMethod("deviceDetail", signIn.deviceDetail as any, serializeDeviceDetail);
            writer.writeStringValue("ipAddress", signIn.ipAddress);
            writer.writeBooleanValue("isInteractive", signIn.isInteractive);
            writer.writeObjectValueFromMethod("location", signIn.location as any, serializeSignInLocation);
            writer.writeStringValue("resourceDisplayName", signIn.resourceDisplayName);
            writer.writeStringValue("resourceId", signIn.resourceId);
            writer.writeEnumValue<RiskDetail>("riskDetail", signIn.riskDetail);
            writer.writeEnumValue<RiskEventType>("riskEventTypes", signIn.riskEventTypes);
            writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", signIn.riskEventTypes_v2);
            writer.writeEnumValue<RiskLevel>("riskLevelAggregated", signIn.riskLevelAggregated);
            writer.writeEnumValue<RiskLevel>("riskLevelDuringSignIn", signIn.riskLevelDuringSignIn);
            writer.writeEnumValue<RiskState>("riskState", signIn.riskState);
            writer.writeObjectValueFromMethod("status", signIn.status as any, serializeSignInStatus);
            writer.writeStringValue("userDisplayName", signIn.userDisplayName);
            writer.writeStringValue("userId", signIn.userId);
            writer.writeStringValue("userPrincipalName", signIn.userPrincipalName);
}
