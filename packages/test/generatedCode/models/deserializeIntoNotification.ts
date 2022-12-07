import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPayloadTypes} from './deserializeIntoPayloadTypes';
import {deserializeIntoTargetPolicyEndpoints} from './deserializeIntoTargetPolicyEndpoints';
import {Notification} from './index';
import {Priority} from './priority';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotification(notification: Notification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(notification),
        "displayTimeToLive": n => { notification.displayTimeToLive = n.getNumberValue() as any ; },
        "expirationDateTime": n => { notification.expirationDateTime = n.getDateValue() as any ; },
        "groupName": n => { notification.groupName = n.getStringValue() as any ; },
        "payload": n => { notification.payload = n.getObject(deserializeIntoPayloadTypes) as any ; },
        "priority": n => { notification.priority = n.getEnumValue<Priority>(Priority) as any ; },
        "targetHostName": n => { notification.targetHostName = n.getStringValue() as any ; },
        "targetPolicy": n => { notification.targetPolicy = n.getObject(deserializeIntoTargetPolicyEndpoints) as any ; },
    }
}
