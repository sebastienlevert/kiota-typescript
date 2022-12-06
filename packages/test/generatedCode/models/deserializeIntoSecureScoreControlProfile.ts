import {deserializeIntoComplianceInformation} from './deserializeIntoComplianceInformation';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSecureScoreControlStateUpdate} from './deserializeIntoSecureScoreControlStateUpdate';
import {deserializeIntoSecurityVendorInformation} from './deserializeIntoSecurityVendorInformation';
import {SecureScoreControlProfile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlProfile(secureScoreControlProfile: SecureScoreControlProfile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(secureScoreControlProfile),
        "actionType": n => { secureScoreControlProfile.actionType = n.getStringValue() as any ; },
        "actionUrl": n => { secureScoreControlProfile.actionUrl = n.getStringValue() as any ; },
        "azureTenantId": n => { secureScoreControlProfile.azureTenantId = n.getStringValue() as any ; },
        "complianceInformation": n => { secureScoreControlProfile.complianceInformation = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceInformation) as any ; },
        "controlCategory": n => { secureScoreControlProfile.controlCategory = n.getStringValue() as any ; },
        "controlStateUpdates": n => { secureScoreControlProfile.controlStateUpdates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScoreControlStateUpdate) as any ; },
        "deprecated": n => { secureScoreControlProfile.deprecated = n.getBooleanValue() as any ; },
        "implementationCost": n => { secureScoreControlProfile.implementationCost = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { secureScoreControlProfile.lastModifiedDateTime = n.getDateValue() as any ; },
        "maxScore": n => { secureScoreControlProfile.maxScore = n.getNumberValue() as any ; },
        "rank": n => { secureScoreControlProfile.rank = n.getNumberValue() as any ; },
        "remediation": n => { secureScoreControlProfile.remediation = n.getStringValue() as any ; },
        "remediationImpact": n => { secureScoreControlProfile.remediationImpact = n.getStringValue() as any ; },
        "service": n => { secureScoreControlProfile.service = n.getStringValue() as any ; },
        "threats": n => { secureScoreControlProfile.threats = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tier": n => { secureScoreControlProfile.tier = n.getStringValue() as any ; },
        "title": n => { secureScoreControlProfile.title = n.getStringValue() as any ; },
        "userImpact": n => { secureScoreControlProfile.userImpact = n.getStringValue() as any ; },
        "vendorInformation": n => { secureScoreControlProfile.vendorInformation = n.getObject(deserializeIntoSecurityVendorInformation) as any ; },
    }
}
