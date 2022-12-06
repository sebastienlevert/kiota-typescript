import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {InternalSponsors} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalSponsors(internalSponsors: InternalSponsors | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(internalSponsors),
    }
}
