import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {ExternalSponsors} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalSponsors(externalSponsors: ExternalSponsors | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(externalSponsors),
    }
}
