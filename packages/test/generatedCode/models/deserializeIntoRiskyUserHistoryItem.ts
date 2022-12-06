import {deserializeIntoRiskUserActivity} from './deserializeIntoRiskUserActivity';
import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import {RiskyUserHistoryItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserHistoryItem(riskyUserHistoryItem: RiskyUserHistoryItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRiskyUser(riskyUserHistoryItem),
        "activity": n => { riskyUserHistoryItem.activity = n.getObject(deserializeIntoRiskUserActivity) as any ; },
        "initiatedBy": n => { riskyUserHistoryItem.initiatedBy = n.getStringValue() as any ; },
        "userId": n => { riskyUserHistoryItem.userId = n.getStringValue() as any ; },
    }
}
