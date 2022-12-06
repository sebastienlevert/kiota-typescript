import {ActivityType} from './activityType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSignInLocation} from './deserializeIntoSignInLocation';
import {RiskDetection} from './index';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskDetection(riskDetection: RiskDetection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(riskDetection),
        "activity": n => { riskDetection.activity = n.getEnumValue<ActivityType>(ActivityType) as any ; },
        "activityDateTime": n => { riskDetection.activityDateTime = n.getDateValue() as any ; },
        "additionalInfo": n => { riskDetection.additionalInfo = n.getStringValue() as any ; },
        "correlationId": n => { riskDetection.correlationId = n.getStringValue() as any ; },
        "detectedDateTime": n => { riskDetection.detectedDateTime = n.getDateValue() as any ; },
        "detectionTimingType": n => { riskDetection.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType) as any ; },
        "ipAddress": n => { riskDetection.ipAddress = n.getStringValue() as any ; },
        "lastUpdatedDateTime": n => { riskDetection.lastUpdatedDateTime = n.getDateValue() as any ; },
        "location": n => { riskDetection.location = n.getObject(deserializeIntoSignInLocation) as any ; },
        "requestId": n => { riskDetection.requestId = n.getStringValue() as any ; },
        "riskDetail": n => { riskDetection.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail) as any ; },
        "riskEventType": n => { riskDetection.riskEventType = n.getStringValue() as any ; },
        "riskLevel": n => { riskDetection.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel) as any ; },
        "riskState": n => { riskDetection.riskState = n.getEnumValue<RiskState>(RiskState) as any ; },
        "source": n => { riskDetection.source = n.getStringValue() as any ; },
        "tokenIssuerType": n => { riskDetection.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType) as any ; },
        "userDisplayName": n => { riskDetection.userDisplayName = n.getStringValue() as any ; },
        "userId": n => { riskDetection.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { riskDetection.userPrincipalName = n.getStringValue() as any ; },
    }
}
