import {NotificationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationCollectionResponse();
}
