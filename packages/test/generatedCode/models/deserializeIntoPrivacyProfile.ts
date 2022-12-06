import {PrivacyProfile} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrivacyProfile(privacyProfile: PrivacyProfile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contactEmail": n => { privacyProfile.contactEmail = n.getStringValue() as any ; },
        "@odata.type": n => { privacyProfile.odataType = n.getStringValue() as any ; },
        "statementUrl": n => { privacyProfile.statementUrl = n.getStringValue() as any ; },
    }
}
