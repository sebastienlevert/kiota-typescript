import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationWordResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationWordResource(educationWordResource: EducationWordResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationWordResource),
        "fileUrl": n => { educationWordResource.fileUrl = n.getStringValue() as any ; },
    }
}
