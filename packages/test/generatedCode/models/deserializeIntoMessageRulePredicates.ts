import {Importance} from './importance';
import {MessageRulePredicates, Recipient, SizeRange} from './index';
import {MessageActionFlag} from './messageActionFlag';
import {Recipient} from './recipient';
import {Sensitivity} from './sensitivity';
import {SizeRange} from './sizeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRulePredicates(messageRulePredicates: MessageRulePredicates | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bodyContains": n => { messageRulePredicates.bodyContains = n.getCollectionOfPrimitiveValues<string>(); },
        "bodyOrSubjectContains": n => { messageRulePredicates.bodyOrSubjectContains = n.getCollectionOfPrimitiveValues<string>(); },
        "categories": n => { messageRulePredicates.categories = n.getCollectionOfPrimitiveValues<string>(); },
        "fromAddresses": n => { messageRulePredicates.fromAddresses = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "hasAttachments": n => { messageRulePredicates.hasAttachments = n.getBooleanValue(); },
        "headerContains": n => { messageRulePredicates.headerContains = n.getCollectionOfPrimitiveValues<string>(); },
        "importance": n => { messageRulePredicates.importance = n.getEnumValue<Importance>(Importance); },
        "isApprovalRequest": n => { messageRulePredicates.isApprovalRequest = n.getBooleanValue(); },
        "isAutomaticForward": n => { messageRulePredicates.isAutomaticForward = n.getBooleanValue(); },
        "isAutomaticReply": n => { messageRulePredicates.isAutomaticReply = n.getBooleanValue(); },
        "isEncrypted": n => { messageRulePredicates.isEncrypted = n.getBooleanValue(); },
        "isMeetingRequest": n => { messageRulePredicates.isMeetingRequest = n.getBooleanValue(); },
        "isMeetingResponse": n => { messageRulePredicates.isMeetingResponse = n.getBooleanValue(); },
        "isNonDeliveryReport": n => { messageRulePredicates.isNonDeliveryReport = n.getBooleanValue(); },
        "isPermissionControlled": n => { messageRulePredicates.isPermissionControlled = n.getBooleanValue(); },
        "isReadReceipt": n => { messageRulePredicates.isReadReceipt = n.getBooleanValue(); },
        "isSigned": n => { messageRulePredicates.isSigned = n.getBooleanValue(); },
        "isVoicemail": n => { messageRulePredicates.isVoicemail = n.getBooleanValue(); },
        "messageActionFlag": n => { messageRulePredicates.messageActionFlag = n.getEnumValue<MessageActionFlag>(MessageActionFlag); },
        "notSentToMe": n => { messageRulePredicates.notSentToMe = n.getBooleanValue(); },
        "recipientContains": n => { messageRulePredicates.recipientContains = n.getCollectionOfPrimitiveValues<string>(); },
        "senderContains": n => { messageRulePredicates.senderContains = n.getCollectionOfPrimitiveValues<string>(); },
        "sensitivity": n => { messageRulePredicates.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); },
        "sentCcMe": n => { messageRulePredicates.sentCcMe = n.getBooleanValue(); },
        "sentOnlyToMe": n => { messageRulePredicates.sentOnlyToMe = n.getBooleanValue(); },
        "sentToAddresses": n => { messageRulePredicates.sentToAddresses = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "sentToMe": n => { messageRulePredicates.sentToMe = n.getBooleanValue(); },
        "sentToOrCcMe": n => { messageRulePredicates.sentToOrCcMe = n.getBooleanValue(); },
        "subjectContains": n => { messageRulePredicates.subjectContains = n.getCollectionOfPrimitiveValues<string>(); },
        "withinSizeRange": n => { messageRulePredicates.withinSizeRange = n.deserializeIntoSizeRangeInterface(); },
    }
}
