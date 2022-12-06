import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationMediaResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationMediaResource(educationMediaResource: EducationMediaResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationMediaResource),
        "fileUrl": n => { educationMediaResource.fileUrl = n.getStringValue() as any ; },
    }
}
