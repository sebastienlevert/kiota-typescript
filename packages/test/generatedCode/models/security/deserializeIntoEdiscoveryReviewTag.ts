import {ChildSelectability} from './childSelectability';
import {deserializeIntoTag} from './deserializeIntoTag';
import {EdiscoveryReviewTag} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewTag(ediscoveryReviewTag: EdiscoveryReviewTag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTag(ediscoveryReviewTag),
        "childSelectability": n => { ediscoveryReviewTag.childSelectability = n.getEnumValue<ChildSelectability>(ChildSelectability) as any ; },
        "childTags": n => { ediscoveryReviewTag.childTags = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
        "parent": n => { ediscoveryReviewTag.parent = n.getObject(deserializeIntoEdiscoveryReviewTag) as any ; },
    }
}
