import {EducationLinkResource} from './index';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationLinkResource(writer: SerializationWriter, educationLinkResource: EducationLinkResource | undefined = {}) : void {
        serializeEducationResource(writer, educationLinkResource)
            writer.writeStringValue("link", educationLinkResource.link);
}
