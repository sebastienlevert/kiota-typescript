import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationLinkResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationLinkResource(educationLinkResource: EducationLinkResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationResource(educationLinkResource),
        "link": n => { educationLinkResource.link = n.getStringValue() as any ; },
    }
}
