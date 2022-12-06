import {ScoredEmailAddressCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeScoredEmailAddress} from './serializeScoredEmailAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScoredEmailAddressCollectionResponse(writer: SerializationWriter, scoredEmailAddressCollectionResponse: ScoredEmailAddressCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, scoredEmailAddressCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", scoredEmailAddressCollectionResponse.value as any, serializeScoredEmailAddress);
}
