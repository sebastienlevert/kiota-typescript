import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetUserIdsWithFlaggedAppRegistrationResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserIdsWithFlaggedAppRegistrationResponse(writer: SerializationWriter, getUserIdsWithFlaggedAppRegistrationResponse: GetUserIdsWithFlaggedAppRegistrationResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserIdsWithFlaggedAppRegistrationResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", getUserIdsWithFlaggedAppRegistrationResponse.value);
}
