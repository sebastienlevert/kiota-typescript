import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectSet(subjectSet: SubjectSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { subjectSet.odataType = n.getStringValue() as any ; },
    }
}
