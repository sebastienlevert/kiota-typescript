import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoServiceHealth} from './deserializeIntoServiceHealth';
import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {deserializeIntoServiceUpdateMessage} from './deserializeIntoServiceUpdateMessage';
import {ServiceAnnouncement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncement(serviceAnnouncement: ServiceAnnouncement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncement),
        "healthOverviews": n => { serviceAnnouncement.healthOverviews = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealth) as any ; },
        "issues": n => { serviceAnnouncement.issues = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealthIssue) as any ; },
        "messages": n => { serviceAnnouncement.messages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceUpdateMessage) as any ; },
    }
}
