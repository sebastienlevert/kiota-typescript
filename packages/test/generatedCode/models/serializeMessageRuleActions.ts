import {Importance} from './importance';
import {MessageRuleActions, Recipient} from './index';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRuleActions(writer: SerializationWriter, messageRuleActions: MessageRuleActions | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("assignCategories", messageRuleActions.assignCategories);
            writer.writeStringValue("copyToFolder", messageRuleActions.copyToFolder);
            writer.writeBooleanValue("delete", messageRuleActions.delete);
            writer.writeCollectionOfObjectValues<Recipient>("forwardAsAttachmentTo", messageRuleActions.forwardAsAttachmentTo);
            writer.writeCollectionOfObjectValues<Recipient>("forwardTo", messageRuleActions.forwardTo);
            writer.writeBooleanValue("markAsRead", messageRuleActions.markAsRead);
            writer.writeEnumValue<Importance>("markImportance", messageRuleActions.markImportance);
            writer.writeStringValue("moveToFolder", messageRuleActions.moveToFolder);
            writer.writeBooleanValue("permanentDelete", messageRuleActions.permanentDelete);
            writer.writeCollectionOfObjectValues<Recipient>("redirectTo", messageRuleActions.redirectTo);
            writer.writeBooleanValue("stopProcessingRules", messageRuleActions.stopProcessingRules);
}
