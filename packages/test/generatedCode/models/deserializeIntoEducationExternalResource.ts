import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationExternalResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationExternalResource(educationExternalResource: EducationExternalResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationExternalResource),
        "webUrl": n => { educationExternalResource.webUrl = n.getStringValue() as any ; },
    }
}
