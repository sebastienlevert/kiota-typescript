import {BodyType} from './bodyType';
import {EducationItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationItemBody(educationItemBody: EducationItemBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { educationItemBody.content = n.getStringValue() as any ; },
        "contentType": n => { educationItemBody.contentType = n.getEnumValue<BodyType>(BodyType) as any ; },
        "@odata.type": n => { educationItemBody.odataType = n.getStringValue() as any ; },
    }
}
