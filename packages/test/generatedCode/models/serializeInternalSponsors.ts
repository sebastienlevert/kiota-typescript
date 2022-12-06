import {InternalSponsors} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalSponsors(writer: SerializationWriter, internalSponsors: InternalSponsors | undefined = {}) : void {
        serializeSubjectSet(writer, internalSponsors)
}
