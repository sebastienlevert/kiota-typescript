import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationFileResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFileResource(educationFileResource: EducationFileResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationFileResource),
        "fileUrl": n => { educationFileResource.fileUrl = n.getStringValue() as any ; },
    }
}
