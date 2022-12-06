import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectSet(writer: SerializationWriter, subjectSet: SubjectSet | undefined = {}) : void {
            writer.writeStringValue("@odata.type", subjectSet.odataType);
}
