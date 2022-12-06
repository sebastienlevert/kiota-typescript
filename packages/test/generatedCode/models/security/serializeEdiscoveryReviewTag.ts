import {ChildSelectability} from './childSelectability';
import {EdiscoveryReviewTag} from './index';
import {serializeTag} from './serializeTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewTag(writer: SerializationWriter, ediscoveryReviewTag: EdiscoveryReviewTag | undefined = {}) : void {
        serializeTag(writer, ediscoveryReviewTag)
            writer.writeEnumValue<ChildSelectability>("childSelectability", ediscoveryReviewTag.childSelectability);
            writer.writeCollectionOfObjectValuesFromMethod("childTags", ediscoveryReviewTag.childTags as any, serializeEdiscoveryReviewTag);
            writer.writeObjectValueFromMethod("parent", ediscoveryReviewTag.parent as any, serializeEdiscoveryReviewTag);
}
