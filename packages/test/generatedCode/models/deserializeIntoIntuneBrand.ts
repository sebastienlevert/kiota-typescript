import {deserializeIntoMimeContent} from './deserializeIntoMimeContent';
import {deserializeIntoRgbColor} from './deserializeIntoRgbColor';
import {IntuneBrand} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntuneBrand(intuneBrand: IntuneBrand | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contactITEmailAddress": n => { intuneBrand.contactITEmailAddress = n.getStringValue() as any ; },
        "contactITName": n => { intuneBrand.contactITName = n.getStringValue() as any ; },
        "contactITNotes": n => { intuneBrand.contactITNotes = n.getStringValue() as any ; },
        "contactITPhoneNumber": n => { intuneBrand.contactITPhoneNumber = n.getStringValue() as any ; },
        "darkBackgroundLogo": n => { intuneBrand.darkBackgroundLogo = n.getObject(deserializeIntoMimeContent) as any ; },
        "displayName": n => { intuneBrand.displayName = n.getStringValue() as any ; },
        "lightBackgroundLogo": n => { intuneBrand.lightBackgroundLogo = n.getObject(deserializeIntoMimeContent) as any ; },
        "@odata.type": n => { intuneBrand.odataType = n.getStringValue() as any ; },
        "onlineSupportSiteName": n => { intuneBrand.onlineSupportSiteName = n.getStringValue() as any ; },
        "onlineSupportSiteUrl": n => { intuneBrand.onlineSupportSiteUrl = n.getStringValue() as any ; },
        "privacyUrl": n => { intuneBrand.privacyUrl = n.getStringValue() as any ; },
        "showDisplayNameNextToLogo": n => { intuneBrand.showDisplayNameNextToLogo = n.getBooleanValue() as any ; },
        "showLogo": n => { intuneBrand.showLogo = n.getBooleanValue() as any ; },
        "showNameNextToLogo": n => { intuneBrand.showNameNextToLogo = n.getBooleanValue() as any ; },
        "themeColor": n => { intuneBrand.themeColor = n.getObject(deserializeIntoRgbColor) as any ; },
    }
}
