import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AlertHistoryState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertHistoryState(writer: SerializationWriter, alertHistoryState: AlertHistoryState | undefined = {}) : void {
            writer.writeStringValue("appId", alertHistoryState.appId);
            writer.writeStringValue("assignedTo", alertHistoryState.assignedTo);
            writer.writeCollectionOfPrimitiveValues<string>("comments", alertHistoryState.comments);
            writer.writeEnumValue<AlertFeedback>("feedback", alertHistoryState.feedback);
            writer.writeStringValue("@odata.type", alertHistoryState.odataType);
            writer.writeEnumValue<AlertStatus>("status", alertHistoryState.status);
            writer.writeDateValue("updatedDateTime", alertHistoryState.updatedDateTime);
            writer.writeStringValue("user", alertHistoryState.user);
}
