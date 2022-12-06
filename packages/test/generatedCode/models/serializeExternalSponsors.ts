import {ExternalSponsors} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalSponsors(writer: SerializationWriter, externalSponsors: ExternalSponsors | undefined = {}) : void {
        serializeSubjectSet(writer, externalSponsors)
}
