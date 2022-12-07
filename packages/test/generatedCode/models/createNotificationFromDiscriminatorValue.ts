import {Notification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Notification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Notification();
}
