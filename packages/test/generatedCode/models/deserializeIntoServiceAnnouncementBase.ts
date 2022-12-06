import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {ServiceAnnouncementBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementBase(serviceAnnouncementBase: ServiceAnnouncementBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncementBase),
        "details": n => { serviceAnnouncementBase.details = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "endDateTime": n => { serviceAnnouncementBase.endDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { serviceAnnouncementBase.lastModifiedDateTime = n.getDateValue() as any ; },
        "startDateTime": n => { serviceAnnouncementBase.startDateTime = n.getDateValue() as any ; },
        "title": n => { serviceAnnouncementBase.title = n.getStringValue() as any ; },
    }
}
