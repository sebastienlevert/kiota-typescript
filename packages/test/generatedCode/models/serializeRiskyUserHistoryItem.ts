import {RiskyUserHistoryItem} from './index';
import {serializeRiskUserActivity} from './serializeRiskUserActivity';
import {serializeRiskyUser} from './serializeRiskyUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUserHistoryItem(writer: SerializationWriter, riskyUserHistoryItem: RiskyUserHistoryItem | undefined = {}) : void {
        serializeRiskyUser(writer, riskyUserHistoryItem)
            writer.writeObjectValueFromMethod("activity", riskyUserHistoryItem.activity as any, serializeRiskUserActivity);
            writer.writeStringValue("initiatedBy", riskyUserHistoryItem.initiatedBy);
            writer.writeStringValue("userId", riskyUserHistoryItem.userId);
}
