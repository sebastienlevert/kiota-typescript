import {RiskyUser} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeEntity} from './serializeEntity';
import {serializeRiskyUserHistoryItem} from './serializeRiskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUser(writer: SerializationWriter, riskyUser: RiskyUser | undefined = {}) : void {
        serializeEntity(writer, riskyUser)
            writer.writeCollectionOfObjectValuesFromMethod("history", riskyUser.history as any, serializeRiskyUserHistoryItem);
            writer.writeBooleanValue("isDeleted", riskyUser.isDeleted);
            writer.writeBooleanValue("isProcessing", riskyUser.isProcessing);
            writer.writeEnumValue<RiskDetail>("riskDetail", riskyUser.riskDetail);
            writer.writeDateValue("riskLastUpdatedDateTime", riskyUser.riskLastUpdatedDateTime);
            writer.writeEnumValue<RiskLevel>("riskLevel", riskyUser.riskLevel);
            writer.writeEnumValue<RiskState>("riskState", riskyUser.riskState);
            writer.writeStringValue("userDisplayName", riskyUser.userDisplayName);
            writer.writeStringValue("userPrincipalName", riskyUser.userPrincipalName);
}
