import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationResource(educationResource: EducationResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { educationResource.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { educationResource.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { educationResource.displayName = n.getStringValue() as any ; },
        "lastModifiedBy": n => { educationResource.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { educationResource.lastModifiedDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { educationResource.odataType = n.getStringValue() as any ; },
    }
}
