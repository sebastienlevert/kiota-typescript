import {EducationCategory} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategory(writer: SerializationWriter, educationCategory: EducationCategory | undefined = {}) : void {
        serializeEntity(writer, educationCategory)
            writer.writeStringValue("displayName", educationCategory.displayName);
}
