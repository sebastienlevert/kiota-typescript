import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMimeContent} from './deserializeIntoMimeContent';
import {deserializeIntoMobileAppAssignment} from './deserializeIntoMobileAppAssignment';
import {deserializeIntoMobileAppCategory} from './deserializeIntoMobileAppCategory';
import {MobileApp} from './index';
import {MobileAppPublishingState} from './mobileAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileApp(mobileApp: MobileApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileApp),
        "assignments": n => { mobileApp.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppAssignment) as any ; },
        "categories": n => { mobileApp.categories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppCategory) as any ; },
        "createdDateTime": n => { mobileApp.createdDateTime = n.getDateValue() as any ; },
        "description": n => { mobileApp.description = n.getStringValue() as any ; },
        "developer": n => { mobileApp.developer = n.getStringValue() as any ; },
        "displayName": n => { mobileApp.displayName = n.getStringValue() as any ; },
        "informationUrl": n => { mobileApp.informationUrl = n.getStringValue() as any ; },
        "isFeatured": n => { mobileApp.isFeatured = n.getBooleanValue() as any ; },
        "largeIcon": n => { mobileApp.largeIcon = n.getObject(deserializeIntoMimeContent) as any ; },
        "lastModifiedDateTime": n => { mobileApp.lastModifiedDateTime = n.getDateValue() as any ; },
        "notes": n => { mobileApp.notes = n.getStringValue() as any ; },
        "owner": n => { mobileApp.owner = n.getStringValue() as any ; },
        "privacyInformationUrl": n => { mobileApp.privacyInformationUrl = n.getStringValue() as any ; },
        "publisher": n => { mobileApp.publisher = n.getStringValue() as any ; },
        "publishingState": n => { mobileApp.publishingState = n.getEnumValue<MobileAppPublishingState>(MobileAppPublishingState) as any ; },
    }
}
