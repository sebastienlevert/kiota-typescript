import {RiskUserActivity} from './index';
import {RiskDetail} from './riskDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskUserActivity(riskUserActivity: RiskUserActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "detail": n => { riskUserActivity.detail = n.getEnumValue<RiskDetail>(RiskDetail) as any ; },
        "@odata.type": n => { riskUserActivity.odataType = n.getStringValue() as any ; },
        "riskEventTypes": n => { riskUserActivity.riskEventTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
