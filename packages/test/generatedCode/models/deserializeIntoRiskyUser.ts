import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoRiskyUserHistoryItem} from './deserializeIntoRiskyUserHistoryItem';
import {RiskyUser} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUser(riskyUser: RiskyUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(riskyUser),
        "history": n => { riskyUser.history = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskyUserHistoryItem) as any ; },
        "isDeleted": n => { riskyUser.isDeleted = n.getBooleanValue() as any ; },
        "isProcessing": n => { riskyUser.isProcessing = n.getBooleanValue() as any ; },
        "riskDetail": n => { riskyUser.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail) as any ; },
        "riskLastUpdatedDateTime": n => { riskyUser.riskLastUpdatedDateTime = n.getDateValue() as any ; },
        "riskLevel": n => { riskyUser.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel) as any ; },
        "riskState": n => { riskyUser.riskState = n.getEnumValue<RiskState>(RiskState) as any ; },
        "userDisplayName": n => { riskyUser.userDisplayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { riskyUser.userPrincipalName = n.getStringValue() as any ; },
    }
}
