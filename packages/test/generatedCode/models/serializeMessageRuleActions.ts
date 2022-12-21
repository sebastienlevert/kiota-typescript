import {Importance} from './importance';
import {MessageRuleActions} from './index';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRuleActions(writer: SerializationWriter, messageRuleActions: MessageRuleActions | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("assignCategories", messageRuleActions.assignCategories);
            writer.writeStringValue("copyToFolder", messageRuleActions.copyToFolder);
            writer.writeBooleanValue("delete", messageRuleActions.delete);
            writer.writeCollectionOfObjectValuesFromMethod("forwardAsAttachmentTo", messageRuleActions.forwardAsAttachmentTo as any, serializeRecipient);
            writer.writeCollectionOfObjectValuesFromMethod("forwardTo", messageRuleActions.forwardTo as any, serializeRecipient);
            writer.writeBooleanValue("markAsRead", messageRuleActions.markAsRead);
            writer.writeEnumValue<Importance>("markImportance", messageRuleActions.markImportance);
            writer.writeStringValue("moveToFolder", messageRuleActions.moveToFolder);
            writer.writeBooleanValue("permanentDelete", messageRuleActions.permanentDelete);
            writer.writeCollectionOfObjectValuesFromMethod("redirectTo", messageRuleActions.redirectTo as any, serializeRecipient);
            writer.writeBooleanValue("stopProcessingRules", messageRuleActions.stopProcessingRules);
}
