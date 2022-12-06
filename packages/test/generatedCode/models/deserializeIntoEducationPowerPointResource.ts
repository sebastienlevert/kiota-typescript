import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationPowerPointResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPowerPointResource(educationPowerPointResource: EducationPowerPointResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationPowerPointResource),
        "fileUrl": n => { educationPowerPointResource.fileUrl = n.getStringValue() as any ; },
    }
}
