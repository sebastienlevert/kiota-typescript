import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {deserializeIntoSizeRange} from './deserializeIntoSizeRange';
import {Importance} from './importance';
import {MessageRulePredicates} from './index';
import {MessageActionFlag} from './messageActionFlag';
import {Sensitivity} from './sensitivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRulePredicates(messageRulePredicates: MessageRulePredicates | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bodyContains": n => { messageRulePredicates.bodyContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "bodyOrSubjectContains": n => { messageRulePredicates.bodyOrSubjectContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "categories": n => { messageRulePredicates.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "fromAddresses": n => { messageRulePredicates.fromAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "hasAttachments": n => { messageRulePredicates.hasAttachments = n.getBooleanValue() as any ; },
        "headerContains": n => { messageRulePredicates.headerContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "importance": n => { messageRulePredicates.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "isApprovalRequest": n => { messageRulePredicates.isApprovalRequest = n.getBooleanValue() as any ; },
        "isAutomaticForward": n => { messageRulePredicates.isAutomaticForward = n.getBooleanValue() as any ; },
        "isAutomaticReply": n => { messageRulePredicates.isAutomaticReply = n.getBooleanValue() as any ; },
        "isEncrypted": n => { messageRulePredicates.isEncrypted = n.getBooleanValue() as any ; },
        "isMeetingRequest": n => { messageRulePredicates.isMeetingRequest = n.getBooleanValue() as any ; },
        "isMeetingResponse": n => { messageRulePredicates.isMeetingResponse = n.getBooleanValue() as any ; },
        "isNonDeliveryReport": n => { messageRulePredicates.isNonDeliveryReport = n.getBooleanValue() as any ; },
        "isPermissionControlled": n => { messageRulePredicates.isPermissionControlled = n.getBooleanValue() as any ; },
        "isReadReceipt": n => { messageRulePredicates.isReadReceipt = n.getBooleanValue() as any ; },
        "isSigned": n => { messageRulePredicates.isSigned = n.getBooleanValue() as any ; },
        "isVoicemail": n => { messageRulePredicates.isVoicemail = n.getBooleanValue() as any ; },
        "messageActionFlag": n => { messageRulePredicates.messageActionFlag = n.getEnumValue<MessageActionFlag>(MessageActionFlag) as any ; },
        "notSentToMe": n => { messageRulePredicates.notSentToMe = n.getBooleanValue() as any ; },
        "recipientContains": n => { messageRulePredicates.recipientContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "senderContains": n => { messageRulePredicates.senderContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sensitivity": n => { messageRulePredicates.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity) as any ; },
        "sentCcMe": n => { messageRulePredicates.sentCcMe = n.getBooleanValue() as any ; },
        "sentOnlyToMe": n => { messageRulePredicates.sentOnlyToMe = n.getBooleanValue() as any ; },
        "sentToAddresses": n => { messageRulePredicates.sentToAddresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "sentToMe": n => { messageRulePredicates.sentToMe = n.getBooleanValue() as any ; },
        "sentToOrCcMe": n => { messageRulePredicates.sentToOrCcMe = n.getBooleanValue() as any ; },
        "subjectContains": n => { messageRulePredicates.subjectContains = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "withinSizeRange": n => { messageRulePredicates.withinSizeRange = n.getObject(deserializeIntoSizeRange) as any ; },
    }
}
