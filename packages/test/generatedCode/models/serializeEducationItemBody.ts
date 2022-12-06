import {BodyType} from './bodyType';
import {EducationItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationItemBody(writer: SerializationWriter, educationItemBody: EducationItemBody | undefined = {}) : void {
            writer.writeStringValue("content", educationItemBody.content);
            writer.writeEnumValue<BodyType>("contentType", educationItemBody.contentType);
            writer.writeStringValue("@odata.type", educationItemBody.odataType);
}
