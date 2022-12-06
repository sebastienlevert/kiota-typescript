import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {deserializeIntoConditionalAccessApplications} from './deserializeIntoConditionalAccessApplications';
import {deserializeIntoConditionalAccessClientApplications} from './deserializeIntoConditionalAccessClientApplications';
import {deserializeIntoConditionalAccessDevices} from './deserializeIntoConditionalAccessDevices';
import {deserializeIntoConditionalAccessLocations} from './deserializeIntoConditionalAccessLocations';
import {deserializeIntoConditionalAccessPlatforms} from './deserializeIntoConditionalAccessPlatforms';
import {deserializeIntoConditionalAccessUsers} from './deserializeIntoConditionalAccessUsers';
import {ConditionalAccessConditionSet} from './index';
import {RiskLevel} from './riskLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessConditionSet(conditionalAccessConditionSet: ConditionalAccessConditionSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applications": n => { conditionalAccessConditionSet.applications = n.getObject(deserializeIntoConditionalAccessApplications) as any ; },
        "clientApplications": n => { conditionalAccessConditionSet.clientApplications = n.getObject(deserializeIntoConditionalAccessClientApplications) as any ; },
        "clientAppTypes": n => { conditionalAccessConditionSet.clientAppTypes = n.getEnumValues<ConditionalAccessClientApp>(ConditionalAccessClientApp) as any ; },
        "devices": n => { conditionalAccessConditionSet.devices = n.getObject(deserializeIntoConditionalAccessDevices) as any ; },
        "locations": n => { conditionalAccessConditionSet.locations = n.getObject(deserializeIntoConditionalAccessLocations) as any ; },
        "@odata.type": n => { conditionalAccessConditionSet.odataType = n.getStringValue() as any ; },
        "platforms": n => { conditionalAccessConditionSet.platforms = n.getObject(deserializeIntoConditionalAccessPlatforms) as any ; },
        "servicePrincipalRiskLevels": n => { conditionalAccessConditionSet.servicePrincipalRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel) as any ; },
        "signInRiskLevels": n => { conditionalAccessConditionSet.signInRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel) as any ; },
        "userRiskLevels": n => { conditionalAccessConditionSet.userRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel) as any ; },
        "users": n => { conditionalAccessConditionSet.users = n.getObject(deserializeIntoConditionalAccessUsers) as any ; },
    }
}
