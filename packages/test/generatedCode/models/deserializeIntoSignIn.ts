import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {deserializeIntoAppliedConditionalAccessPolicy} from './deserializeIntoAppliedConditionalAccessPolicy';
import {deserializeIntoDeviceDetail} from './deserializeIntoDeviceDetail';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSignInLocation} from './deserializeIntoSignInLocation';
import {deserializeIntoSignInStatus} from './deserializeIntoSignInStatus';
import {SignIn} from './index';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignIn(signIn: SignIn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(signIn),
        "appDisplayName": n => { signIn.appDisplayName = n.getStringValue() as any ; },
        "appId": n => { signIn.appId = n.getStringValue() as any ; },
        "appliedConditionalAccessPolicies": n => { signIn.appliedConditionalAccessPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppliedConditionalAccessPolicy) as any ; },
        "clientAppUsed": n => { signIn.clientAppUsed = n.getStringValue() as any ; },
        "conditionalAccessStatus": n => { signIn.conditionalAccessStatus = n.getEnumValue<ConditionalAccessStatus>(ConditionalAccessStatus) as any ; },
        "correlationId": n => { signIn.correlationId = n.getStringValue() as any ; },
        "createdDateTime": n => { signIn.createdDateTime = n.getDateValue() as any ; },
        "deviceDetail": n => { signIn.deviceDetail = n.getObject(deserializeIntoDeviceDetail) as any ; },
        "ipAddress": n => { signIn.ipAddress = n.getStringValue() as any ; },
        "isInteractive": n => { signIn.isInteractive = n.getBooleanValue() as any ; },
        "location": n => { signIn.location = n.getObject(deserializeIntoSignInLocation) as any ; },
        "resourceDisplayName": n => { signIn.resourceDisplayName = n.getStringValue() as any ; },
        "resourceId": n => { signIn.resourceId = n.getStringValue() as any ; },
        "riskDetail": n => { signIn.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail) as any ; },
        "riskEventTypes": n => { signIn.riskEventTypes = n.getEnumValues<RiskEventType>(RiskEventType) as any ; },
        "riskEventTypes_v2": n => { signIn.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "riskLevelAggregated": n => { signIn.riskLevelAggregated = n.getEnumValue<RiskLevel>(RiskLevel) as any ; },
        "riskLevelDuringSignIn": n => { signIn.riskLevelDuringSignIn = n.getEnumValue<RiskLevel>(RiskLevel) as any ; },
        "riskState": n => { signIn.riskState = n.getEnumValue<RiskState>(RiskState) as any ; },
        "status": n => { signIn.status = n.getObject(deserializeIntoSignInStatus) as any ; },
        "userDisplayName": n => { signIn.userDisplayName = n.getStringValue() as any ; },
        "userId": n => { signIn.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { signIn.userPrincipalName = n.getStringValue() as any ; },
    }
}
